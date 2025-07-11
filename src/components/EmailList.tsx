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
// import { FilterOptions } from "../components/EmailFilters";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  FilterOptions,
  resetFilters,
  setFilterSettings,
} from "../store/filterSlice";
import { getIntentLabel, getSenderName } from "../hooks/commonFunction";
import { setInputFilled, setWidthAlign } from "../store/alignmentSlice";
import { NoMailFoundIcon } from "./Icons";

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
  searchFilter: any;
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
  searchFilter,
}) => {
  const [toAddress, setToAddress] = useState("");
  const [width, setWidth] = useState(320); // Default width
  const [isResizing, setIsResizing] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState("");
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(320);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [filterData, setFilterData] = useState<any>({
    page: 1,
    page_size: 20,
    search: undefined,
    folder: "inbox",
  });
  const [inboxCount, setInboxCount] = useState(0);
  const filters = useSelector((state: RootState) => state.filters);
  // console.log(filters);
  const dispatch = useDispatch();
  const [isFiltered, setIsFiltered] = useState(false);
  const [activeSectionTab, setActiveSectionTab] = useState("inbox");
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [selectedMails, setSelectedMails] = useState(0);

  useEffect(() => {
    // Initial call
    if (filters?.search === "") {
      getMailList(filterData);
      // setIsFiltered(false);
    }
  }, [filterData]);

  useEffect(() => {
    // Initial call
    if (filters !== undefined && Object.keys(filters).length >= 1) {
      console.log("inside filtered");
      setIsFiltered(true);
      if (setEmails && isInputFilled?.length !== 0) setEmails([]);
      getMailList(filters);
    }
  }, [filters]);

  useEffect(() => {
    if (getMailListResponse.isSuccess && setEmails) {
      const staticList = (getMailListResponse as any)?.data?.response?.data
        ?.results;

      if (staticList && Array.isArray(staticList)) {
        setInboxCount(
          (getMailListResponse as any)?.data?.response?.data?.count || 0
        );

        if (isInputFilled?.length !== 0) {
          // Clear previous and set new emails directly
          const newList = staticList.map((email: any) => ({
            ...email,
            intentLabel: email.labels || "new",
          }));
          setEmails(newList);
        } else {
          // Preserve previous emails if already present
          setEmails((prevEmails: any[]) => {
            const prevEmailMap = new Map(
              prevEmails.map((email) => [email.mail_id, email])
            );

            const updatedEmails = staticList.map((email: any) => {
              if (prevEmailMap.has(email.mail_id)) {
                return prevEmailMap.get(email.mail_id);
              } else {
                return {
                  ...email,
                  intentLabel: email.labels || "new",
                };
              }
            });

            return updatedEmails;
          });
        }
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
        dispatch(setWidthAlign(clampedWidth.toString()));
        setWidth(clampedWidth);
        localStorage.setItem("listwidth", width.toString() + "px");
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
    localStorage.setItem("listwidth", width.toString() + "px");
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

  // if (emails.length === 0) {
  //   return (
  //     <div
  //       className="bg-white border-r border-gray-200 relative"
  //       ref={containerRef}
  //       style={{
  //         width: `${width}px`,
  //         minWidth: "365px",
  //         maxWidth: "800px",
  //         height: "100%",
  //         overflow: "auto",
  //       }}
  //       onScroll={(e) => {
  //         const target = e.currentTarget;
  //         const totalPages = Math.ceil(inboxCount / filterData.page_size);

  //         // Scroll to bottom: load next page
  //         if (target.scrollHeight - target.scrollTop === target.clientHeight) {
  //           if (filterData.page < totalPages) {
  //             if (isFiltered) {
  //               // dispatch(setFilterSettings({ ...filters, page: filters?.page + 1 }));
  //               // setIsFiltered(true);
  //             } else {
  //               setFilterData((prev: any) => ({
  //                 ...prev,
  //                 page: prev.page + 1,
  //               }));
  //               setIsFiltered(false);
  //             }
  //           }
  //         }

  //         // Scroll to top: load previous page (if not on first page)
  //         if (target.scrollTop === 10) {
  //           if (filterData.page > 1) {
  //             if (isFiltered) {
  //               // dispatch(setFilterSettings({ ...filters, page: filters?.page - 1 }));
  //               // setIsFiltered(true);
  //             } else {
  //               setFilterData((prev: any) => ({
  //                 ...prev,
  //                 page: prev.page - 1,
  //               }));
  //               setIsFiltered(false);
  //             }
  //           }
  //         }
  //       }}

  //     >
  //       {/* Resizer */}
  //       <div
  //         className="absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10"
  //         onMouseDown={handleResizeStart}
  //       >
  //         <div className="bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" />
  //       </div>
  //       <div className="p-4 border-b border-gray-200" style={{ backgroundColor: "#dbeafe" }}>
  //         <h2 className="text-lg font-semibold text-gray-900">
  //           {getSectionTitle(activeSection)}
  //         </h2>
  //       </div>
  //       <EmptyState section={activeSection} />
  //     </div>
  //   );
  // }

  const isInputFilled = useSelector(
    (state: any) => state?.alignment?.isInputFilled
  );
  const selectedMailsCount = useSelector(
    (state: any) => state?.alignment?.selectedMailsCount
  );

  useEffect(() => {
    setSelectedMails(selectedMailsCount);
  }, [selectedMailsCount]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    // Dispatch true if input is not empty, false if empty
    dispatch(setInputFilled(value));
    // console.log(value,"rag1");
  };

  const handleSearchChange = (query: any) => {
    setSearchQuery(query);
    dispatch(setFilterSettings({ search: query }));
  };

  const dropdownThreeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownThreeRef.current &&
        !dropdownThreeRef.current.contains(event.target as Node)
      ) {
        setShowMoreActions(false);
      }
    };

    if (showMoreActions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoreActions]);

  return (
    <div
      className="bg-white border-r border-gray-200 relative"
      ref={containerRef}
      style={{
        width: `${width}px`,
        minWidth: "365px",
        maxWidth: "800px",
        height: "100%",
        overflow: "auto",
      }}
      onScroll={(e) => {
        const target = e.currentTarget;
        const totalPages = Math.ceil(inboxCount / filterData.page_size);

        // Scroll to bottom: load next page
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
          if (
            isFiltered
              ? filters?.page < totalPages
              : filterData.page < totalPages
          ) {
            if (isFiltered) {
              console.log("inside filtered section");
              dispatch(
                setFilterSettings({ ...filters, page: filters?.page + 1 })
              );
              setIsFiltered(true);
            } else {
              setFilterData((prev: any) => ({
                ...prev,
                page: prev.page + 1,
              }));
              setIsFiltered(false);
            }
          }
        }

        // Scroll to top: load previous page (if not on first page)
        if (target.scrollTop === 0) {
          if (filterData.page > 1) {
            if (
              isFiltered
                ? filters?.page < totalPages
                : filterData.page < totalPages
            ) {
              dispatch(
                setFilterSettings({ ...filters, page: filters?.page - 1 })
              );
              setIsFiltered(true);
            } else {
              setFilterData((prev: any) => ({
                ...prev,
                page: prev.page - 1,
              }));
              setIsFiltered(false);
            }
          }
        }
      }}
    >
      {/* Resizer */}
      <div
        className="absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10"
        onMouseDown={handleResizeStart}
      >
        <div className="bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" />
      </div>
      {/* <div className="border-b border-gray-300 mb-4" >
        <nav className="flex space-x-6" style={{justifyContent: "space-around", padding:"10px"}}>          <span
            onClick={() => {
              setActiveSectionTab("inbox");
              setFilterData((prev: any) => ({
                ...prev,
                folder: 'inbox',
              }));
            }}
            className={`cursor-pointer py-2 px-1 text-sm font-medium ${activeSectionTab === "inbox"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            INBOX
          </span>
          <span
            onClick={() => {
              setActiveSectionTab("sent");
              setFilterData((prev: any) => ({
                ...prev,
                folder: 'sent',
              }));
            }}
            className={`cursor-pointer py-2 px-1 text-sm font-medium ${activeSectionTab === "sent"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            SENT
          </span>
        </nav>
      </div> */}
      <div
        className="p-4 border-b border-gray-200"
        style={{ backgroundColor: "#dbeafe" }}
      >
        <div className="flex items-center justify-between">
          {/* Left Section: Checkbox + Search + Email Info */}
          <div className="flex items-start space-x-3">
            {/* Master Checkbox */}
            <button
              onClick={() => {
                if (checkedEmails.size === emails.length) {
                  onUnselectAll();
                } else {
                  onSelectAll();
                }
              }}
              className="mt-1 text-gray-400 hover:text-gray-600 transition-colors"
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

            {/* Search Input + Email Info */}
            <div className="flex flex-col">
              {!hasCheckedEmails ? (
                <>
                  {/* Search Input */}
                  <div className="relative w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        handleChange(e);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearchChange(searchQuery);
                        }
                      }}
                      className="w-full border rounded-md py-1.5 pl-3 pr-8 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => {
                        handleSearchChange(searchQuery);
                      }}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-blue-600"
                    >
                      🔍
                    </button>
                  </div>

                  {/* Email Address Display */}
                  <p className="text-sm mt-1 text-gray-800 truncate">
                    support@atyourprice.net
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {activeSectionTab === "sent" ? "Sent" : "Selected Emails"}
                    {activeSectionTab === "sent"
                      ? ` (${emails.filter((email) => !email.is_read).length}/${
                          readStatus === "all" ? inboxCount : emails.length
                        })`
                      : ` (${selectedMails})`}
                  </h4>
                  <p className="text-sm mt-1 text-gray-800 truncate">
                    support@atyourprice.net
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Label Actions */}
            {hasCheckedEmails && (
              <EmailLabelActions
                emailIds={checkedEmailsArray}
                currentLabels={[]}
                availableLabels={customLabels}
                onLabelsChange={(emailIds, labelIds) => {
                  onEmailLabelsChange(emailIds, labelIds);
                  setTimeout(() => onUnselectAll(), 100);
                }}
                onCreateLabel={onCreateLabel}
              />
            )}

            {/* More Actions */}
            {hasCheckedEmails && (
              <div className="relative">
                <button
                  onClick={() => setShowMoreActions(!showMoreActions)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="More actions"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {showMoreActions && (
                  <div
                    ref={dropdownThreeRef}
                    className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="p-1">
                      {/* Bulk Actions */}
                      <>
                        <button
                          onClick={() => {
                            onBulkMarkAsRead(checkedEmailsArray, true);
                            setShowMoreActions(false);
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Mark as Read
                        </button>
                        <button
                          onClick={() => {
                            onBulkMarkAsRead(checkedEmailsArray, false);
                            setShowMoreActions(false);
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Mark as Unread
                        </button>
                        <button
                          onClick={() => {
                            onBulkDelete(checkedEmailsArray);
                            setShowMoreActions(false);
                            setTimeout(() => onUnselectAll(), 100);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                        >
                          Delete
                        </button>
                      </>

                      {/* Undo */}
                      {onUndo && (
                        <>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button
                            onClick={() => {
                              onUndo();
                              setShowMoreActions(false);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Undo Last Action
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {emails.length > 0 ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-4">
          {/* Icon container with light blue background and shadow */}
          <div className="bg-blue-100 p-6 rounded-full shadow-md">
            <NoMailFoundIcon />
          </div>

          {/* Bold heading */}
          <h2 className="text-xl font-semibold text-gray-900">
            No emails found
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 max-w-sm">
            No conversations available yet.
          </p>
        </div>
      )}

      <div className="divide-y divide-gray-100 overflow-y-auto thin-scrollbar">
        {emails.map((email) => {
          const isSelected = selectedEmailId === email.mail_id;
          const isChecked = checkedEmails.has(email.mail_id);
          const emailLabels = getEmailCustomLabels(email);

          return (
            <div
              key={email.mail_id}
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
                    onCheckToggle(email.mail_id);
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
                    onStarToggle(email.mail_id);
                  }}
                  className="mt-1 transition-colors"
                >
                  <Star
                    className={`w-4 h-4 ${
                      email.is_starred
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-400 hover:text-yellow-500"
                    }`}
                  />
                </button>

                <div className="flex-1 min-w-0 flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-2">
                    {/* <p>{JSON.stringify(email?.from_address)}</p> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 min-w-0">
                        <p
                          className={`
                          text-sm mt-1
                          ${
                            !email.is_read
                              ? "font-bold text-black"
                              : "font-semibold text-gray-400"
                          }
                          line-clamp-2
                        `}
                        >
                          {getSenderName(email.from_address)}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 ml-2 flex-shrink-0">
                        {formatTime(email.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 min-w-0">
                        <p
                          className={`
                          text-sm mt-1
                          ${
                            !email.is_read
                              ? "font-bold text-black"
                              : "font-semibold text-gray-400"
                          }
                          line-clamp-2
                        `}
                        >
                          {email.subject}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`
                      text-sm mt-1 truncate
                      ${
                        !email.is_read
                          ? "text-gray-700 font-medium"
                          : "text-gray-400"
                      }
                    `}
                    >
                      {email.snippet}
                    </p>
                    {/* Right side labels - responsive design */}
                    <div className="flex-shrink-0 flex flex-col items-start space-y-1 mt-2">
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
                              className: `w-3 h-3 mr-1 sm:w-3 sm:h-3 xs:w-2 xs:h-2 ${
                                getIntentLabel(email.intent).iconColor
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

                    {/* Custom Labels */}
                    {/* {emailLabels.length > 0 && (
                      <LabelList emailLabels={email?.labels as string[]} />
                    )} */}
                  </div>
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
