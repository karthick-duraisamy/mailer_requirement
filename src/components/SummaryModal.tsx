import React, { useState, useEffect } from "react";
import { X, FileText, Copy, Download } from "lucide-react";

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  conversationData: any;
  subject: string;
}

interface SummaryData {
  overview: string;
  keyPoints: string[];
  participants: string[];
  timeline: string;
  actionItems: string[];
  sentiment: "positive" | "neutral" | "negative";
}

const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  onClose,
  conversationData,
  subject,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (isOpen && conversationData.length > 0) {
      generateSummary();
    }
  }, [isOpen, conversationData]);

  const generateSummary = async () => {
    setIsGenerating(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate mock summary based on conversation data
      const participants = Array.from(
        new Set(conversationData.map((msg) => msg.from_address))
      );

      const mockSummary: SummaryData = {
        overview: `This conversation thread about "${subject}" involves ${participants.length} participants discussing various aspects of the topic. The conversation spans ${conversationData.length} messages and covers important details that require attention.`,
        keyPoints: [
          "Initial request or inquiry was made regarding the subject matter",
          "Multiple stakeholders provided input and feedback",
          "Technical specifications and requirements were discussed",
          "Timeline and deliverables were established",
          "Next steps and follow-up actions were identified",
        ],
        participants: participants,
        timeline: `Started ${new Date(
          conversationData[0]?.created_at
        ).toLocaleDateString()} - Latest message ${new Date(
          conversationData[conversationData.length - 1]?.created_at
        ).toLocaleDateString()}`,
        actionItems: [
          "Follow up on pending decisions",
          "Schedule next meeting if required",
          "Review and approve proposed changes",
          "Update stakeholders on progress",
        ],
        sentiment:
          Math.random() > 0.7
            ? "positive"
            : Math.random() > 0.4
            ? "neutral"
            : "negative",
      };

      setSummary(mockSummary);
    } catch (err) {
      setError("Failed to generate summary. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!summary) return;

    const summaryText = `
      Conversation Summary: ${subject}

      Overview:
      ${summary.overview}

      Key Points:
      ${summary.keyPoints.map((point) => `• ${point}`).join("\n")}

      Participants:
      ${summary.participants.map((p) => `• ${p}`).join("\n")}

      Timeline:
      ${summary.timeline}

      Action Items:
      ${summary.actionItems.map((item) => `• ${item}`).join("\n")}

      Sentiment: ${summary.sentiment}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    // You could add a toast notification here
  };

  const handleDownload = () => {
    if (!summary) return;

    const summaryText = `
Conversation Summary: ${subject}

Overview:
${summary.overview}

Key Points:
${summary.keyPoints.map((point) => `• ${point}`).join("\n")}

Participants:
${summary.participants.map((p) => `• ${p}`).join("\n")}

Timeline:
${summary.timeline}

Action Items:
${summary.actionItems.map((item) => `• ${item}`).join("\n")}

Sentiment: ${summary.sentiment}

Generated on: ${new Date().toLocaleString()}
    `.trim();

    const blob = new Blob([summaryText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `conversation-summary-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-50 border-green-200";
      case "negative":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              Conversation Summary
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Conversation Data */}
        {conversationData && (
          <div>
            <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg whitespace-pre-line">
              {conversationData}
            </div>
          </div>
        )}

        {/* Footer */}
        {/* {summary && !isGenerating && ( */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            Summary generated on {new Date().toLocaleString()}
          </p>
          <div className="flex items-center space-x-3">
            {/* <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white rounded-lg transition-colors border border-gray-300"
            >
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </button> */}
            {/* <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white rounded-lg transition-colors border border-gray-300"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button> */}
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default SummaryModal;
