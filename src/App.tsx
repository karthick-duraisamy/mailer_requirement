import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import ConversationThread from './components/ConversationThread';
import { Email } from './types/email';
import { mockEmails } from './data/mockEmails';

function App() {
  const [activeItem, setActiveItem] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [checkedEmails, setCheckedEmails] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // Filter emails based on active section and search query
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

    return filtered;
  }, [emails, activeItem, searchQuery]);

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
      <Header onMenuToggle={handleMenuToggle} onSearch={handleSearch} />
      
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