import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import ConversationThread from './components/ConversationThread';
import { Email } from './types/email';
import { mockEmails } from './data/mockEmails';
import { FilterOptions } from './components/EmailFilters';

function App() {
  const [activeItem, setActiveItem] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(mockEmails);
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
        // Fallback to content-based filtering for emails without intent labels
        const content = `${email.subject} ${email.preview}`.toLowerCase();
        switch (filters.intent) {
          case 'meetings':
            return content.includes('meeting') || content.includes('schedule') || content.includes('appointment');
          case 'notifications':
            return content.includes('notification') || content.includes('system') || content.includes('alert');
          case 'campaigns':
            return content.includes('newsletter') || content.includes('campaign') || content.includes('marketing');
          case 'support':
            return content.includes('support') || content.includes('help') || content.includes('issue');
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

  // Filter emails based on active section, search query, and filters
  const filteredEmails = useMemo(() => {
    let filtered = emails;

    // Filter by section
    switch (activeItem) {
      case 'inbox':
        // For demo purposes, show all emails in inbox
        break;
      case 'sent':
        // Filter sent emails (for demo, we'll show emails from current user)
        filtered = emails.filter(email => 
          email.senderEmail === 'john.doe@company.com' || 
          email.sender === 'John Doe'
        );
        break;
      case 'drafts':
        // For demo, show empty drafts
        filtered = [];
        break;
      case 'starred':
        filtered = emails.filter(email => email.isStarred);
        break;
      case 'snoozed':
        // For demo, show empty snoozed
        filtered = [];
        break;
      case 'label-work':
        filtered = emails.filter(email => 
          email.subject.toLowerCase().includes('project') ||
          email.subject.toLowerCase().includes('meeting') ||
          email.subject.toLowerCase().includes('campaign') ||
          email.senderEmail.includes('company.com') ||
          email.senderEmail.includes('techcorp.com')
        );
        break;
      case 'label-personal':
        filtered = emails.filter(email => 
          email.subject.toLowerCase().includes('welcome') ||
          email.senderEmail.includes('startup.io')
        );
        break;
      case 'label-important':
        filtered = emails.filter(email => 
          email.subject.toLowerCase().includes('urgent') ||
          email.subject.toLowerCase().includes('important') ||
          email.isStarred
        );
        break;
      case 'label-travel':
        // For demo, show empty travel
        filtered = [];
        break;
      default:
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
        )
      );
    }

    // Apply advanced filters
    filtered = applyFilters(filtered);

    return filtered;
  }, [emails, activeItem, searchQuery, filters]);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    // Mark email as read when selected
    setEmails(prevEmails => 
      prevEmails.map(e => 
        e.id === email.id ? { ...e, isRead: true } : e
      )
    );
  };

  const handleStarToggle = (emailId: string) => {
    setEmails(prevEmails =>
      prevEmails.map(email =>
        email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
      )
    );
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

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header 
        onMenuToggle={handleMenuToggle} 
        onSearch={handleSearch}
        onFiltersChange={setFilters}
        filters={filters}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          activeItem={activeItem} 
          onItemSelect={handleSectionChange}
          isOpen={sidebarOpen}
        />
        
        <div className="flex-1 flex min-w-0">
          <div className="w-80 flex-shrink-0">
            <EmailList
              emails={filteredEmails}
              selectedEmailId={selectedEmail?.id || null}
              onEmailSelect={handleEmailSelect}
              onStarToggle={handleStarToggle}
              onCheckToggle={handleCheckToggle}
              checkedEmails={checkedEmails}
              activeSection={activeItem}
            />
          </div>
          
          <ConversationThread
            email={selectedEmail}
            onClose={() => setSelectedEmail(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;