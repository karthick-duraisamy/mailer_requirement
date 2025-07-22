import React from 'react';
import { formatTimestamp, getSenderName } from '../hooks/commonFunction';

const PrintConversation = ({ sortedMessages, email, collections }: any) => {

      // Generate HTML content for the entire conversation
      const generateConversationHTML = () => {
        if (!sortedMessages || sortedMessages.length === 0) {
          return '<p>No messages to display</p>';
        }
    
        // Replicate the HtmlViewer component's functionality
        const renderHtmlContent = (rawHtml :any) => {
          if (!rawHtml) return '';
          
          // Clean unwanted characters
          const cleaned = rawHtml.replace(/[\n\r\t\\]/g, "");
          
          // Scope all <style> blocks to .html-content (like your component does)
          const scoped = cleaned.replace(
            /<style([^>]*)>([\s\S]*?)<\/style>/gi,
            (attrs : any, css : any) => {
              const scopedCss = css.replace(/(^|\})([^{@}]+)\{/g, (m : any, sep : any, selector : any) => {
                // Skip @media, @keyframes, etc.
                if (selector.trim().startsWith("@")) return m;
                // Prefix each selector with .html-content
                const scopedSelector = selector
                  .split(",")
                  .map((s : any) => `.html-content ${s.trim()}`)
                  .join(", ");
                return `${sep}${scopedSelector} {`;
              });
              return `<style${attrs}>${scopedCss}</style>`;
            }
          );
          
          return scoped;
        };
    
        const renderMessageBody = (message: any) => {
          const content = message?.body_html || message?.body_plain || message?.snippet || '';
          
          if (message?.body_html) {
            return `
              <div class="html-content" style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
                ${renderHtmlContent(content)}
              </div>
            `;
          }
          
          // For plain text, preserve whitespace and line breaks
          return `
            <div style="white-space: pre-wrap; font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
              ${content.replace(/[\n\r\t\\]/g, "")}
            </div>
          `;
        };
    
        const conversationHTML = sortedMessages.map((message : any) => {
          const isFromCurrentUser = message.from_address === email.from_address;
          const senderName = getSenderName(message?.from_address);
          const timestamp = formatTimestamp(message.created_at);
    
          return `
            <div style="margin-bottom: 20px; padding: 20px; background-color: ${isFromCurrentUser ? '#eff6ff' : '#f9fafb'}; border-radius: 8px; border: 1px solid #e5e7eb;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; background: ${isFromCurrentUser ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-weight: 600; font-size: 14px;">${senderName?.charAt(0).toUpperCase() || 'U'}</span>
                </div>
                <div>
                  <div style="font-weight: 600; color: #111827; margin-bottom: 4px;">${message.from_address}</div>
                  <div style="font-size: 14px; color: #6b7280;">${timestamp}</div>
                </div>
              </div>
              
              ${message.cc && message.cc.length > 0 && message.cc[0] !== "" ? `
                <div style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin-bottom: 15px;">
                  <div style="font-weight: 500; color: #374151; margin-bottom: 4px;">CC:</div>
                  <div style="color: #6b7280; font-size: 14px;">${message.cc.join(', ')}</div>
                </div>
              ` : ''}
              
              ${message.bcc && message.bcc.length > 0 && message.bcc[0] !== "" ? `
                <div style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin-bottom: 15px;">
                  <div style="font-weight: 500; color: #374151; margin-bottom: 4px;">BCC:</div>
                  <div style="color: #6b7280; font-size: 14px;">${message.bcc.join(', ')}</div>
                </div>
              ` : ''}
              
              <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                ${renderMessageBody(message)}
              </div>
            </div>
          `;
        }).join('');
    
        // Add CSS for the html-content class (replicating your component's behavior)
        const htmlContentStyles = `
          <style>
            .html-content {
              font-family: Arial, sans-serif;
              color: #333;
              line-height: 1.5;
            }
            .html-content a {
              color: #3b82f6;
              text-decoration: underline;
            }
            .html-content a:hover {
              text-decoration: none;
            }
            .html-content img {
              max-width: 100%;
              height: auto;
            }
          </style>
        `;
    
        return `
          <html>
            <head>
              ${htmlContentStyles}
              <script>
                // Handle link clicks to open in new tab (like your component does)
                document.addEventListener('DOMContentLoaded', function() {
                  document.querySelectorAll('.html-content a').forEach(link => {
                    link.addEventListener('click', function(e) {
                      e.preventDefault();
                      window.open(this.href, '_blank');
                    });
                  });
                });
              </script>
            </head>
            <body style="margin: 0; padding: 20px;">
              <div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
                <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb;">
                  <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin-bottom: 8px;">${email.subject || 'No Subject'}</h1>
                  <div style="color: #6b7280; font-size: 14px;">Conversation Thread - ${sortedMessages.length} message${sortedMessages.length > 1 ? 's' : ''}</div>
                </div>
                ${conversationHTML}
              </div>
            </body>
          </html>
        `;
      };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Conversation</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          ${generateConversationHTML()}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Wait for content to render before printing
    printWindow.onload = function () {
      printWindow.print();
      // Optional: Close window after print
      // printWindow.close();
    };
  };

  return (
    <button onClick={handlePrint}>
      {collections ? "Print all" : "Print active only"}
    </button>
  );
};

export default PrintConversation;

