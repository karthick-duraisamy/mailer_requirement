import { useState, useMemo, useEffect } from "react";
import EmailList from "./components/EmailList";
import ConversationThread from "./components/ConversationThread";
import ComposeModal, { ComposeEmailData } from "./components/ComposeModal";
import LabelManager from "./components/LabelManager";
import { Email, CustomLabel } from "./types/email";
import { mockCustomLabels } from "./data/mockLabels";
import { FilterOptions } from "./components/EmailFilters";
import { useLazyGetLabelListQuery, useSetMailStatusMutation } from "./service/inboxService";
import { useDispatch } from "react-redux";
import { setFilterSettings } from "./store/filterSlice";
import Sidebar from "./components/Sidebar";
import { useScreenResolution } from "./hooks/commonFunction";
import { setFilterFilled, setSelectedMailsCount } from "./store/alignmentSlice";

function App() {
  const [activeItem, setActiveItem] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null | any>(null);
  const [_sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState<any[]>([]);
  const [deletedEmails, setDeletedEmails] = useState<any[]>([]);
  const [customLabels, setCustomLabels] =
    useState<CustomLabel[]>(mockCustomLabels);

  const [checkedEmails, setCheckedEmails] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, _setFilters] = useState<FilterOptions>({
    readStatus: "all",
    starred: false,
    hasAttachment: false,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all",
  });
  const dispatch = useDispatch();
  const [setMailStatus, setMailStatusResponse] = useSetMailStatusMutation();
  const [getLabelList, _getLabelListResponse] = useLazyGetLabelListQuery();
  const [aiReplyStates, setAiReplyStates] = useState({
    isGenerating: false,
    showAiReply: false,
    generatedReply: "",
    tone: "professional",
  });

  const [labelManagerOpen, setLabelManagerOpen] = useState(false);
  const [isFullPageView, setIsFullPageView] = useState(false);
  const [composePanelOpen, setComposePanelOpen] = useState(false);
  const [_lastAction, setLastAction] = useState<any>(null);
  const { width: windowWidth } = useScreenResolution();

  // Calculate email counts for sidebar
  const calculateEmailCounts = () => {
    const counts: Record<string, number> = {};

    // Basic sections - show unread count
    counts.inbox =
      emails?.filter(
        (email) => (!email.is_read || email.is_read) && !email.is_deleted
      ).length || 0;
    counts.starred = emails?.filter((email) => email.is_starred).length || 0;
    counts.sent =
      emails?.filter((email) => email.folder === "[Gmail]/Sent Mail").length ||
      0;
    counts.bin = deletedEmails.filter((email) => email.is_deleted).length || 0;

    // Custom labels - show unread count
    emails?.forEach((label) => {
      if (label.labels && label.labels.length > 0) {
        // System labels
        let labelEmails: any[] = [];
        // System labels

        switch (label.labels[0]) {
        }
        counts[`label-${label.id}`] = labelEmails.filter(
          (email) => !email.is_read
        ).length;
      } else {
        // Custom labels
        const labelEmails = emails.filter((email) =>
          email.customLabels?.includes(label.id)
        );
        counts[`custom-label-${label.id}`] = labelEmails.filter(
          (email) => !email.is_read
        ).length;
      }
    });

    return counts;
  };

  const emailCounts = useMemo(() => {
    return calculateEmailCounts();
  }, [emails, customLabels, deletedEmails]);

  // To get the labes counts of mails in different folders
  useEffect(() => {
    if(setMailStatusResponse?.isSuccess){
      getLabelList({});
    }
  }, [setMailStatusResponse])

  // Apply filters and sorting
  const applyFilters = (emailList: any[]) => {
    let filtered = [...emailList];

    // Apply read status filter
    if (filters.readStatus === "read") {
      filtered = filtered.filter((email) => email.is_read === true);
    } else if (filters.readStatus === "unread") {
      filtered = filtered.filter((email) => email.is_read === false);
    } else if (filters.readStatus === "all") {
      filtered = emailList;
    }

    // Apply starred filter
    if (filters.starred) {
      filtered = filtered.filter((email) => email.is_starred);
    }

    // Apply attachment filter (mock logic - in real app, check email content)
    if (filters.hasAttachment) {
      filtered = filtered.filter((email) =>
        email.messages.some(
          (message: any) =>
            message.content.toLowerCase().includes("attach") ||
            message.content.toLowerCase().includes("file") ||
            message.content.toLowerCase().includes("document")
        )
      );
    }

    // Apply date range filter
    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter((email) => {
        const emailDate = new Date(email.created_at);
        const fromDate = filters.dateRange.from
          ? new Date(filters.dateRange.from)
          : null;
        const toDate = filters.dateRange.to
          ? new Date(filters.dateRange.to + "T23:59:59")
          : null;

        return (
          (!fromDate || emailDate >= fromDate) &&
          (!toDate || emailDate <= toDate)
        );
      });
    }
    
    return filtered;
  };

  // Group emails into conversations
  const conversations = useMemo(() => {
    return emails
      ?.map((email) => ({
        ...email,
        messages: email.messages || [],
        conversationEmails: [email], // Each email is its own conversation
      }))
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  }, [emails]);

  // Filtering logic
  const filteredEmails = useMemo(() => {
    let filtered = conversations;

    // Filter by section
    switch (activeItem) {
      case "inbox":
        filtered = conversations?.filter((email) => !email.is_deleted);
        break;
      case "starred":
        filtered = conversations?.filter((email) => email.is_starred);
        break;
      case "sent":
        filtered = conversations?.filter(
          (email) => email.folder === "SENT"
        );
        break;
      case "bin":
        filtered = conversations?.filter((email) => email.is_deleted);  
        break;

      default:
        // Handle custom labels
        if (activeItem.startsWith("custom-label-")) {
          const labelId = activeItem.replace("custom-label-", "");
          filtered = conversations?.filter((email) =>
            email.customLabels?.includes(labelId)
          );
        }
        break;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered?.filter(
        (email) =>
          email.subject.toLowerCase().includes(query) ||
          email.from_adress.toLowerCase().includes(query) ||
          email.preview.toLowerCase().includes(query) ||
          email.messages.some((message: any) =>
            message.content.toLowerCase().includes(query)
          ) ||
          // Search in custom labels
          (email.customLabels &&
            email.customLabels.some((labelId: any) => {
              const label = customLabels.find((l) => l.id === labelId);
              return label?.name.toLowerCase().includes(query);
            }))
      );
    }

    // Apply advanced filters
    filtered = applyFilters(filtered || []);

    return filtered;
  }, [
    emails,
    activeItem,
    searchQuery,
    filters,
    customLabels,
    conversations,
    deletedEmails,
  ]);

  const handleEmailSelect = (email: any, fullPage: boolean = false) => {
    setSelectedEmail(email);
    setIsFullPageView(fullPage);
    // Mark email as read when selected
    setEmails((prevEmails) =>
      prevEmails?.map((e) =>
        e.mail_id === email.mail_id ? { ...e, is_read: true } : e
      )
    );
  };

  const handleBackToList = () => {
    setIsFullPageView(false);
  };

  const handleStarToggle = (emailId: string) => {
    // Store previous state for undo
    const email = emails?.find((email) => email.mail_id === emailId);
    if (!email) return;

    const previousState = [
      { id: email.mail_id, is_starred: email.is_starred },
    ];

    setLastAction({
      type: "star",
      emailIds: [emailId],
      previousState,
    });

    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        email.mail_id === emailId
          ? { ...email, is_starred: !email.is_starred }
          : email
      )
    );

    // To update the status
    setMailStatus({
      mail_ids: [emailId],
      is_starred: !email.is_starred
    })

    // If we're currently in the starred section and the email is being unstarred,
    // clear the selection to avoid showing an email that's no longer in this section
    if (
      activeItem === "starred" &&
      !email.is_starred &&
      selectedEmail?.id === emailId
    ) {
      setSelectedEmail(null);
    }
  };

  const handleCheckToggle = (emailId: string) => {
    setCheckedEmails((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(emailId)) {
        newSet.delete(emailId);
      } else {
        newSet.add(emailId);
      }
      return newSet;
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(setFilterSettings({ search: query }));
  };

  const handleSectionChange = (section: string) => {
    setActiveItem(section);
    setSelectedEmail(null); // Clear selected email when changing sections
    setSidebarOpen(false); // Close sidebar on mobile when selecting item
  };

  const handleComposeOpen = () => {
    setComposePanelOpen(true);
  };

  const handleComposeClose = () => {
    setComposePanelOpen(false);
  };

  const handleSendEmail = async (_emailData: ComposeEmailData) => {
    // In a real app, you would make an API call here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Close compose panel
    setComposePanelOpen(false);
  };

  const handleSaveDraft = async (emailData: ComposeEmailData) => {
    // In a real app, you would make an API call here
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Show success message
    if (
      emailData.to.length > 0 ||
      emailData.subject.trim() ||
      emailData.body.trim()
    ) {
      // alert("Draft saved successfully!");
    }

    // Close compose panel
    setComposePanelOpen(false);
  };

  // Label Management Functions
  const handleCreateLabel = (
    labelData: Omit<CustomLabel, "id" | "createdAt">
  ) => {
    const newLabel: CustomLabel = {
      ...labelData,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    setCustomLabels((prev) => [...prev, newLabel]);
  };

  const handleUpdateLabel = (
    labelId: string,
    updates: Partial<CustomLabel>
  ) => {
    setCustomLabels((prev) =>
      prev.map((label) =>
        label.id === labelId ? { ...label, ...updates } : label
      )
    );
  };

  const handleDeleteLabel = (labelId: string) => {
    // Remove label from all emails
    setEmails((prev) =>
      prev?.map((email) => ({
        ...email,
        customLabels:
          email.customLabels?.filter((id: any) => id !== labelId) || [],
      }))
    );

    // Remove label from labels list
    setCustomLabels((prev) => prev.filter((label) => label.id !== labelId));

    // If currently viewing this label, switch to inbox
    if (activeItem === `custom-label-${labelId}`) {
      setActiveItem("inbox");
    }
  };

  const handleEmailLabelsChange = (emailIds: string[], labelIds: string[]) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.mail_id)
          ? { ...email, customLabels: labelIds }
          : email
      )
    );

    // Clear checked emails after label operation
    setCheckedEmails(new Set());

  };

  const handleBulkMarkAsRead = (emailIds: string[], isRead: boolean) => {
    // Store previous state for undo
    const previousState = emails
      ?.filter((email) => emailIds.includes(email.mail_id))
      ?.map((email) => ({ id: email.mail_id, is_read: email.is_read }));

    setLastAction({
      type: "markAsRead",
      emailIds,
      previousState,
    });

    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        emailIds.includes(email.mail_id)
          ? { ...email, is_read: isRead }
          : email
      )
    );

    setMailStatus({
      mail_ids: emailIds,
      is_read: isRead
    })

    // Clear checked emails after action
    setCheckedEmails(new Set());
  };

  const handleBulkDelete = (emailIds: string[]) => {
    // Store previous state for undo
    const previousState = emails?.filter((email) =>
      emailIds.includes(email.mail_id)
    );

    setLastAction({
      type: "delete",
      emailIds,
      previousState,
    });

    const emailsToDelete = emails
      .filter((email) => emailIds.includes(email.mail_id))
      .map((email) => ({ ...email, is_deleted: true }));

    // Add them to deletedEmails
    setDeletedEmails((prev) => [...prev, ...emailsToDelete]);

    // Also update the emails state to mark them as deleted
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        emailIds.includes(email.mail_id)
          ? { ...email, is_deleted: true }
          : email
      )
    );

    setMailStatus({
      mail_ids: emailIds,
      is_deleted: true
    })

    // Clear checked emails and selected email if deleted
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.mail_id)) {
      setSelectedEmail(null);
    }

    // console.log(`Deleted ${emailIds} emails`);
  };

  const handleSelectAll = () => {
    const allEmailIds = filteredEmails.map((email) => email.mail_id);
    setCheckedEmails(new Set(allEmailIds));
  };

  const handleUnselectAll = () => {
    setCheckedEmails(new Set());
  };

  const handleDeleteEmail = (emailId: string) => {
    // Find the email to delete
    const emailToDelete = emails?.find((email) => email.mail_id === emailId);
    if (!emailToDelete) return;

    // Move email to deleted emails
    setDeletedEmails((prev) => [...prev, emailToDelete]);

    // Remove from active emails
    setEmails((prevEmails) =>
      prevEmails?.map((email) =>
        email.mail_id === emailId
          ? { ...email, is_deleted: !email.is_deleted }
          : email
      )
    );
    setMailStatus({
      mail_ids: [emailId],
      is_deleted: true
    })

    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.mail_id === emailId) {
      setSelectedEmail(null);
    }

    // console.log(`Email moved to bin: ${emailToDelete.subject}`);
  };

  const handleRestoreEmail = (emailId: string) => {
    // Remove from deleted emails
    setDeletedEmails((prev) =>
      prev.filter((email) => email.mail_id !== emailId)
    );

    setMailStatus({
      mail_ids: [emailId],
      is_deleted: false
    });
    
    dispatch(
      setFilterSettings({
        page: 1
      }));
    dispatch(setFilterFilled(true));


    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.mail_id === emailId) {
      setSelectedEmail(null);
    }

  };

  const handleBulkRestore = (emailIds: string[]) => {
    // Find emails to restore
    const emailsToRestore = deletedEmails.filter((email) =>
      emailIds.includes(email.mail_id)
    );

    // Move emails back to active emails
    setEmails((prev: any) => [...prev, ...emailsToRestore]);

    // Remove from deleted emails
    setDeletedEmails((prev) =>
      prev.filter((email) => !emailIds.includes(email.mail_id))
    );

    setMailStatus({
      mail_ids: emailsToRestore,
      is_deleted: false
    })

    // Clear checked emails and selected email if restored
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.mail_id)) {
      setSelectedEmail(null);
    }

    // console.log(`Restored ${emailIds.length} emails from bin`);
  };

  const getAiReplyState = (_emailId: string): any => {
    return (
      aiReplyStates || {
        isGenerating: false,
        showAiReply: false,
        generatedReply: "",
        tone: "professional",
      }
    );
  };

  // Helper function to update AI reply state for specific email
  const updateAiReplyState = (emailId: string, newState: any) => {
    setAiReplyStates((prev: any) => ({
      ...prev,
      [emailId]: newState,
    }));
  };

  // Selected/Checked Emails counts
  useEffect(() => {
    dispatch(setSelectedMailsCount(checkedEmails?.size || 0));
  }, [checkedEmails]);

  return (
    <div className=" flex flex-col bg-gray-50" style={{ height: `calc(100vh - ${windowWidth < 1470 ? "80px" : "155px"})` }}>

      {/* Top Navigation */}
      <Sidebar
        activeItem={activeItem}
        onItemSelect={handleSectionChange}
        onComposeClick={handleComposeOpen}
        customLabels={customLabels}
        emailCounts={emailCounts}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setEmails ={setEmails}
        setIsFullPageView = {setIsFullPageView}
        isFullPageView = {isFullPageView}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* {getMailListResponse?.isSuccess && ( */}
          <div className="flex-1 flex min-w-0">
            {isFullPageView ? (
              <ConversationThread
                email={selectedEmail}
                onClose={() => setSelectedEmail(null)}
                onBack={handleBackToList}
                isFullPage={true}
                aiReplyState={getAiReplyState(selectedEmail?.message_id || "")}
                onAiReplyStateChange={(newState) =>
                  selectedEmail?.message_id &&
                  updateAiReplyState(selectedEmail.message_id, newState)
                }
                customLabels={customLabels}
                onDeleteEmail={handleDeleteEmail}
                onRestoreEmail={handleRestoreEmail}
                activeSection={activeItem}
                isFullPageView = {isFullPageView}
              />
            ) : (
              <div className="flex flex-1 h-full">
                  <div className="flex-shrink-0">
                    <EmailList
                      emails={filteredEmails}
                      selectedEmailId={selectedEmail?.mail_id || null}
                      onEmailSelect={handleEmailSelect}
                      onStarToggle={handleStarToggle}
                      onCheckToggle={handleCheckToggle}
                      checkedEmails={checkedEmails}
                      activeSection={activeItem}
                      customLabels={customLabels}
                      onEmailLabelsChange={handleEmailLabelsChange}
                      onCreateLabel={handleCreateLabel}
                      onBulkMarkAsRead={handleBulkMarkAsRead}
                      onBulkDelete={handleBulkDelete}
                      onBulkRestore={handleBulkRestore}
                      onSelectAll={handleSelectAll}
                      onUnselectAll={handleUnselectAll}
                      setEmails={setEmails}
                      readStatus={filters?.readStatus}
                    />
                  </div>
                {/* )} */}

                <ConversationThread
                  email={selectedEmail}
                  onClose={() => setSelectedEmail(null)}
                  isFullPage={false}
                  aiReplyState={getAiReplyState(selectedEmail?.id || "")}
                  onAiReplyStateChange={(newState) =>
                    selectedEmail?.message_id &&
                    updateAiReplyState(selectedEmail.message_id, newState)
                  }
                  customLabels={customLabels}
                  onDeleteEmail={handleDeleteEmail}
                  onRestoreEmail={handleRestoreEmail}
                  activeSection={activeItem}
                  onStarToggle={handleStarToggle}
                  isFullPageView = {isFullPageView}
                />
              </div>
            )}
          </div>
        {/* )} */}
      </div>

      <LabelManager
        isOpen={labelManagerOpen}
        onClose={() => setLabelManagerOpen(false)}
        labels={customLabels}
        onCreateLabel={handleCreateLabel}
        onUpdateLabel={handleUpdateLabel}
        onDeleteLabel={handleDeleteLabel}
      />

      {/* Compose Panel - Fixed overlay on the right side */}
      {composePanelOpen && (
        <ComposeModal
          isOpen={composePanelOpen}
          onClose={handleComposeClose}
          onSend={handleSendEmail}
          onSaveDraft={handleSaveDraft}
          isPanel={true}
        />
      )}
    </div>
  );
}

export default App;