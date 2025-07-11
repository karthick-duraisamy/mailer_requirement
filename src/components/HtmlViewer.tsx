import React, { useEffect, useRef } from "react";
// Optional: Enable this if you want to sanitize script/style injection
// import DOMPurify from "dompurify";

interface HtmlViewerProps {
  rawHtml: string;
}

const HtmlViewer: React.FC<HtmlViewerProps> = ({ rawHtml }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getSanitizedContent = (htmlString: string): string => {
    // Clean unwanted characters
    const cleaned = htmlString.replace(/[\n\r\t\\]/g, "");

    // OPTIONAL: Sanitize script tags using DOMPurify if needed
    // const purified = DOMPurify.sanitize(cleaned, {
    //   ADD_TAGS: ["style"],
    //   ADD_ATTR: ["style"]
    // });

    // Scope all <style> blocks to .html-content
    const scoped = cleaned.replace(
      /<style([^>]*)>([\s\S]*?)<\/style>/gi,
      (match, attrs, css) => {
        const scopedCss = css.replace(/(^|\})([^{@}]+)\{/g, (m: any, sep: any, selector: string) => {
          // Skip @media, @keyframes, etc.
          if (selector.trim().startsWith("@")) return m;
          // Prefix each selector with .html-content
          const scopedSelector = selector
            .split(",")
            .map(s => `.html-content ${s.trim()}`)
            .join(", ");
          return `${sep}${scopedSelector} {`;
        });

        return `<style${attrs}>${scopedCss}</style>`;
      }
    );

    return scoped;
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
