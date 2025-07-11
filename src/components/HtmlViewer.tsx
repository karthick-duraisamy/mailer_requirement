import React from "react";

interface HtmlViewerProps {
  rawHtml: string;
}

const HtmlViewer: React.FC<HtmlViewerProps> = ({ rawHtml }) => {
  const getSanitizedContent = (htmlString: string): string => {
    return htmlString.replace(/[\n\r]/g, '');;
  };

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: getSanitizedContent(rawHtml) }}
    />
  );
};

export default HtmlViewer;
