import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Star,
  Square,
  CheckSquare,
  Inbox,
  Send,
  FileText,
  Clock,
  Tag,
  Calendar,
  Megaphone,
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Mail,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Ticket,
} from "lucide-react";
import { Email, CustomLabel } from "../types/email";
import EmailLabelActions from "./EmailLabelActions";
import LabelList from "./CustomLabel";
import { useLazyGetMailListResponseQuery } from "../service/inboxService";
import { FilterOptions } from "../components/EmailFilters";

interface EmailListProps {
  emails: any[];
  selectedEmailId: string | null;
  onEmailSelect: (email: Email, fullPage?: boolean) => void;
  onStarToggle: (emailId: string) => void;
  onCheckToggle: (emailId: string) => void;
  checkedEmails: Set<string>;
  activeSection: string;
  customLabels: CustomLabel[];
  onEmailLabelsChange: (emailIds: string[], labelIds: string[]) => void;
  onCreateLabel: (labelData: Omit<CustomLabel, "id" | "createdAt">) => void;
  onBulkMarkAsRead: (emailIds: string[], isRead: boolean) => void;
  onBulkDelete: (emailIds: string[]) => void;
  onBulkRestore?: (emailIds: string[]) => void;
  onSelectAll: () => void;
  onUnselectAll: () => void;
  onUndo?: () => void;
  setEmails?: Function;
  readStatus: string;
}

type IntentLabel = {
  text: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  
};

