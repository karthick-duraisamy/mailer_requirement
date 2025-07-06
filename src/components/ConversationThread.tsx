import React, { useState, useRef, useEffect } from "react";
import {
  Reply,
  ReplyAll,
  Forward,
  MoreHorizontal,
  Star,
  Archive,
  ChevronDown,
  ChevronUp,
  Sparkles,
  RotateCcw,
  Tag,
  ArrowLeft,
  Loader2,
  Trash2,
  Expand,
  Minimize,
  FileText,
  User,
  Bot,
  UserCog,
  Send as MailSend,
  Inbox as InboxIcon,
} from "lucide-react";
import { Email, CustomLabel } from "../types/email";
import EntitiesPopover from "./EntitiesPopover";
import {
  useGetAIReplyResponseMutation,
  useLazyGetConversationDetailsQuery,
} from "../service/inboxService";
import { useScreenResolution } from "../hooks/commonFunction";
import { ConversationSkeleton } from "./skeletonLoader";

interface AiReplyState {
  isGenerating: boolean;
  showAiReply: boolean;
  generatedReply: string;
  tone: "professional" | "friendly" | "concise";
  replyType?: "reply" | "reply-all" | undefined;
  isExpanded?: boolean;
}

interface ConversationThreadProps {
  email: any | null;
  onClose: () => void;
  onBack?: () => void;
  isFullPage?: boolean;
  aiReplyState: AiReplyState;
  onGenerateAiReply: (email: any, tone?: string, replyType?: string) => void;
  onAiReplyStateChange: (state: AiReplyState) => void;
  customLabels: CustomLabel[];
  onEmailLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel: (labelData: Omit<CustomLabel, "id" | "createdAt">) => void;
  onDeleteEmail?: (emailId: string) => void;
  onRestoreEmail?: (emailId: string) => void;
  activeSection?: string;
  onStarToggle?: (emailId: string) => void;
}

