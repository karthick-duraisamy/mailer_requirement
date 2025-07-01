import React from 'react';
import { Star, Square, CheckSquare, Inbox, Send, FileText, Clock, Tag } from 'lucide-react';
import { Email } from '../types/email';

interface EmailListProps {
  emails: Email[];
  selectedEmailId: string | null;
  onEmailSelect: (email: Email) => void;
  onStarToggle: (emailId: string) => void;
  onCheckToggle: (emailId: string) => void;
  checkedEmails: Set<string>;
  activeSection: string;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmailId,
  onEmailSelect,
  onStarToggle,
  onCheckToggle,
  checkedEmails,
  activeSection,
}) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } else if (diffInHours < 168) { // Less than a week
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case 'inbox': return 'Inbox';
      case 'sent': return 'Sent';
      case 'drafts': return 'Drafts';
      case 'starred': return 'Starred';
      case 'snoozed': return 'Snoozed';
      case 'label-work': return 'Work';
      case 'label-personal': return 'Personal';
      case 'label-important': return 'Important';
      case 'label-travel': return 'Travel';
      default: return 'Inbox';
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'inbox': return Inbox;
      case 'sent': return Send;
      case 'drafts': return FileText;
      case 'starred': return Star;
      case 'snoozed': return Clock;
      default: return Tag;
    }
  };

  const EmptyState = ({ section }: { section: string }) => {
    const Icon = getSectionIcon(section);
    const title = getSectionTitle(section);
    
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center p-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No emails in {title}</h3>
        <p className="text-gray-500 max-w-sm">
          {section === 'drafts' 
            ? 'Your draft emails will appear here when you save them.'
            : section === 'sent'
            ? 'Emails you send will appear here.'
            : section === 'starred'
            ? 'Star important emails to find them quickly here.'
            : section === 'snoozed'
            ? 'Snoozed emails will appear here when it\'s time to deal with them.'
            : `No emails available in this section yet.`
          }
        </p>
      </div>
    );
  };

  if (emails.length === 0) {
    return (
      <div className="bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">{getSectionTitle(activeSection)}</h2>
        </div>
        <EmptyState section={activeSection} />
      </div>
    );
  }

  return (
    <div className="bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{getSectionTitle(activeSection)}</h2>
        <p className="text-sm text-gray-500 mt-1">{emails.length} email{emails.length !== 1 ? 's' : ''}</p>
      </div>
      
      <div className="divide-y divide-gray-100">
        {emails.map((email) => {
          const isSelected = selectedEmailId === email.id;
          const isChecked = checkedEmails.has(email.id);
          
          return (
            <div
              key={email.id}
              className={`
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${isSelected ? 'bg-blue-50 border-r-2 border-blue-500' : ''}
                ${!email.isRead ? 'bg-blue-25' : ''}
              `}
              onClick={() => onEmailSelect(email)}
            >
              <div className="flex items-start space-x-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCheckToggle(email.id);
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
                    onStarToggle(email.id);
                  }}
                  className="mt-1 transition-colors"
                >
                  <Star 
                    className={`w-4 h-4 ${
                      email.isStarred 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-gray-400 hover:text-yellow-500'
                    }`} 
                  />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`
                      text-sm truncate
                      ${!email.isRead ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}
                    `}>
                      {email.sender}
                    </p>
                    <p className="text-xs text-gray-500 ml-2 flex-shrink-0">
                      {formatTime(email.timestamp)}
                    </p>
                  </div>
                  
                  <p className={`
                    text-sm mt-1 truncate
                    ${!email.isRead ? 'font-medium text-gray-900' : 'text-gray-600'}
                  `}>
                    {email.subject}
                  </p>
                  
                  <p className="text-sm text-gray-500 mt-1 truncate">
                    {email.preview}
                  </p>
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