import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import ConversationThread from './components/ConversationThread';
import ComposeModal, { ComposeEmailData } from './components/ComposeModal';
import LabelManager from './components/LabelManager';
import { Email, CustomLabel } from './types/email';
import { mockEmails } from './data/mockEmails';
import { mockCustomLabels } from './data/mockLabels';
import { FilterOptions } from './components/EmailFilters';

function App() {
  const [activeItem, setActiveItem] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(
    mockEmails.map(email => ({
      ...email,
      intentLabel: email.intentLabel || 'new'
    }))
  );
  const [deletedEmails, setDeletedEmails] = useState<Email[]>([]);
  const [customLabels, setCustomLabels] = useState<CustomLabel[]>(mockCustomLabels);
  const [checkedEmails, setCheckedEmails] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    readStatus: 'all',
    starred: false,
    hasAttachment: false,
    sortBy: 'newest',
    dateRange: { from: '', to: '' },
    intent: 'all',
  });
  const [aiReplyStates, setAiReplyStates] = useState<Map<string, AiReplyState>>(new Map());
  const [composeModalOpen, setComposeModalOpen] = useState(false);
  const [labelManagerOpen, setLabelManagerOpen] = useState(false);
  const [isFullPageView, setIsFullPageView] = useState(false);
  const [composePanelOpen, setComposePanelOpen] = useState(false);
  const [lastAction, setLastAction] = useState<any>(null);

  // Calculate email counts for each section
  const emailCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    // Basic sections - show unread count
    counts.inbox = emails.filter(email => !email.isRead).length;
    counts.starred = emails.filter(email => email.isStarred && !email.isRead).length;
    counts.snoozed = 0; // Mock data doesn't have snoozed emails
    counts.bin = deletedEmails.length;

    // Custom labels - show unread count
    customLabels.forEach(label => {
      if (label.isSystem) {
        // System labels
        let labelEmails: Email[] = [];
        switch (label.id) {
          case 'work':
            labelEmails = emails.filter(email => 
              email.customLabels?.includes('work') || 
              email.senderEmail.includes('company.com') ||
              email.senderEmail.includes('techcorp.com') ||
              email.senderEmail.includes('consulting.com') ||
              email.senderEmail.includes('design.studio')
            );
            break;
          case 'personal':
            labelEmails = emails.filter(email => 
              email.customLabels?.includes('personal') ||
              email.subject.toLowerCase().includes('welcome') ||
              email.senderEmail.includes('startup.io')
            );
            break;
          case 'important':
            labelEmails = emails.filter(email => 
              email.customLabels?.includes('important') ||
              email.subject.toLowerCase().includes('urgent') ||
              email.subject.toLowerCase().includes('important') ||
              email.isStarred
            );
            break;
          case 'travel':
            labelEmails = emails.filter(email => 
              email.customLabels?.includes('travel')
            );
            break;
        }
        counts[`label-${label.id}`] = labelEmails.filter(email => !email.isRead).length;
      } else {
        // Custom labels
        const labelEmails = emails.filter(email => 
          email.customLabels?.includes(label.id)
        );
        counts[`custom-label-${label.id}`] = labelEmails.filter(email => !email.isRead).length;
      }
    });

    return counts;
  }, [emails, customLabels]);

  // Apply filters and sorting
  const applyFilters = (emailList: Email[]) => {
    let filtered = [...emailList];

    // Apply read status filter
    if (filters.readStatus === 'read') {
      filtered = filtered.filter(email => email.isRead);
    } else if (filters.readStatus === 'unread') {
      filtered = filtered.filter(email => !email.isRead);
    }

    // Apply starred filter
    if (filters.starred) {
      filtered = filtered.filter(email => email.isStarred);
    }

    // Apply attachment filter (mock logic - in real app, check email content)
    if (filters.hasAttachment) {
      filtered = filtered.filter(email => 
        email.messages.some(message => 
          message.content.toLowerCase().includes('attach') ||
          message.content.toLowerCase().includes('file') ||
          message.content.toLowerCase().includes('document')
        )
      );
    }

    // Apply date range filter
    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter(email => {
        const emailDate = new Date(email.timestamp);
        const fromDate = filters.dateRange.from ? new Date(filters.dateRange.from) : null;
        const toDate = filters.dateRange.to ? new Date(filters.dateRange.to + 'T23:59:59') : null;

        return (!fromDate || emailDate >= fromDate) && (!toDate || emailDate <= toDate);
      });
    }

    // Apply intent-based filter
    if (filters.intent !== 'all') {
      filtered = filtered.filter(email => {
        if (email.intentLabel) {
          switch (filters.intent) {
            case 'meetings':
              return email.intentLabel === 'meeting';
            case 'notifications':
              return email.intentLabel === 'system';
            case 'campaigns':
              return email.intentLabel === 'announcement';
            case 'support':
              return email.intentLabel === 'feedback';
            default:
              return true;
          }
        }
        // Handle emails without intent labels as 'new'
        const emailIntent = email.intentLabel || 'new';
        const content = `${email.subject} ${email.preview}`.toLowerCase();
        switch (filters.intent) {
          case 'meetings':
            return emailIntent === 'meeting' || content.includes('meeting') || content.includes('schedule') || content.includes('appointment');
          case 'notifications':
            return emailIntent === 'system' || content.includes('notification') || content.includes('system') || content.includes('alert');
          case 'campaigns':
            return emailIntent === 'announcement' || content.includes('newsletter') || content.includes('campaign') || content.includes('marketing');
          case 'support':
            return emailIntent === 'feedback' || content.includes('support') || content.includes('help') || content.includes('issue');
          case 'new':
            return emailIntent === 'new';
          default:
            return true;
        }
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'oldest':
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
        case 'newest':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'subject-az':
          return a.subject.localeCompare(b.subject);
        case 'subject-za':
          return b.subject.localeCompare(a.subject);
        case 'sender-az':
          return a.sender.localeCompare(b.sender);
        case 'sender-za':
          return b.sender.localeCompare(a.sender);
        case 'starred-first':
          if (a.isStarred && !b.isStarred) return -1;
          if (!a.isStarred && b.isStarred) return 1;
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

    return filtered;
  };

  // Group emails into conversations
  const conversations = useMemo(() => {
    const conversationMap = new Map<string, Email[]>();

    emails.forEach(email => {
      // Create a conversation key based on participants (normalize for bidirectional conversations)
      const participants = [email.senderEmail, ...email.messages[0].to].sort();
      const conversationKey = participants.join(',');

      if (!conversationMap.has(conversationKey)) {
        conversationMap.set(conversationKey, []);
      }
      conversationMap.get(conversationKey)!.push(email);
    });

    // Convert conversations to email format (showing the latest email from each conversation)
    return Array.from(conversationMap.values()).map(conversationEmails => {
      // Sort by timestamp and return the latest email as the conversation representative
      const sortedEmails = conversationEmails.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      const latestEmail = sortedEmails[0];

      // Combine all messages from the conversation into the latest email
      const allMessages = conversationEmails.flatMap(email => email.messages)
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

      return {
        ...latestEmail,
        messages: allMessages,
        conversationEmails: sortedEmails // Store original emails for reference
      };
    }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [emails]);

  // Filtering logic
  const filteredEmails = useMemo(() => {
    let filtered = conversations;

    // Filter by section
    switch (activeItem) {
      case 'inbox':
        // Show all conversations
        break;
      case 'starred':
        filtered = conversations.filter(email => email.isStarred);
        break;
      case 'snoozed':
        // For demo, show empty snoozed
        filtered = [];
        break;
      case 'bin':
        // Show deleted emails
        filtered = deletedEmails.map(email => ({
          ...email,
          messages: email.messages || []
        }));
        break;
      case 'label-work':
        filtered = conversations.filter(email => 
          email.customLabels?.includes('work') ||
          email.subject.toLowerCase().includes('project') ||
          email.subject.toLowerCase().includes('meeting') ||
          email.subject.toLowerCase().includes('campaign') ||
          email.senderEmail.includes('company.com') ||
          email.senderEmail.includes('techcorp.com')
        );
        break;
      case 'label-personal':
        filtered = conversations.filter(email => 
          email.customLabels?.includes('personal') ||
          email.subject.toLowerCase().includes('welcome') ||
          email.senderEmail.includes('startup.io')
        );
        break;
      case 'label-important':
        filtered = conversations.filter(email => 
          email.customLabels?.includes('important') ||
          email.subject.toLowerCase().includes('urgent') ||
          email.subject.toLowerCase().includes('important') ||
          email.isStarred
        );
        break;
      case 'label-travel':
        filtered = conversations.filter(email => 
          email.customLabels?.includes('travel')
        );
        break;
      default:
        // Handle custom labels
        if (activeItem.startsWith('custom-label-')) {
          const labelId = activeItem.replace('custom-label-', '');
          filtered = conversations.filter(email => 
            email.customLabels?.includes(labelId)
          );
        }
        break;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(email =>
        email.subject.toLowerCase().includes(query) ||
        email.sender.toLowerCase().includes(query) ||
        email.preview.toLowerCase().includes(query) ||
        email.messages.some(message => 
          message.content.toLowerCase().includes(query)
        ) ||
        // Search in custom labels
        (email.customLabels && email.customLabels.some(labelId => {
          const label = customLabels.find(l => l.id === labelId);
          return label?.name.toLowerCase().includes(query);
        }))
      );
    }

    // Apply advanced filters
    filtered = applyFilters(filtered);

    return filtered;
  }, [emails, activeItem, searchQuery, filters, customLabels, conversations]);

  const handleEmailSelect = (email: Email, fullPage: boolean = false) => {
    setSelectedEmail(email);
    setIsFullPageView(fullPage);
    // Mark email as read when selected
    setEmails(prevEmails => 
      prevEmails.map(e => 
        e.id === email.id ? { ...e, isRead: true } : e
      )
    );
  };

  const handleBackToList = () => {
    setIsFullPageView(false);
  };

  const handleStarToggle = (emailId: string) => {
    // Store previous state for undo
    const email = emails.find(email => email.id === emailId);
    if (!email) return;

    const previousState = [{ id: email.id, isStarred: email.isStarred }];

    setLastAction({
      type: 'star',
      emailIds: [emailId],
      previousState,
    });

    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
      )
    );

    // Update selected email if it's the one being starred/unstarred
    if (selectedEmail?.id === emailId) {
      setSelectedEmail(prev => prev ? { ...prev, isStarred: !prev.isStarred } : null);
    }

    // If we're currently in the starred section and the email is being unstarred,
    // clear the selection to avoid showing an email that's no longer in this section
    if (activeItem === 'starred' && email.isStarred && selectedEmail?.id === emailId) {
      setSelectedEmail(null);
    }
  };

  const handleCheckToggle = (emailId: string) => {
    setCheckedEmails(prev => {
      const newSet = new Set(prev);
      if (newSet.has(emailId)) {
        newSet.delete(emailId);
      } else {
        newSet.add(emailId);
      }
      return newSet;
    });
  };

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSectionChange = (section: string) => {
    setActiveItem(section);
    setSelectedEmail(null); // Clear selected email when changing sections
    setSidebarOpen(false); // Close sidebar on mobile when selecting item
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleComposeOpen = () => {
    setComposePanelOpen(true);
  };

  const handleComposeClose = () => {
    setComposePanelOpen(false);
  };

  const handleSendEmail = async (emailData: ComposeEmailData) => {
    // Simulate API call to send email
    console.log('Sending email:', emailData);

    // In a real app, you would make an API call here
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    alert('Email sent successfully!');

    // Close compose panel
    setComposePanelOpen(false);
  };

  const handleSaveDraft = async (emailData: ComposeEmailData) => {
    // Simulate API call to save draft
    console.log('Saving draft:', emailData);

    // In a real app, you would make an API call here
    await new Promise(resolve => setTimeout(resolve, 500));

    // Show success message
    if (emailData.to.length > 0 || emailData.subject.trim() || emailData.body.trim()) {
      alert('Draft saved successfully!');
    }

    // Close compose panel
    setComposePanelOpen(false);
  };

  // Label Management Functions
  const handleCreateLabel = (labelData: Omit<CustomLabel, 'id' | 'createdAt'>) => {
    const newLabel: CustomLabel = {
      ...labelData,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    setCustomLabels(prev => [...prev, newLabel]);

    // In a real app, you would make an API call here
    console.log('Creating label:', newLabel);
  };

  const handleUpdateLabel = (labelId: string, updates: Partial<CustomLabel>) => {
    setCustomLabels(prev =>
      prev.map(label =>
        label.id === labelId ? { ...label, ...updates } : label
      )
    );

    // In a real app, you would make an API call here
    console.log('Updating label:', labelId, updates);
  };

  const handleDeleteLabel = (labelId: string) => {
    // Remove label from all emails
    setEmails(prev =>
      prev.map(email => ({
        ...email,
        customLabels: email.customLabels?.filter(id => id !== labelId) || []
      }))
    );

    // Remove label from labels list
    setCustomLabels(prev => prev.filter(label => label.id !== labelId));

    // If currently viewing this label, switch to inbox
    if (activeItem === `custom-label-${labelId}`) {
      setActiveItem('inbox');
    }

    // In a real app, you would make an API call here
    console.log('Deleting label:', labelId);
  };

  const handleEmailLabelsChange = (emailIds: string[], labelIds: string[]) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        emailIds.includes(email.id)
          ? { ...email, customLabels: labelIds }
          : email
      )
    );

    // In a real app, you would make an API call here
    console.log('Updating email labels:', emailIds, labelIds);
  };

  const handleBulkMarkAsRead = (emailIds: string[], isRead: boolean) => {
    // Store previous state for undo
    const previousState = emails
      .filter(email => emailIds.includes(email.id))
      .map(email => ({ id: email.id, isRead: email.isRead }));

    setLastAction({
      type: 'markAsRead',
      emailIds,
      previousState,
    });

    setEmails(prevEmails =>
      prevEmails.map(email =>
        emailIds.includes(email.id)
          ? { ...email, isRead }
          : email
      )
    );

    // Clear checked emails after action
    setCheckedEmails(new Set());

    console.log(`Marked ${emailIds.length} emails as ${isRead ? 'read' : 'unread'}`);
  };

  const handleBulkDelete = (emailIds: string[]) => {
    // Store previous state for undo
    const previousState = emails.filter(email => emailIds.includes(email.id));

    setLastAction({
      type: 'delete',
      emailIds,
      previousState,
    });

    setEmails(prevEmails =>
      prevEmails.filter(email => !emailIds.includes(email.id))
    );

    // Clear checked emails and selected email if deleted
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.id)) {
      setSelectedEmail(null);
    }

    console.log(`Deleted ${emailIds.length} emails`);
  };

  const handleSelectAll = () => {
    const allEmailIds = filteredEmails.map(email => email.id);
    setCheckedEmails(new Set(allEmailIds));
  };

  const handleUnselectAll = () => {
    setCheckedEmails(new Set());
  };

  const handleDeleteEmail = (emailId: string) => {
    // Find the email to delete
    const emailToDelete = emails.find(email => email.id === emailId);
    if (!emailToDelete) return;

    // Move email to deleted emails
    setDeletedEmails(prev => [...prev, emailToDelete]);

    // Remove from active emails
    setEmails(prev => prev.filter(email => email.id !== emailId));

    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.id === emailId) {
      setSelectedEmail(null);
    }

    console.log(`Email moved to bin: ${emailToDelete.subject}`);
  };

  const handleRestoreEmail = (emailId: string) => {
    // Find the email to restore
    const emailToRestore = deletedEmails.find(email => email.id === emailId);
    if (!emailToRestore) return;

    // Move email back to active emails
    setEmails(prev => [...prev, emailToRestore]);

    // Remove from deleted emails
    setDeletedEmails(prev => prev.filter(email => email.id !== emailId));

    // Clear selection if this email was selected
    if (selectedEmail && selectedEmail.id === emailId) {
      setSelectedEmail(null);
    }

    console.log(`Email restored from bin: ${emailToRestore.subject}`);
  };

  const handleBulkRestore = (emailIds: string[]) => {
    // Find emails to restore
    const emailsToRestore = deletedEmails.filter(email => emailIds.includes(email.id));

    // Move emails back to active emails
    setEmails(prev => [...prev, ...emailsToRestore]);

    // Remove from deleted emails
    setDeletedEmails(prev => prev.filter(email => !emailIds.includes(email.id)));

    // Clear checked emails and selected email if restored
    setCheckedEmails(new Set());
    if (selectedEmail && emailIds.includes(selectedEmail.id)) {
      setSelectedEmail(null);
    }

    console.log(`Restored ${emailIds.length} emails from bin`);
  };

  const handleUndo = () => {
    if (!lastAction) return;

    switch (lastAction.type) {
      case 'markAsRead':
        setEmails(prevEmails =>
          prevEmails.map(email => {
            const prevState = lastAction.previousState.find((state: any) => state.id === email.id);
            return prevState ? { ...email, isRead: prevState.isRead } : email;
          })
        );
        break;

      case 'delete':
        setEmails(prevEmails => [...prevEmails, ...lastAction.previousState]);
        break;

      case 'star':
        setEmails(prevEmails =>
          prevEmails.map(email => {
            const prevState = lastAction.previousState.find((state: any) => state.id === email.id);
            return prevState ? { ...email, isStarred: prevState.isStarred } : email;
          })
        );
        break;
    }

    setLastAction(null);
    console.log('Undid last action');
  };

  // Helper function to get AI reply state for specific email
  const getAiReplyState = (emailId: string): AiReplyState => {
    return aiReplyStates.get(emailId) || {
      isGenerating: false,
      showAiReply: false,
      generatedReply: '',
      tone: 'professional'
    };
  };

  // Helper function to update AI reply state for specific email
  const updateAiReplyState = (emailId: string, newState: AiReplyState) => {
    setAiReplyStates(prev => new Map(prev.set(emailId, newState)));
  };

  const generateAiReply = async (email: Email, tone: string = 'professional', replyType: string = 'reply') => {
    const currentState = getAiReplyState(email.id);
    updateAiReplyState(email.id, {
      ...currentState,
      isGenerating: true,
      showAiReply: false,
      replyType: replyType as any
    });

    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate contextual reply based on email content and tone
    const lastMessage = email.messages[email.messages.length - 1];
    let generatedReply = '';

    // Handle different reply types
    if (replyType === 'reply-all') {
      // Get all unique recipients for reply-all
      const allRecipients = new Set([
        lastMessage.senderEmail,
        ...lastMessage.to,
        ...(lastMessage.cc || [])
      ]);
      const recipientList = Array.from(allRecipients).join(', ');

      switch (tone) {
        case 'friendly':
          generatedReply = `Hi everyone,\n\nThanks for the email! I wanted to respond to the group with my thoughts.\n\n${getContextualResponse(email)}\n\nLooking forward to hearing from all of you!\n\nBest regards`;
          break;
        case 'concise':
          generatedReply = `Hi all,\n\n${getContextualResponse(email)}\n\nBest regards`;
          break;
        default: // professional
          generatedReply = `Dear team,\n\nThank you all for your input regarding ${email.subject.toLowerCase()}.\n\n${getContextualResponse(email)}\n\nPlease let me know if anyone has additional questions or concerns.\n\nBest regards`;
      }
    } else {
      // Regular reply generation

    switch (tone) {
        case 'friendly':
          generatedReply = `Hi ${lastMessage.sender.split(' ')[0]},\n\nThanks for your email! I appreciate you reaching out.\n\n${getContextualResponse(email)}\n\nLooking forward to hearing from you!\n\nBest regards`;
          break;
        case 'concise':
          generatedReply = `Hi,\n\n${getContextualResponse(email)}\n\nBest regards`;
          break;
        default: // professional
          generatedReply = `Dear ${lastMessage.sender},\n\nThank you for your email regarding ${email.subject.toLowerCase()}.\n\n${getContextualResponse(email)}\n\nPlease let me know if you have any questions.\n\nBest regards`;
      }
    }

    updateAiReplyState(email.id, {
      ...currentState,
      isGenerating: false,
      showAiReply: true,
      generatedReply,
      tone: tone as any
    });
  };

  const getContextualResponse = (email: Email) => {
    const content = email.messages[email.messages.length - 1].content.toLowerCase();

    if (content.includes('meeting') || content.includes('schedule')) {
      return "I've reviewed the meeting details and will check my calendar. I'll get back to you shortly with my availability.";
    } else if (content.includes('project') || content.includes('timeline')) {
      return "I understand the project requirements and timeline. I'll review the details and provide an update by end of week.";
    } else if (content.includes('review') || content.includes('feedback')) {
      return "Thank you for sharing this information. I'll review the details and provide my feedback within the next 2 business days.";
    } else if (content.includes('urgent') || content.includes('asap')) {
      return "I understand this is urgent. I'll prioritize this and get back to you as soon as possible.";
    } else {
      return "I've received your message and will address the points raised. I'll follow up with you soon.";
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header 
        onMenuToggle={handleMenuToggle} 
        onSearch={handleSearch}
        onFiltersChange={handleFiltersChange}
        filters={filters}
        checkedEmails={checkedEmails}
        onBulkMarkAsRead={handleBulkMarkAsRead}
        onBulkDelete={handleBulkDelete}
        onSelectAll={handleSelectAll}
        onUnselectAll={handleUnselectAll}
        onUndo={handleUndo}
        hasSelection={checkedEmails.size > 0}
      />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          activeItem={activeItem} 
          onItemSelect={handleSectionChange}
          isOpen={sidebarOpen}
          onComposeClick={handleComposeOpen}
          customLabels={customLabels}
          onManageLabels={() => setLabelManagerOpen(true)}
          emailCounts={emailCounts}
        />

        <div className="flex-1 flex min-w-0">
          {isFullPageView ? (
            <ConversationThread 
              email={selectedEmail} 
              onClose={() => setSelectedEmail(null)}
              onBack={handleBackToList}
              isFullPage={true}
              aiReplyState={getAiReplyState(selectedEmail?.id || '')}
              onGenerateAiReply={generateAiReply}
              onAiReplyStateChange={(newState) => selectedEmail?.id && updateAiReplyState(selectedEmail.id, newState)}
              customLabels={customLabels}
              onEmailLabelsChange={handleEmailLabelsChange}
              onCreateLabel={handleCreateLabel}
              onDeleteEmail={handleDeleteEmail}
              onRestoreEmail={handleRestoreEmail}
              activeSection={activeItem}
            />
          ) : (
            <div className="flex flex-1 h-full">
              <div className="flex-shrink-0">
                <EmailList
                  emails={filteredEmails}
                  selectedEmailId={selectedEmail?.id || null}
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
                />
              </div>

              <div className="flex-1">
                <ConversationThread 
                  email={selectedEmail} 
                  onClose={() => setSelectedEmail(null)}
                  isFullPage={false}
                  aiReplyState={getAiReplyState(selectedEmail?.id || '')}
                  onGenerateAiReply={generateAiReply}
                  onAiReplyStateChange={(newState) => selectedEmail?.id && updateAiReplyState(selectedEmail.id, newState)}
                  customLabels={customLabels}
                  onEmailLabelsChange={handleEmailLabelsChange}
                  onCreateLabel={handleCreateLabel}
                  onDeleteEmail={handleDeleteEmail}
                  onRestoreEmail={handleRestoreEmail}
                  activeSection={activeItem}
                  onStarToggle={handleStarToggle}
                />
              </div>
            </div>
          )}
        </div>
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