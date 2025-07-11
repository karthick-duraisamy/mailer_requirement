import React, { useEffect, useRef } from "react";

interface HtmlViewerProps {
  rawHtml: string;
}

const HtmlViewer: React.FC<HtmlViewerProps> = ({ rawHtml }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getSanitizedContent = (htmlString: string): string => {
    // Optionally sanitize or clean line breaks
    return htmlString.replace(/[\n\r\t\\]/g, "");
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "A") {
        event.preventDefault();
        const href = (target as HTMLAnchorElement).href;
        if (href) {
          window.open(href, "_blank");
        }
      }
    };

    container?.addEventListener("click", handleLinkClick);

    return () => {
      container?.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getSanitizedContent(rawHtml) }}
    />
  );
};

export default HtmlViewer;