const ConversationThread: React.FC<ConversationThreadProps> = ({
  email,
  onClose,
  onBack,
  isFullPage = false,
  aiReplyState,
  onGenerateAiReply,
  onAiReplyStateChange,
  customLabels,
  onEmailLabelsChange,
  onCreateLabel,
  onDeleteEmail,
  onRestoreEmail,
  activeSection,
  onStarToggle,
}) => {
  const { width: windowWidth } = useScreenResolution();
  const [replyText, setReplyText] = useState("");
  const [replyContent, setReplyContent] = useState(false);
  const [AIGeneratedReply, setAIGeneratedReply] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [replyType, setReplyType] = useState<undefined | string>(undefined);
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
    new Set()
  );
  const [isAiReplyExpanded, setIsAiReplyExpanded] = useState(false);
  const [showEntitiesPopover, setShowEntitiesPopover] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Refs for auto-scrolling
  const aiReplyRef = useRef<HTMLDivElement>(null);
  const replyBoxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const entitiesButtonRef = useRef<HTMLButtonElement>(null);
  const [getConversationDetails, getConversationDetailsStatus] =
    useLazyGetConversationDetailsQuery();
  const [getAIReplyResponse, getAIReplyResponseStatus] =
    useGetAIReplyResponseMutation();
  const [msgData, setMsgData] = useState<any[]>([]);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // When the conversation changes, reset AI reply state
  useEffect(() => {
    setAIGeneratedReply("");
  }, [email]);

  // Auto-scroll to AI reply when it becomes available
  useEffect(() => {
    if (aiReplyState.showAiReply && aiReplyRef.current) {
      // Small delay to ensure the content is rendered
      setTimeout(() => {
        aiReplyRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 100);
    }
  }, [aiReplyState.showAiReply]);

  useEffect(() => {
    setReplyContent(false);
    setShowReply(false);
  }, [email]);

  // Auto-scroll to reply box when AI reply is used
  useEffect(() => {
    if (
      showReply &&
      replyText === aiReplyState.generatedReply &&
      replyBoxRef.current
    ) {
      setTimeout(() => {
        replyBoxRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 100);
    }
  }, [showReply, replyText, aiReplyState.generatedReply]);

  // Handle click outside for more menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setShowMoreMenu(false);
      }
    };

    if (showMoreMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showMoreMenu]);

  useEffect(() => {
    if (email?.mail_id) {
      let id = email?.mail_id;
      getConversationDetails({ id });
    }
  }, [email?.mail_id]);

  useEffect(() => {
    if (getConversationDetailsStatus?.isSuccess) {
      console.log(getConversationDetailsStatus);
      const msgData = (getConversationDetailsStatus as any)?.data?.response
        ?.data?.conversation;
      if (msgData) {
        setMsgData(msgData);
      }
    }
  }, [getConversationDetailsStatus]);

  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-gray-400">📧</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Select an email
          </h3>
          <p className="text-gray-500">
            Choose an email from the list to view the conversation
          </p>
        </div>
      </div>
    );
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      // Determine reply type based on whether AI was used
      let replyType: "manual" | "ai" | "partial-ai" = "manual";
      if (
        replyText === aiReplyState.generatedReply &&
        aiReplyState.generatedReply
      ) {
        replyType = "ai";
      } else if (
        aiReplyState.generatedReply &&
        replyText.includes(aiReplyState.generatedReply)
      ) {
        replyType = "partial-ai";
      }

      // Handle reply logic here - would typically save the message with replyType
      console.log("Reply sent with type:", replyType);

      setReplyText("");
      setShowReply(false);
      onAiReplyStateChange({
        ...aiReplyState,
        showAiReply: false,
        generatedReply: "",
        replyType: undefined,
      });
    }
  };

  // Determine if this should be a reply-all based on email context
  const shouldUseReplyAll = (email: Email): any => {
    const lastMessage = sortedMessages[sortedMessages.length - 1];

    // Check if there are multiple recipients (to + cc)
    const totalRecipients =
      lastMessage.to.length + (lastMessage.cc?.length || 0);

    // Use reply-all if there are multiple recipients or if the email has CC recipients
    return totalRecipients > 1 || (lastMessage.cc && lastMessage.cc.length > 0);
  };

  const handleAiReplyGenerate = async () => {
    let AIReply = {
      document_id: msgData[msgData.length - 1]?.mail_id,
      prompt: "",
    };
  
    try {
      const result = await getAIReplyResponse(AIReply).unwrap();
      const reply = (result as any)?.response.data.reply
  
      if (reply) {
        setAIGeneratedReply(reply);
      }
    } catch (error) {
      console.error("AI Reply fetch failed", error);
      // Optional: handle error state
    }
  };
  

  const handleToneChange = (tone: "professional" | "friendly" | "concise") => {
    onAiReplyStateChange({ ...aiReplyState, tone });
  };

  const handleUseAiReply = () => {
    setReplyText(aiReplyState.generatedReply);
    setShowReply(true);
    onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
  };

  const handleRegenerateAi = () => {
    if (msgData) {
      const useReplyAll = shouldUseReplyAll(email);
      // Always use professional tone
      onGenerateAiReply(
        msgData,
        "professional",
        useReplyAll ? "reply-all" : "reply"
      );
    }
  };

  const handleToggleAiReplyExpand = () => {
    setIsAiReplyExpanded(!isAiReplyExpanded);
  };

  // Handle AI Reply button click
  const handleAiReply = () => {
    setReplyText(aiReplyState.generatedReply);
    setShowReply(true);
    onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
  };

  // Handle AI Reply All button click
  const handleAiReplyAll = () => {
    if (msgData && sortedMessages.length > 0) {
      const lastMessage = sortedMessages[sortedMessages.length - 1];
      // Get all unique recipients (to, cc) excluding our own email if needed
      const allRecipients = new Set([
        ...lastMessage.to,
        ...(lastMessage.cc || []),
      ]);
      // Optionally remove your own email from recipients here

      // Set reply text with appropriate header and AI reply
      const replyAllText = `\n\n--- Reply All ---\nTo: ${Array.from(
        allRecipients
      ).join(", ")}\n\n${aiReplyState.generatedReply}`;
      setReplyText(replyAllText);
      setShowReply(true);
      onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
    }
  };

  const handleReplyAll = () => {
    setReplyType("reply-all");
    setReplyContent(true);
    if (email) {
      const lastMessage = sortedMessages[sortedMessages.length - 1];
      // Get all unique recipients (to, cc) excluding our own email
      const allRecipients = new Set([
        lastMessage.to,
        ...lastMessage.to,
        ...(lastMessage.cc || []),
      ]);

      // Set reply text with appropriate header
      const replyAllText = `\n\n--- Reply All ---\nTo: ${Array.from(
        allRecipients
      ).join(", ")}\n\n`;
      setReplyText(replyAllText);
      setShowReply(true);
      onAiReplyStateChange({
        ...aiReplyState,
        showAiReply: false,
        generatedReply: "",
        replyType: undefined,
      });
    }
  };

  const handleForward = () => {
    if (msgData) {
      const lastMessage = sortedMessages[sortedMessages.length - 1];
      // Format the forwarded message
      const forwardedText = `\n\n--- Forwarded Message ---\nFrom: ${
        lastMessage.from_address
      }\nDate: ${formatTimestamp(lastMessage.create_to)}\nSubject: ${
        lastMessage.subject
      }\nTo: ${lastMessage.to.join(", ")}\n${
        lastMessage.cc ? `Cc: ${lastMessage.cc.join(", ")}\n` : ""
      }\n${lastMessage.body_plain}`;

      setReplyText(forwardedText);
      setShowReply(true);
      onAiReplyStateChange({
        ...aiReplyState,
        showAiReply: false,
        generatedReply: "",
        replyType: undefined,
      });
    }
  };

  // const handleDeleteEmail = () => {
  //   if (email) {
  //     onDeleteEmail(email.message_id);
  //     onClose(); // Close the conversation thread after deletion
  //   }
  // };

  // const handleRestoreEmail = () => {
  //   if (email && onRestoreEmail) {
  //     onRestoreEmail(email.message_id);
  //     onClose();
  //   }
  // };

  const handleAddToCalendar = () => {
    if (!email) return;

    // Extract meeting details from the email content
    const lastMessage = sortedMessages[sortedMessages.length - 1];
    const content = lastMessage.body_plain;

    // Create calendar event details
    const eventTitle = `Meeting: ${email.subject}`;
    const eventDetails = `Original email from: ${lastMessage.from_address}\n\n${content}`;

    // Try to extract date/time from content (basic pattern matching)
    const datePattern = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/;
    const timePattern = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/;

    const dateMatch = content.match(datePattern);
    const timeMatch = content.match(timePattern);

    let startDate = new Date();
    if (dateMatch) {
      startDate = new Date(dateMatch[0]);
    }

    if (timeMatch) {
      // Parse time and set it
      const timeStr = timeMatch[0];
      const [time, meridiem] = timeStr.split(/\s+/);
      const [hours, minutes] = time.split(":").map(Number);
      let adjustedHours = hours;

      if (meridiem?.toLowerCase() === "pm" && hours !== 12) {
        adjustedHours += 12;
      } else if (meridiem?.toLowerCase() === "am" && hours === 12) {
        adjustedHours = 0;
      }

      startDate.setHours(adjustedHours, minutes, 0, 0);
    }

    // Format dates for calendar
    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const startDateTime = formatDateForCalendar(startDate);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later
    const endDateTime = formatDateForCalendar(endDate);

    // Create Google Calendar URL
    const calendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(eventTitle)}` +
      `&dates=${startDateTime}/${endDateTime}` +
      `&details=${encodeURIComponent(eventDetails)}` +
      `&location=${encodeURIComponent("To be determined")}`;

    // Open calendar in new tab
    window.open(calendarUrl, "_blank");
    setShowMoreMenu(false);
  };

  const handlePrintEmail = () => {
    window.print();
    setShowMoreMenu(false);
  };

  const handleReportSpam = () => {
    if (!email) return;

    // Mark email as spam and move to appropriate section
    // In a real app, this would make an API call to mark as spam
    console.log("Reporting spam for email:", email.message_id);

    // Show confirmation
    if (
      window.confirm(
        `Report "${email.subject}" as spam? This conversation will be moved to spam folder.`
      )
    ) {
      // TODO: In a real implementation, you would:
      // 1. Call API to mark as spam
      // 2. Move email to spam folder
      // 3. Update email status

      alert("Email reported as spam successfully");

      // Close the conversation and go back to list
      onClose();
    }

    setShowMoreMenu(false);
  };

  const handleBlockSender = () => {
    // TODO: Implement block sender functionality
    console.log("Block sender:", email?.senderEmail);
    setShowMoreMenu(false);
  };

  const toggleMessageExpansion = (messageId: string) => {
    setExpandedMessages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const getEmailCustomLabels = (email: any) => {
    if (!email.customLabels) return [];
    return email.customLabels
      .map((labelId: any) => customLabels.find((label) => label.id === labelId))
      .filter(Boolean) as CustomLabel[];
  };

  const ReplyTypeLabel = ({
    replyType,
  }: {
    replyType?: "manual" | "ai" | "partial-ai";
  }) => {
    if (!replyType) return null;

    const config = {
      manual: {
        icon: User,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200",
      },
      ai: {
        icon: Bot,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200",
      },
      "partial-ai": {
        icon: UserCog,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200",
      },
    };

    const {
      icon: Icon,
      label,
      bgColor,
      textColor,
      borderColor,
    } = config[replyType];

    return (
      <div
        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${bgColor} ${textColor} ${borderColor}`}
      >
        <Icon className="w-3 h-3 mr-1" />
        {label}
      </div>
    );
  };

  // Sort messages chronologically (oldest first)
  const sortedMessages = [...msgData].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const emailLabels = getEmailCustomLabels(msgData);

  // Loading indicator component
  const LoadingIndicator = () => (
    <div className="flex items-center space-x-2">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Generating...</span>
    </div>
  );

  return (
    <>
      {getConversationDetailsStatus?.isLoading ||
      getConversationDetailsStatus?.isFetching ? (
        <ConversationSkeleton />
      ) : (
        <div ref={containerRef} className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 flex items-center space-x-3">
                {isFullPage && onBack && (
                  <button
                    onClick={onBack}
                    className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                    title="Back to email list"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                <div className="flex-1 min-w-0">
                  <h2
                    className="text-2xl font-semibold text-gray-900 truncate"
                    style={{ whiteSpace: "unset" }}
                  >
                    {email.subject}
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <p className="text-sm text-gray-500">
                      {msgData.length} message
                      {msgData.length !== 1 ? "s" : ""} • Conversation
                    </p>

                    {/* Email Labels */}
                    {emailLabels.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {emailLabels.slice(0, 3).map((label) => (
                          <span
                            key={label.id}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                            style={{
                              backgroundColor: `${label.color}15`,
                              color: label.color,
                              border: `1px solid ${label.color}30`,
                            }}
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-1"
                              style={{ backgroundColor: label.color }}
                            />
                            {label.name}
                          </span>
                        ))}
                        {emailLabels.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                            +{emailLabels.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                {/* <EmailLabelActions
              emailIds={[email.message_id]}
              currentLabels={email.customLabels || []}
              availableLabels={customLabels}
              onLabelsChange={onEmailLabelsChange}
              onCreateLabel={onCreateLabel}
            /> */}
                <button
                  ref={entitiesButtonRef}
                  onClick={() => setShowEntitiesPopover(!showEntitiesPopover)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-600 hover:text-gray-800">
                    Entities
                  </span>
                </button>
                {activeSection === "bin" && onRestoreEmail ? (
                  <button
                    onClick={() => onRestoreEmail(email.message_id)}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Restore conversation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                ) : (
                  onDeleteEmail && (
                    <button
                      onClick={() => onDeleteEmail(email.message_id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete conversation"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )
                )}
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* More Menu Dropdown */}
                  {showMoreMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                      <button
                        onClick={() => {
                          if (onStarToggle) onStarToggle(email.message_id);
                          setShowMoreMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            email.isStarred
                              ? "fill-yellow-400 text-yellow-400"
                              : ""
                          }`}
                        />
                        <span>
                          {email.isStarred ? "Remove star" : "Add star"}
                        </span>
                      </button>

                      <button
                        onClick={handleAddToCalendar}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Add to calendar</span>
                      </button>

                      <button
                        onClick={handlePrintEmail}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                          />
                        </svg>
                        <span>Print</span>
                      </button>

                      <div className="border-t border-gray-100 my-1"></div>

                      <button
                        onClick={handleReportSpam}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                        <span>Report spam</span>
                      </button>

                      <button
                        onClick={handleBlockSender}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                        <span>Block {email.sender}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
              {sortedMessages.map((message, index) => {
                const isExpanded =
                  expandedMessages.has(message.message_id) ||
                  (index === sortedMessages.length - 1 &&
                    !expandedMessages.has(`collapsed-${message.message_id}`));
                const isLastMessage = index === sortedMessages.length - 1;
                const isFromCurrentUser =
                  message.from_address === email.from_address;

                return (
                  <div
                    key={message.message_id}
                    className="last:border-b-0"
                    style={{ marginBottom: 10 }}
                  >
                    <div
                      className={`p-6 ${
                        isFromCurrentUser ? "bg-blue-50" : "bg-gray-50"
                      }`}
                    >
                      {/* Message Header */}
                      <div
                        className="cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg"
                        onClick={() => {
                          if (isLastMessage) {
                            // For last message, use a special collapsed state
                            if (isExpanded) {
                              setExpandedMessages(
                                (prev) =>
                                  new Set([
                                    ...prev,
                                    `collapsed-${message.message_id}`,
                                  ])
                              );
                            } else {
                              setExpandedMessages((prev) => {
                                const newSet = new Set(prev);
                                newSet.delete(
                                  `collapsed-${message.message_id}`
                                );
                                return newSet;
                              });
                            }
                          } else {
                            toggleMessageExpansion(message.message_id);
                          }
                        }}
                        style={{
                          marginBottom: 10,
                          border: "2px solid #abb1ae",
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 ${
                                isFromCurrentUser
                                  ? "bg-gradient-to-br from-green-500 to-green-600"
                                  : "bg-gradient-to-br from-blue-500 to-purple-600"
                              } rounded-full flex items-center justify-center flex-shrink-0`}
                            >
                              <span className="text-white font-semibold text-sm">
                                {message.from_address.charAt(0).toUpperCase()}
                              </span>
                            </div>

                            {/* Left content (Name, reply type, mail icon, timestamp) */}
                            <div className="min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-gray-900">
                                  {message.from_address}
                                </p>
                                <ReplyTypeLabel replyType={message.replyType} />
                                {isFromCurrentUser ? (
                                  <MailSend className="w-5 h-5 text-blue-600 mt-0.5" />
                                ) : (
                                  <InboxIcon className="w-5 h-5 text-green-600 mt-0.5" />
                                )}
                              </div>
                              <p className="text-sm text-gray-500">
                                {formatTimestamp(message.created_at)}
                              </p>
                            </div>
                          </div>

                          {/* Right-aligned expand/collapse button */}
                          <button className="text-gray-400 hover:text-gray-600 mt-1">
                            {isExpanded ? (
                              <ChevronUp className="w-6 h-6" />
                            ) : (
                              <ChevronDown className="w-6 h-6" />
                            )}
                          </button>
                        </div>

                        {/* Message Metadata - Always visible for expanded messages */}
                        {isExpanded &&
                          (message.cc.length > 0 || message.bcc.length > 0) && (
                            <div className="mb-4 bg-gray-50 rounded-lg p-4 space-y-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                {message.cc && message.cc.length > 0 && (
                                  <div>
                                    <span className="font-medium text-gray-700">
                                      CC:
                                    </span>
                                    <p className="text-gray-600 mt-1">
                                      {message.cc.join(", ")}
                                    </p>
                                  </div>
                                )}

                                {message.bcc && message.bcc.length > 0 && (
                                  <div>
                                    <span className="font-medium text-gray-700">
                                      BCC:
                                    </span>
                                    <p className="text-gray-600 mt-1">
                                      {message.bcc.join(", ")}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                      </div>

                      {/* Message Content */}
                      {isExpanded && (
                        <>
                          <div
                            className="prose max-w-none mb-6"
                            style={{
                              background: "#f9fafb",
                              marginTop: 10,
                              borderRadius: 5,
                              padding: 10,
                            }}
                          >
                            <div
                              className="text-gray-800 leading-relaxed whitespace-pre-wrap"
                              dangerouslySetInnerHTML={{
                                __html: message.body_html || message.body_plain,
                              }}
                            />
                            {/* {message.body_plain}
                        </div> */}
                          </div>
                        </>
                      )}

                      {/* Collapsed Message Preview */}
                      {!isExpanded && (
                        <>
                          <div className="text-sm text-gray-500 truncate mb-3">
                            {message?.body_plain?.substring(0, 100)}...
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons - Hidden when AI reply is active */}
          {AIGeneratedReply?.length === 0 && !showReply && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between flex-wrap gap-2 w-full">
                  {/* Left buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => {
                        setReplyType("reply");
                        setShowReply(!showReply);
                        setReplyContent(true);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>

                    <button
                      onClick={handleReplyAll}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <ReplyAll className="w-4 h-4" />
                      <span>Reply All</span>
                    </button>

                    <button
                      onClick={handleForward}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Forward className="w-4 h-4" />
                      <span>Forward</span>
                    </button>
                  </div>

                  {/* Right button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAiReplyGenerate}
                      disabled={getAIReplyResponseStatus?.isLoading}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                    >
                      {getAIReplyResponseStatus?.isLoading ? (
                        <LoadingIndicator />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Reply with AI</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Reply Preview - Always positioned properly */}
          {AIGeneratedReply.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div
                style={{
                  width:
                    windowWidth > 1580
                      ? "100%"
                      : windowWidth < 1580 && windowWidth > 1280
                      ? "85%"
                      : "65%",
                }}
              >
                <div
                  ref={aiReplyRef}
                  className={`bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${
                    isAiReplyExpanded
                      ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-gray-900">
                        AI Generated{" "}
                        {shouldUseReplyAll(email) ? "Reply All" : "Reply"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getAIReplyResponseStatus?.isLoading && <button
                        onClick={handleAiReplyGenerate}
                        disabled={true}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                      >
                        <LoadingIndicator />
                      </button>}
                      <button
                        onClick={handleToggleAiReplyExpand}
                        className="text-purple-600 hover:text-purple-700 p-1"
                        title={isAiReplyExpanded ? "Collapse" : "Expand"}
                      >
                        {isAiReplyExpanded ? (
                          <Minimize className="w-4 h-4" />
                        ) : (
                          <Expand className="w-4 h-4" />
                        )}
                      </button>
                      {getAIReplyResponseStatus?.isLoading ? (
                        <button
                          onClick={handleAiReplyGenerate}
                          disabled={true}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                        >
                          <LoadingIndicator />
                        </button>
                      ) : (
                        <button
                          onClick={handleAiReplyGenerate}
                          disabled={aiReplyState.isGenerating}
                          className="text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400"
                          title="Regenerate"
                        >
                          {aiReplyState.isGenerating ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <RotateCcw className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      {isAiReplyExpanded && (
                        <button
                          onClick={() => setIsAiReplyExpanded(false)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          title="Close"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                  {!getAIReplyResponseStatus?.isLoading && (
                    <div
                      className={`bg-white border border-gray-200 rounded p-3 mb-3 ${
                        isAiReplyExpanded ? "flex-1 overflow-y-auto" : ""
                      }`}
                      style={isAiReplyExpanded ? { minHeight: "350px" } : {}}
                    >
                      <pre className="whitespace-pre-wrap text-gray-800 text-sm font-sans">
                        {AIGeneratedReply}
                      </pre>
                    </div>
                  )}
                  {!getAIReplyResponseStatus?.isLoading && (
                    <div className="flex items-center space-x-2 flex-wrap">
                      <button
                        onClick={handleAiReply}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                      >
                        <Reply className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                      <button
                        onClick={handleAiReplyAll}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                      >
                        <ReplyAll className="w-4 h-4" />
                        <span>Reply All</span>
                      </button>
                      <button
                        onClick={() => {
                          setAIGeneratedReply("");
                        }}
                        className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                      >
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Reply Box */}
          {showReply && replyContent && (
            <div
              ref={replyBoxRef}
              className="border-t border-gray-200 p-6 bg-gray-50"
            >
              <div className="max-w-5xl mx-auto">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {replyText.includes("--- Reply All ---")
                      ? "Reply to All Recipients"
                      : replyText.includes("--- Forwarded Message ---")
                      ? "Forward Message"
                      : "Reply"}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border">
                    <div className="space-y-1 text-sm">
                      {/* To */}
                      <div>
                        <span className="font-medium">To:</span>{" "}
                        {replyText.includes("--- Reply All ---")
                          ? (() => {
                              const lastMessage =
                                sortedMessages[sortedMessages.length - 1];
                              const allRecipients = new Set([
                                ...lastMessage.to,
                              ]);
                              return Array.from(allRecipients).join(", ");
                            })()
                          : replyText.includes("--- Forwarded Message ---")
                          ? "Enter recipient email(s)"
                          : sortedMessages[sortedMessages.length - 1]?.to?.join(
                              ", "
                            )}
                      </div>

                      {/* Cc (render only if exists) */}
                      {replyType === "reply" &&
                        sortedMessages[sortedMessages.length - 1]?.cc?.length >
                          0 && (
                          <div>
                            <span className="font-medium">Cc:</span>{" "}
                            {sortedMessages[sortedMessages.length - 1].cc.join(
                              ", "
                            )}
                          </div>
                        )}

                      {/* Bcc (render only if exists) */}
                      {replyType === "reply-all" &&
                        sortedMessages[sortedMessages.length - 1]?.bcc?.length >
                          0 && (
                          <div>
                            <span className="font-medium">Bcc:</span>{" "}
                            {sortedMessages[sortedMessages.length - 1].bcc.join(
                              ", "
                            )}
                          </div>
                        )}
                    </div>

                    <p>
                      <span className="font-medium">Subject:</span>{" "}
                      {replyText.includes("--- Forwarded Message ---")
                        ? `Fwd: ${email.subject}`
                        : `Re: ${email.subject}`}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message Content
                    <span className="text-gray-500 font-normal">
                      {" "}
                      - Type your reply below
                    </span>
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`${
                      replyText.includes("--- Reply All ---")
                        ? "Write your reply to all recipients..."
                        : replyText.includes("--- Forwarded Message ---")
                        ? "Add a message to forward..."
                        : "Write your reply..."
                    }`}
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>

                {replyText === aiReplyState.generatedReply &&
                  aiReplyState.generatedReply && (
                    <div className="mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded">
                      <Sparkles className="w-3 h-3" />
                      <span>Using AI-generated reply</span>
                    </div>
                  )}

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowReply(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <div className="flex items-center space-x-2">
                    {/* Show AI generate button if not already using AI reply */}
                    {/* {replyText !== aiReplyState.generatedReply &&
                  !aiReplyState.showAiReply && (
                    <button
                      onClick={handleAiReplyGenerate}
                      disabled={aiReplyState.isGenerating}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                    >
                      {aiReplyState.isGenerating ? (
                        <LoadingIndicator />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generate with AI</span>
                        </>
                      )}
                    </button>
                  )} */}
                    <button
                      onClick={handleSendReply}
                      disabled={!replyText.trim()}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                    >
                      {replyText.includes("--- Reply All ---")
                        ? "Send to All"
                        : replyText.includes("--- Forwarded Message ---")
                        ? "Forward"
                        : "Send Reply"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Entities Popover */}
          <EntitiesPopover
            isOpen={showEntitiesPopover}
            onClose={() => setShowEntitiesPopover(false)}
            triggerRef={entitiesButtonRef}
          />
        </div>
      )}
    </>
  );
};

export default ConversationThread;
