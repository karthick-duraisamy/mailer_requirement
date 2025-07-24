import React, { useState, useRef, useEffect } from "react";
import {
  Reply,
  ReplyAll,
  Forward,
  MoreHorizontal,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  RotateCcw,
  ArrowLeft,
  Loader2,
  Trash2,
  Expand,
  Minimize,
  FileText,
  User,
  Bot,
  UserCog,
} from "lucide-react";
import { Email, CustomLabel } from "../types/email";
import EntitiesPopover from "./EntitiesPopover";
import SummaryModal from "./SummaryModal";
import {
  useGetAIReplyResponseMutation,
  useLazyGetConversationDetailsQuery,
  useLazyGetSettingsQuery,
  useSentMailMutation,
} from "../service/inboxService";
import { formatTimestamp, getIntentLabel, getSenderName } from "../hooks/commonFunction";
import { ConversationSkeleton } from "./skeletonLoader";
import { SendIcon, InboxIcon } from "./Icons";
import { notification } from "antd";
import HtmlViewer from "./HtmlViewer";
import SparkleButton from "./SparkleButton/SparkleButton";
import EmailChipsInput from "./EmailInputChips";
import PrintConversation from "./PrintConversation";

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
  onAiReplyStateChange: (state: AiReplyState) => void;
  customLabels: CustomLabel[];
  onDeleteEmail?: (emailId: string) => void;
  onRestoreEmail?: (emailId: string) => void;
  activeSection?: string;
  onStarToggle?: (emailId: string) => void;
  isFullPageView?: boolean;
}