const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmailId,
  onEmailSelect,
  onStarToggle,
  onCheckToggle,
  checkedEmails,
  activeSection,
  customLabels,
  onEmailLabelsChange,
  onCreateLabel,
  onBulkMarkAsRead,
  onBulkDelete,
  onBulkRestore,
  onSelectAll,
  onUnselectAll,
  onUndo,
  setEmails,
  readStatus,
}) => {
  const [toAddress, setToAddress] = useState("");
  const [width, setWidth] = useState(320); // Default width
  const [isResizing, setIsResizing] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(320);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [filterData, setFilterData] = useState<any>({
    page: 1,
    page_size: 20,
    search: undefined
  });
  const [inboxCount, setInboxCount] = useState(0);

  useEffect(() => {
    // Initial call
    getMailList(filterData);
  }, [filterData])

  useEffect(() => {
    if (getMailListResponse.isSuccess && setEmails) {
      const staticList = (getMailListResponse as any)?.data?.response?.data
        ?.results;
      if (staticList && Array.isArray(staticList)) {
        setInboxCount((getMailListResponse as any)?.data?.response?.data?.count || 0);
        setEmails((prevEmails: any[]) => {
          // Create a Set of existing mail_ids
          const existingIds = new Set(prevEmails.map(email => email.mail_id));
          // Filter out emails that already exist
          const newEmails = staticList.filter(
            (email: any) => !existingIds.has(email.mail_id)
          ).map((email: any) => ({
            ...email,
            intentLabel: email.labels || "new",
          }));
          // Append only new emails
          return [...prevEmails, ...newEmails];
        });
      }
    }
  }, [getMailListResponse]);

  const handleEmailDoubleClick = (email: Email, event: React.MouseEvent) => {
    event.stopPropagation();
    onEmailSelect(email, true); // true for full-page view
  };

  useEffect(() => {
    setToAddress(
      emails[emails?.length - 1]?.to?.length > 0
        ? emails[emails?.length - 1]?.to[0]
        : undefined
    );
  }, [emails]);

  const formatTime = (created_at: string) => {
    const date = new Date(created_at);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else if (diffInHours < 168) {
      // Less than a week
      return date.toLocaleDateString("en-US", { weekday: "short" });
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  const getIntentLabel = (intent: string): IntentLabel => {
    const lower = intent.toLowerCase();

    if (lower.includes("get")) {
      return {
        text: "Get Info",
        icon: Calendar,
        color: "bg-blue-100 text-blue-800",
        iconColor: "text-blue-600",
      };
    }

    if (
      lower.includes("approve") ||
      lower.includes("success") ||
      lower.includes("confirmed")
    ) {
      return {
        text: "Approved",
        icon: CheckCircle,
        color: "bg-green-100 text-green-800",
        iconColor: "text-green-600",
      };
    }

    if (
      lower.includes("cancel") ||
      lower.includes("rejected") ||
      lower.includes("failed")
    ) {
      return {
        text: "Cancelled",
        icon: XCircle,
        color: "bg-red-100 text-red-800",
        iconColor: "text-red-600",
      };
    }

    if (
      lower.includes("ticket") ||
      lower.includes("booking") ||
      lower.includes("reservation")
    ) {
      return {
        text: "Ticketing",
        icon: Ticket,
        color: "bg-yellow-100 text-yellow-800",
        iconColor: "text-yellow-600",
      };
    }

    if (lower.includes("feedback") || lower.includes("report")) {
      return {
        text: "Feedback",
        icon: MessageSquare,
        color: "bg-orange-100 text-orange-800",
        iconColor: "text-orange-600",
      };
    }

    // default fallback
    return {
      text: "new",
      icon: Mail,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600",
    };
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case "inbox":
        return "Inbox";
      case "sent":
        return "Sent";
      case "drafts":
        return "Drafts";
      case "starred":
        return "Starred";
      case "snoozed":
        return "Snoozed";
      case "label-work":
        return "Work";
      case "label-personal":
        return "Personal";
      case "label-important":
        return "Important";
      case "label-travel":
        return "Travel";
      default:
        // Handle custom labels
        if (section.startsWith("custom-label-")) {
          const labelId = section.replace("custom-label-", "");
          const label = customLabels.find((l) => l.id === labelId);
          return label?.name || "Unknown Label";
        }
        return "Inbox";
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case "inbox":
        return Inbox;
      case "sent":
        return Send;
      case "drafts":
        return FileText;
      case "starred":
        return Star;
      case "snoozed":
        return Clock;
      default:
        return Tag;
    }
  };

  const getEmailCustomLabels = (email: Email) => {
    if (!email.labels) return [];
    return email.labels
      .map((labelId) => customLabels.find((label) => label.id === labelId))
      .filter(Boolean) as CustomLabel[];
  };

  const EmptyState = ({ section }: { section: string }) => {
    const Icon = getSectionIcon(section);
    const title = getSectionTitle(section);

    return (
      <div className="flex flex-col items-center justify-center h-96 text-center p-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No emails in {title}
        </h3>
        <p className="text-gray-500 max-w-sm">
          {section === "starred"
            ? "Star important conversations to find them quickly here."
            : section === "snoozed"
              ? "Snoozed conversations will appear here when it's time to deal with them."
              : section.startsWith("custom-label-") ||
                section.startsWith("label-")
                ? `Conversations with the "${title}" label will appear here.`
                : `No conversations available yet.`}
        </p>
      </div>
    );
  };

  const checkedEmailsArray = Array.from(checkedEmails);
  const hasCheckedEmails = checkedEmailsArray.length > 0;

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      startXRef.current = e.clientX;
      startWidthRef.current = width;

      // Add cursor style to body to prevent cursor flickering
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [width]
  );

  const handleResize = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;

      e.preventDefault();
      const deltaX = e.clientX - startXRef.current;
      const newWidth = startWidthRef.current + deltaX;
      const clampedWidth = Math.max(240, Math.min(newWidth, 800));

      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setWidth(clampedWidth);
      });
    },
    [isResizing]
  );

  const handleResizeStop = useCallback(() => {
    setIsResizing(false);
    // Reset cursor styles
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  React.useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleResize, { passive: false });
      document.addEventListener("mouseup", handleResizeStop);
    }

    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", handleResizeStop);
      // Cleanup cursor styles on unmount
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing, handleResize, handleResizeStop]);

  if (emails.length === 0) {
    return (
      <div
        className="bg-white border-r border-gray-200 relative"
        ref={containerRef}
        style={{
          width: `${width}px`,
          minWidth: "240px",
          maxWidth: "800px",
          height: "100%",
        }}
      >
        {/* Resizer */}
        <div
          className="absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10"
          onMouseDown={handleResizeStart}
        >
          <div className="bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" />
        </div>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {getSectionTitle(activeSection)}
          </h2>
        </div>
        <EmptyState section={activeSection} />
      </div>
    );
  }

  return (
    <div
      className="bg-white border-r border-gray-200 relative"
      ref={containerRef}
      style={{
        width: `${width}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%",
      }}
    >
      {/* Resizer */}
      <div
        className="absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10"
        onMouseDown={handleResizeStart}
      >
        <div className="bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" />
      </div>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Master Checkbox for Select All/Unselect All */}
            <button
              onClick={() => {
                if (checkedEmails.size === emails.length) {
                  onUnselectAll();
                } else {
                  onSelectAll();
                }
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title={
                checkedEmails.size === emails.length
                  ? "Unselect all"
                  : "Select all"
              }
            >
              {checkedEmails.size === emails.length && emails.length > 0 ? (
                <CheckSquare className="w-4 h-4 text-blue-600" />
              ) : checkedEmails.size > 0 ? (
                <Square className="w-4 h-4 text-blue-600 fill-blue-100" />
              ) : (
                <Square className="w-4 h-4" />
              )}
            </button>

            <div style={{ height: "100%" }}>
              <h2 className="text-lg font-semibold text-gray-900">
                {getSectionTitle(activeSection)}
                {` (${emails.filter((email) => !email.is_read).length}/${readStatus === "all" ? inboxCount : emails.length})`}
              </h2>
              <p className={`text-sm mt-1 truncate`}>
                {toAddress ? `To: ${toAddress}` : "No recipients found"}
              </p>
            </div>
          </div>

          {/* Actions Menu */}
          <div className="flex items-center space-x-2">
            {/* Label Actions - only show when emails are selected */}
            {hasCheckedEmails && (
              <EmailLabelActions
                emailIds={checkedEmailsArray}
                currentLabels={[]} // For bulk actions, we don't show current labels
                availableLabels={customLabels}
                onLabelsChange={(emailIds, labelIds) => {
                  onEmailLabelsChange(emailIds, labelIds);
                  // Clear selection after bulk label operation
                  setTimeout(() => {
                    onUnselectAll();
                  }, 100);
                }}
                onCreateLabel={onCreateLabel}
              />
            )}

            {/* More Actions Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMoreActions(!showMoreActions)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="More actions"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              {showMoreActions && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-1">
                    {/* Bulk Actions - only show when emails are selected */}
                    {hasCheckedEmails ? (
                      <>
                        <button
                          onClick={() => {
                            onBulkMarkAsRead(checkedEmailsArray, true);
                            setShowMoreActions(false);
                            // Clear selections after operation
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          Mark as Read
                        </button>
                        <button
                          onClick={() => {
                            onBulkMarkAsRead(checkedEmailsArray, false);
                            setShowMoreActions(false);
                            // Clear selections after operation
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          Mark as Unread
                        </button>
                        <button
                          onClick={() => {
                            onBulkDelete(checkedEmailsArray);
                            setShowMoreActions(false);
                            // Clear selections after operation
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select emails to see actions
                      </div>
                    )}

                    {/* Undo Action */}
                    {onUndo && (
                      <>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button
                          onClick={() => {
                            onUndo();
                            setShowMoreActions(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        >
                          Undo Last Action
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar"
        onScroll={(e) => {
          const target = e.currentTarget;
          if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            setFilterData((prev: any) => ({
              ...prev,
              page: prev.page + 1,
            }));
          }
        }}
      >
        {emails.map((email) => {
          const isSelected = selectedEmailId === email.message_id;
          const isChecked = checkedEmails.has(email.message_id);
          const emailLabels = getEmailCustomLabels(email);

          return (
            <div
              key={email.message_id}
              className={`
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${isSelected ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${!email.is_read ? "bg-blue-25" : ""}
              `}
              onClick={() => onEmailSelect(email)}
              onDoubleClick={(e) => handleEmailDoubleClick(email, e)}
              title="Double-click to open in full-page view"
              style={{
                ...(isSelected ? { borderRight: "1px solid blue" } : {}),
              }}
            >
              <div className="flex items-start space-x-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCheckToggle(email.message_id);
                  }}
                  className="mt-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStarToggle(email.message_id);
                  }}
                  className="mt-1 transition-colors"
                >
                  <Star
                    className={`w-4 h-4 ${email.is_starred
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-400 hover:text-yellow-500"
                      }`}
                  />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 min-w-0">
                      <p
                        className={`
                        text-sm mt-1
                        ${!email.is_read
                            ? "font-bold text-black"
                            : "font-semibold text-gray-400"
                          }
                        line-clamp-2
                      `}
                      >
                        {email.subject}
                      </p>
                      {email?.intent && (
                        <div
                          className={`
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                          ${getIntentLabel(email.intent).color}
                        `}
                        >
                          {React.createElement(
                            getIntentLabel(email.intent).icon,
                            {
                              className: `w-3 h-3 mr-1 ${getIntentLabel(email.intent).iconColor
                                }`,
                            }
                          )}
                          {getIntentLabel(email.intent).text}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 ml-2 flex-shrink-0">
                      {formatTime(email.created_at)}
                    </p>
                  </div>

                  <p
                    className={`
                    text-sm mt-1 truncate
                    ${!email.is_read
                        ? "text-gray-700 font-medium"
                        : "text-gray-400"
                      }
                  `}
                  >
                    {email.snippet}
                  </p>

                  {/* Custom Labels */}
                  {emailLabels.length > 0 && (
                    <LabelList emailLabels={email?.labels as string[]} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