const ConversationThread: React.FC<ConversationThreadProps> = ({
  email,
  onClose,
  onBack,
  isFullPage = false,
  aiReplyState,
  onAiReplyStateChange,
  customLabels,
  onDeleteEmail,
  onRestoreEmail,
  activeSection,
  onStarToggle,
  isFullPageView,
}) => {
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [replyContent, setReplyContent] = useState(false);
  const [AIGeneratedReply, setAIGeneratedReply] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
    new Set()
  );
  const [isAiReplyExpanded, setIsAiReplyExpanded] = useState(false);
  const [showEntitiesPopover, setShowEntitiesPopover] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [entitiesInfo, setEntitiesInfo] = useState<any[]>([]);
  const [summaryModalInfo, setSummaryModalInfo] = useState<any | undefined>(undefined);
  const [AIType, setAIType] = useState<"reply" | "summarize" | undefined>(undefined);

  // Refs for auto-scrolling
  const aiReplyRef = useRef<HTMLDivElement>(null);
  const replyBoxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const entitiesButtonRef = useRef<HTMLButtonElement>(null);
  const entitiesButtonRefAi = useRef<HTMLButtonElement>(null);
  const [entitiesButtonPosition, setEntitiesButtonPosition] = useState<any>();
  const [getConversationDetails, getConversationDetailsStatus] =
    useLazyGetConversationDetailsQuery();
  const [getAIReplyResponse, getAIReplyResponseStatus] =
    useGetAIReplyResponseMutation();
  const [msgData, setMsgData] = useState<any[]>([]);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [_settings, setSettings] = useState<any>();
  const [getSettings, getSettingsResponseStatus] = useLazyGetSettingsQuery();
  const [sentMail, sentMailResponseStatus] = useSentMailMutation();
  const [intent, setIntent] = useState<string>("");
  const [templateContent, setTemplateContent] = useState<any>();
  const [_listWidth, setListWidth] = useState<string>(() => localStorage.getItem('listwidth') || '320px');
  const [replyingType, setReplyingType] = useState<"reply" | "reply-all" | "forward" | undefined>(undefined);
  // --- State ---
  const [shouldScroll, setShouldScroll] = useState(false);
  const [toRecipients, setToRecipients] = useState<string[]>([]);
  const [ccRecipients, setCcRecipients] = useState<string[]>([]);
  const [bccRecipients, setBccRecipients] = useState<string[]>([]);

  useEffect(() => {
    if (!showReply || !replyContent) return;

    const lastMsg = sortedMessages[sortedMessages.length - 1] || {};

    const norm = (addr: string) => (addr ? extractEmail(addr) || addr.trim() : "");
    const dedupe = (arr: string[]) => Array.from(new Set(arr.map(norm).filter(Boolean)));

    if (replyingType === "reply-all") {
      setToRecipients(dedupe(lastMsg.to || []));
      setCcRecipients(dedupe(lastMsg.cc || []));
      setBccRecipients(dedupe(lastMsg.bcc || []));
    } else if (replyingType === "forward") {
      // Forwards start empty – user will fill
      setToRecipients([]);
      setCcRecipients([]);
      setBccRecipients([]);
    } else {
      // Simple reply
      if (lastMsg.folder === "SENT") {
        setToRecipients(dedupe(lastMsg.to || []));
      } else {
        setToRecipients([norm(lastMsg.from_address)]);
      }
      setCcRecipients([]);
      setBccRecipients([]);
    }
  }, [showReply, replyContent, replyingType, msgData]);

  // When the conversation changes, reset AI reply state
  useEffect(() => {
    setAIGeneratedReply("");
    setReplyContent(false);
    setShowReply(false);
    setAIGeneratedReply("");
  }, [email]);

  useEffect(() => {
    getSettings({});
  }, []);
  useEffect(() => {
    if (getSettingsResponseStatus?.isSuccess) {
      const settingList = (getSettingsResponseStatus as any)?.data?.response?.data;
      setSettings((getSettingsResponseStatus as any)?.data?.response?.data);
      const mailSyncSetting = settingList.find((item: any) => item.setting_name === 'Mail Sync');
      const settingId = mailSyncSetting?.setting_id;
      localStorage.setItem('settingId', settingId);
    }
  }, [getSettingsResponseStatus])
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
    const handleResize = () => {
      setListWidth(localStorage.getItem('listwidth') || '320px');
    };

    // Listen for window resize (if you want to update on window resize)
    window.addEventListener('resize', handleResize);

    // Listen for localStorage changes (cross-tab)
    window.addEventListener('storage', (event) => {
      if (event.key === 'listwidth') {
        setListWidth(event.newValue || '320px');
      }
    });

    // Set initial value
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('storage', handleResize);
    };
  }, []);

  // Auto-scroll to reply box when AI reply is used
  useEffect(() => {
    if (
      showReply &&
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
  }, [showReply]);

  // To smooth scrooling after Ai generated reply modal opening time
  useEffect(() => {
    aiReplyRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [AIGeneratedReply.length]);

  // To sent the mail sent successfully
  useEffect(() => {
    if (sentMailResponseStatus?.isSuccess) {
      const responseData = (sentMailResponseStatus as any)?.data?.response?.data?.message;
      if ((sentMailResponseStatus as any)?.data?.response?.data?.success === true) {
        setAIGeneratedReply("");
        setShowReply(false);
        notification.success({
          message: responseData || "Mail sent successfully!",
        });
        setMsgData((prev) => [
          ...prev,
          {
            mail_id: msgData[msgData.length - 1].mail_id,
            message_id: msgData[msgData.length - 1].message_id || `local-${Date.now()}`,
            thread_id: msgData[msgData.length - 1].thread_id,
            folder: "sent",
            subject: msgData[msgData.length - 1].subject,
            from_address: email.from_address,
            to: sortedMessages[sortedMessages.length - 1]?.folder === "SENT" ? sortedMessages[sortedMessages.length - 1]?.to :
              [extractEmail(sortedMessages[sortedMessages.length - 1]?.from_address)],
            cc: msgData[msgData.length - 1].cc,
            bcc: msgData[msgData.length - 1].bcc,
            body_plain: replyText[email?.mail_id],
            body_html: templateContent,
            labels: msgData[msgData.length - 1].labels,
            intent: msgData[msgData.length - 1].ai_response.intent,
            entities: msgData[msgData.length - 1].ai_response.entities,
            reply_type: msgData[msgData.length - 1].reply_type,
            created_at: new Date().toISOString(),
            is_read: true,
          },
        ]);
      }
      else {
        notification.error({
          message: "Failed to send email. Retry later.",
        });
      }
    } else if ((sentMailResponseStatus as any)?.isError) {
      notification.error({
        message: "Failed to send email. Retry later.",
      });
    }

  }, [sentMailResponseStatus]);

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

  const mergedEntities = (emailList: any[]) => {
    return emailList.reduce((acc, curr) => {
      if (curr.entities && typeof curr.entities === "object") {
        return { ...acc, ...curr.entities };
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    if (lastMessageRef.current && msgData.length > 0 && !shouldScroll) {
      // Small timeout to ensure the DOM is fully updated
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
    setShouldScroll(false);
  }, [msgData, email?.mail_id]);

  useEffect(() => {
    if (getConversationDetailsStatus?.isSuccess) {
      const msgData = (getConversationDetailsStatus as any)?.data?.response
        ?.data?.conversation;
      if (msgData) {
        setMsgData(msgData);
        setEntitiesInfo(mergedEntities(msgData));
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

  if (email.length === 0 && activeSection === "bin") {
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


  const extractEmail = (input: any) => {
    const match = input.match(/[\w.-]+@[\w.-]+\.\w+/);
    return match ? match[0] : null;
  };


  const handleSendReply = () => {
    let contentChanges = getContentChangeStatusSmart(AIGeneratedReply, Object.values(replyText)[0]).status;
    if (replyText[email?.mail_id].trim()) {
      // Determine reply type based on whether AI was used
      let replyType: "MANUAL" | "AI" | "AI_EDITED" = "MANUAL";
      if (
        replyText[email?.mail_id] === aiReplyState.generatedReply &&
        aiReplyState.generatedReply
      ) {
        replyType = "AI";
      } else if (
        aiReplyState.generatedReply &&
        replyText[email?.mail_id].includes(aiReplyState.generatedReply)
      ) {
        replyType = "AI_EDITED";
      }

      setTemplateContent(replyText[email?.mail_id]);
      const emailData = {
        mail_id: msgData[msgData.length - 1]?.mail_id,
        message_id: msgData[msgData.length - 1]?.message_id,
        thread_id: msgData[msgData.length - 1]?.thread_id,
        folder: msgData[msgData.length - 1]?.folder,
        subject: msgData[msgData.length - 1]?.subject,
        // to: [msgData[msgData.length - 1]?.from_address],
        to: toRecipients,
        cc: ccRecipients,
        bcc: bccRecipients,
        body_plain: replyText[email?.mail_id],
        body_html: replyText[email?.mail_id],
        reply_type: replyType,
        edited: false,
        labels: msgData[msgData.length - 1]?.labels || [],
        intent: msgData[msgData.length - 1]?.intent || "reply",
        compose_content: replyText[email?.mail_id],
        ai_response: {
          intent: msgData[msgData.length - 1]?.intent || "reply",
          isPartiallyEdited: contentChanges === "partial" ? "true" : "false",
          isFullyEdited: contentChanges === "full" ? "true" : "false",
          entities: msgData[msgData.length - 1]?.entities || {},
          reply: replyText[email?.mail_id] + "\n" + replyText[email?.mail_id]
        },
        setting_id: 29
      };
      sentMail(emailData);
      setReplyText(prev => ({
        ...prev,
        [email?.mail_id]: (prev[email?.mail_id] || "") + "\n" + replyText[email?.mail_id]
      }));
      onAiReplyStateChange({
        ...aiReplyState,
        showAiReply: false,
        generatedReply: "",
        replyType: undefined,
      });
    }
    setReplyText({});
  };

  //html render value
  const stripHtml = (html: string): string => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  // Determine if this should be a reply-all based on email context
  const shouldUseReplyAll = (_email: Email): any => {
    const lastMessage = sortedMessages[sortedMessages.length - 1];

    // Check if there are multiple recipients (to + cc)
    const totalRecipients =
      lastMessage.to.length + (lastMessage.cc?.length || 0);

    // Use reply-all if there are multiple recipients or if the email has CC recipients
    return totalRecipients > 1 || (lastMessage.cc && lastMessage.cc.length > 0);
  };

  const handleAiReplyGenerate = async (key?: string) => {
    setAIType(key as "reply" | "summarize");
    let AIReply = {
      document_id: msgData[msgData.length - 1]?.mail_id,
      agent_type: key === "reply" ? "ai_reply" : 'summerize'
    };

    try {
      const result = await getAIReplyResponse(AIReply).unwrap();
      const reply = (result as any)?.response.data.reply;
      setEntitiesInfo((result as any)?.response.data.entities || []);
      setIntent((result as any)?.response.data.intent || "");
      if (key === "reply") setReplyText(prev => ({
        ...prev,
        [email?.mail_id]: reply
      }));
      else setSummaryModalInfo(reply);

      if (key === "reply" && reply) {
        setAIGeneratedReply(reply);
        setIsAiReplyExpanded(false);
      }
    } catch (error) {
      notification.error({
        message: key === "reply" ? "Unable to generate reply now. Please retry later." : "Unable to summarize now. Please retry later.",
      })
    }
  };

  const getContentChangeStatusSmart = (
    original: string,
    edited: string,
    fullThreshold: number = 70
  ): { status: "unchanged" | "partial" | "full"; changePercent: number } => {
    if (!original.trim() && !edited.trim()) {
      return { status: "unchanged", changePercent: 0 };
    }

    const origArr = original.trim().split(/\s+/);
    const editArr = edited.trim().split(/\s+/);

    // Count common words (order-independent)
    let commonCount = 0;
    const editSet = new Set(editArr);
    for (const word of origArr) {
      if (editSet.has(word)) {
        commonCount++;
      }
    }

    const totalWords = Math.max(origArr.length, editArr.length);
    const changePercent = ((totalWords - commonCount) / totalWords) * 100;

    let status: "unchanged" | "partial" | "full" = "unchanged";
    if (changePercent > 0 && changePercent < fullThreshold) {
      status = "partial";
    } else if (changePercent >= fullThreshold) {
      status = "full";
    }

    return { status, changePercent };
  }

  const handleToggleAiReplyExpand = () => {
    setIsAiReplyExpanded(!isAiReplyExpanded);
  };

  // Handle AI Reply button click
  const handleAiReply = () => {
    setShowReply(true);
    setReplyContent(true);
    onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
  };

  // Handle AI Reply All button click
  const handleAiReplyAll = () => {
    // Set reply text with appropriate header and AI reply
    setShowReply(true);
    setReplyContent(true);
    onAiReplyStateChange({ ...aiReplyState, showAiReply: false });
  };

  const handleReplyAll = () => {
    setReplyContent(true);
    if (email) {
      // Set reply text with appropriate header
      setReplyText(prev => ({
        ...prev,
        [email?.mail_id]: aiReplyState.generatedReply
      }));
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
      // Format the forwarded message
      setReplyText(prev => ({
        ...prev,
        [email?.mail_id]: aiReplyState.generatedReply
      }));
      setShowReply(true);
      onAiReplyStateChange({
        ...aiReplyState,
        showAiReply: false,
        generatedReply: "",
        replyType: undefined,
      });
    }
  };

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

  const handleReportSpam = () => {
    if (!email) return;


    // Show confirmation
    if (
      window.confirm(
        `Report "${email.subject}" as spam? This conversation will be moved to spam folder.`
      )
    ) {
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

  const toggleMessageExpansion = (messageId: string, lastMessage: string) => {
    setExpandedMessages((prev) => {
      // Create a new empty set (clearing all previous expansions)
      const newSet = new Set<string>();
      // Only add the current messageId if it wasn't already expanded
      // (this creates toggle behavior - click expanded message to collapse)
      if (!prev.has(messageId)) {
        newSet.add(messageId);
      }
      newSet.add(`collapsed-${lastMessage}`); // Add last message to the set
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
    replyType?: "MANUAL" | "AI" | "AI_EDITED";
  }) => {
    if (!replyType) return null;

    const config = {
      MANUAL: {
        icon: User,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200",
      },
      AI: {
        icon: Bot,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200",
      },
      AI_EDITED: {
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
        className={`inline-flex items-center mr-1 px-2 py-1 rounded-md text-xs font-medium border ${bgColor} ${textColor} ${borderColor}`}
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
      {sentMailResponseStatus?.isLoading &&
        <p className="cls-sending-status">Sending mail ...</p>
      }
      {getConversationDetailsStatus?.isLoading ||
        getConversationDetailsStatus?.isFetching ? (
        <ConversationSkeleton />
      ) : (
        <div ref={containerRef} className="flex-1 flex flex-col bg-white" style={{ maxWidth: isFullPageView ? "" : `calc(100vw - 475px)`, overflow: 'auto' }}>
          {/* Header */}
          <div className="border-b border-gray-200 p-2" style={{position: "sticky", top: '0', backgroundColor: '#fff'}} >
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
                  className="text-xl font-semibold text-gray-900 truncate text-ellipsis overflow-hidden whitespace-nowrap max-w-[500px]"
                  title={email.subject}
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
                    {/* labels */}
                    <div className="flex-shrink-0 flex flex-col items-start space-y-1">
                      {email?.intent && (
                        <div
                          className={`
                            inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                            ${getIntentLabel(email.intent).color}
                            sm:px-2 sm:py-1 xs:px-1 xs:py-0.5
                          `}
                        >
                          {React.createElement(
                            getIntentLabel(email.intent).icon,
                            {
                              className: `w-3 h-3 mr-1 sm:w-3 sm:h-3 xs:w-2 xs:h-2 ${getIntentLabel(email.intent).iconColor
                                }`,
                            }
                          )}
                          <span className="hidden sm:inline">
                            {getIntentLabel(email.intent).text}
                          </span>
                          <span className="sm:hidden text-[10px]">
                            {getIntentLabel(email.intent).text.substring(0, 3)}
                          </span>
                        </div>
                      )}

                      {/* Corporate/Custom Labels */}
                      {emailLabels.length > 0 && (
                        <div className="flex flex-col items-end space-y-1 max-w-[120px] sm:max-w-[160px]">
                          {emailLabels.slice(0, 2).map((label) => (
                            <div
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
                              <span className="hidden sm:inline truncate">
                                {label.name}
                              </span>
                              <span className="sm:hidden text-[10px]">
                                {label.name.substring(0, 3)}
                              </span>
                            </div>
                          ))}
                          {emailLabels.length > 2 && (
                            <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                              <span className="hidden sm:inline">
                                +{emailLabels.length - 2} more
                              </span>
                              <span className="sm:hidden text-[10px]">
                                +{emailLabels.length - 2}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  ref={entitiesButtonRef}
                  onClick={() => {
                    setShowEntitiesPopover(!showEntitiesPopover);
                    setEntitiesButtonPosition(entitiesButtonRef);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  style={{ color: `#4c75e1` }}
                >
                  <FileText className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-600 hover:text-gray-800" style={{ color: `#4c75e1` }}>
                    Entities
                  </span>
                </button>
                <div className="cls-ai-btn">
                  <SparkleButton onClick={() => handleAiReplyGenerate('summarize')} text={getAIReplyResponseStatus?.isLoading && AIType === 'summarize' ? '' : "Summarize"} fontSize="14" borderRad="30" />
                </div>
                {activeSection === "bin" && onRestoreEmail ? (
                  <button
                    onClick={() => onRestoreEmail(email.mail_id)}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Restore conversation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                ) : (
                  onDeleteEmail && (
                    <button
                      onClick={() => onDeleteEmail(email.mail_id)}
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
                          if (onStarToggle) {
                            onStarToggle(email.mail_id);
                            email.is_starred = !email.is_starred;
                          }
                          setShowMoreMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <Star
                          className={`w-4 h-4 ${email.is_starred
                            ? "fill-yellow-400 text-yellow-400"
                            : ""
                            }`}
                        />
                        <span>
                          {email.is_starred ? "Remove star" : "Add star"}
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
                        <span><PrintConversation sortedMessages={sortedMessages} email={email} collections={true} /></span>
                      </button>

                      <button
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
                        <span>
                          <PrintConversation
                            sortedMessages={sortedMessages.filter((message, index) => {
                              const isExpanded =
                                expandedMessages.has(message.message_id) ||
                                (index === sortedMessages.length - 1 &&
                                  !expandedMessages.has(`collapsed-${message.message_id}`));
                              return isExpanded;
                            })}
                            email={email}
                            collections={false}
                          />

                        </span>
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
          <div>
            <div style={{ width: '98%', margin: '10px auto 0 auto' }}>
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
                    ref={isLastMessage ? lastMessageRef : null}
                    style={{ marginBottom: 10 }}
                  >
                    <div
                      className={`p-2 ${isFromCurrentUser ? "bg-blue-50" : "bg-gray-50"
                        }`}
                      style={{
                        marginBottom: 10,
                        // border: "2px solid #abb1ae",
                        borderRadius: 5,
                        boxShadow: "0 1px 3px #abb1ae",
                      }}
                    >
                      {/* Message Header */}
                      <div
                        className="cursor-pointer hover:bg-gray-50 -m-2 p-1 rounded-lg"
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
                              setExpandedMessages(() => new Set<string>());
                            }
                          } else {
                            toggleMessageExpansion(message.message_id, sortedMessages[sortedMessages.length - 1].message_id);
                          }
                        }}
                      >
                        <div className="flex items-start justify-between mb-4" style={{ width: "100%" }}>
                          <div className="flex items-center space-x-3" style={{ width: "100%" }}>
                            <div
                              className={`w-10 h-10 ${isFromCurrentUser
                                ? "bg-gradient-to-br from-green-500 to-green-600"
                                : "bg-gradient-to-br from-blue-500 to-purple-600"
                                } rounded-full flex items-center justify-center flex-shrink-0`}
                            >
                              <span className="text-white font-semibold text-sm">
                                {getSenderName(message?.from_address)?.charAt(0).toUpperCase()}
                              </span>
                            </div>

                            {/* Left content (Name, reply type, mail icon, timestamp) */}
                            <div style={{ width: "100%" }}>
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-gray-900">
                                  {message.from_address}
                                </p>
                                <div className="flex justify-between mr-1" style={{ minWidth: "160px" }}>
                                  <ReplyTypeLabel replyType={message.reply_type} />
                                  {isFromCurrentUser ? (
                                    <SendIcon />
                                  ) : (
                                    <InboxIcon />
                                  )}
                                </div>
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

                        {isExpanded &&
                          (
                            (message.cc.length > 0 && message.cc[0] !== "") ||
                            (message.bcc.length > 0 && message.bcc[0] !== "")
                          ) && (
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
                              style={{ wordBreak: "break-word" }}
                            />
                            <HtmlViewer rawHtml={message?.body_html || message?.body_plain || message?.snippet} />
                          </div>
                        </>
                      )}

                      {/* Collapsed Message Preview */}
                      {!isExpanded && (
                        <>
                          <div className="text-sm text-gray-500 truncate mb-1 mt-3">
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
          {(AIGeneratedReply === "" || AIGeneratedReply.length === 0) && !showReply && (
            <div className="border-t border-gray-200 p-2 bg-gray-50" style={{ marginTop: "auto", position: "sticky", bottom: 0, zIndex: 2 }}>
              <div className="mx-auto">
                <div className="flex items-center justify-between flex-wrap gap-2 w-full">
                  {/* Left buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => {
                        setShowReply(true);
                        setReplyContent(true);
                        setReplyingType('reply');
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>

                    <button
                      onClick={() => {
                        handleReplyAll();
                        setReplyingType('reply-all');
                      }}
                      className="flex items-center space-x-2 px-4 py-2 border text-orange-500 border-orange-500 hover:border-blue-500 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <ReplyAll className="w-4 h-4" />
                      <span>Reply All</span>
                    </button>

                    <button
                      onClick={() => {
                        handleForward();
                        setReplyingType('forward');
                      }}
                      className="flex items-center space-x-2 px-4 py-2 border text-orange-500 border-orange-500 hover:border-blue-500 hover:text-blue-500 rounded-lg transition-colors"
                    >
                      <Forward className="w-4 h-4" />
                      <span>Forward</span>
                    </button>
                  </div>

                  {/* Right button */}
                  <div className="flex items-center gap-2 cls-ai-btn" style={{ marginRight: isFullPageView ? "0% !important" : "" }}>
                    <SparkleButton onClick={() => handleAiReplyGenerate('reply')} text={getAIReplyResponseStatus?.isLoading && AIType === 'reply' ? "" : "Reply with AI"} fontSize="14" borderRad="30" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Reply Preview - Always positioned properly */}
          {AIGeneratedReply.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div>
                <div
                  ref={aiReplyRef}
                  className={`bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all`}
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
                      <div
                        className={`
                                    inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                                    ${getIntentLabel(intent).color}
                                  `}
                      >
                        {React.createElement(
                          getIntentLabel(intent).icon,
                          {
                            className: `w-3 h-3 mr-1 ${getIntentLabel(intent).iconColor
                              }`,
                          }
                        )}
                        {intent}
                      </div>
                      <button
                        ref={entitiesButtonRefAi}
                        onClick={() => {
                          setShowEntitiesPopover(!showEntitiesPopover);
                          setEntitiesButtonPosition(entitiesButtonRefAi);
                        }}
                        className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                        style={{ color: `#4c75e1` }}
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        <span className="text-sm text-gray-600 hover:text-gray-800" style={{ color: `#4c75e1` }}>
                          Entities
                        </span>
                      </button>
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
                          onClick={() => handleAiReplyGenerate}
                          disabled={true}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors"
                        >
                          <LoadingIndicator />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAiReplyGenerate('reply')}
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
                      className={`bg-white border border-gray-200 rounded p-3 mb-3 ${isAiReplyExpanded ? "flex-1 overflow-y-auto" : ""
                        }`}
                      style={isAiReplyExpanded ? { minHeight: "350px" } : {}}
                    >
                      <pre className="whitespace-pre-wrap text-gray-800 text-sm font-sans">
                        <div
                          contentEditable={true}
                          suppressContentEditableWarning={true}
                          className="outline-none"
                          dangerouslySetInnerHTML={{ __html: AIGeneratedReply }}
                          onInput={(e) => {
                            const reply = (e.target as HTMLDivElement).innerHTML; // capture edited HTML
                            setReplyText((prev) => ({
                              ...prev,
                              [email?.mail_id]: reply, // store updated content
                            }));
                          }}
                        />
                      </pre>
                    </div>
                  )}
                  {!getAIReplyResponseStatus?.isLoading && (
                    <div className="flex items-center space-x-2 flex-wrap">
                      <button
                        onClick={() => {
                          handleAiReply();
                          setReplyingType('reply');
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <Reply className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                      <button
                        onClick={() => {
                          handleAiReplyAll();
                          setReplyingType('reply-all');
                        }}
                        className="flex items-center space-x-2 px-4 py-2 border text-orange-500 border-orange-500 hover:border-blue-500 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <ReplyAll className="w-4 h-4" />
                        <span>Reply All</span>
                      </button>
                      <button
                        onClick={() => {
                          setAIGeneratedReply("");
                        }}
                        className="flex items-center space-x-2 px-4 py-2 border text-orange-500 border-orange-500 hover:border-blue-500 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-colors"
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
              <div >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {replyingType === 'reply-all'
                      ? "Reply All"
                      : replyingType === 'forward'
                        ? "Forward"
                        : "Reply"}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border" >
                    <div className="space-y-1 text-sm">
                      <EmailChipsInput label="To" emails={toRecipients} setEmails={setToRecipients} />

                      {(replyingType === "reply-all" || replyingType === "forward") && (
                        <>
                          <EmailChipsInput label="Cc" emails={ccRecipients} setEmails={setCcRecipients} />
                          <EmailChipsInput label="Bcc" emails={bccRecipients} setEmails={setBccRecipients} />
                        </>
                      )}
                    </div>

                    <p>
                      <span className="font-medium">Subject:</span>{" "}
                      {replyingType === 'forward'
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
                    value={stripHtml(replyText[email?.mail_id] || "")}
                    onChange={(e) => {
                      setReplyText(prev => ({
                        ...prev,
                        [email?.mail_id]: e.target.value
                      }));
                    }}
                    placeholder={
                      replyingType === 'reply-all'
                        ? "Write your reply to all recipients..."
                        : replyingType === 'forward'
                          ? "Add a message to forward..."
                          : "Write your reply..."
                    }
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>

                {replyText[email?.mail_id] === aiReplyState.generatedReply &&
                  aiReplyState.generatedReply && (
                    <div className="mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded">
                      <Sparkles className="w-3 h-3" />
                      <span>Using AI-generated reply</span>
                    </div>
                  )}

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setShowReply(false);
                      setReplyText(prev => {
                        const { [email?.mail_id]: _, ...rest } = prev;
                        return rest;
                      });

                    }}
                    className="flex items-center space-x-2 px-4 py-2 border text-orange-500 border-orange-500 hover:border-blue-500 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleSendReply}
                      disabled={!replyText[email?.mail_id]?.trim()}
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      {replyingType === 'reply-all'
                        ? "Send to All"
                        : replyingType === 'forward'
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
            triggerRef={entitiesButtonPosition}
            entitiesInfo={entitiesInfo}
          />

          {/* Summary Modal */}
          <SummaryModal
            isOpen={summaryModalInfo !== undefined && summaryModalInfo !== null && (summaryModalInfo as any)?.length > 0}
            onClose={() => setSummaryModalInfo(undefined)}
            conversationData={summaryModalInfo as any}
            subject={email.subject}
          />
        </div>
      )}
    </>
  );
};

export default ConversationThread;