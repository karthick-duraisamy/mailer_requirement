import React, { useState } from 'react';
import { Reply, ReplyAll, Forward, MoreHorizontal, Star, Archive, ChevronDown, ChevronUp } from 'lucide-react';
import { Email } from '../types/email';

interface ConversationThreadProps {
  email: Email | null;
  onClose: () => void;
}

const ConversationThread: React.FC<ConversationThreadProps> = ({ email, onClose }) => {
  const [replyText, setReplyText] = useState('');
  const [showReply, setShowReply] = useState(false);
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(new Set());

  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-gray-400">📧</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select an email</h3>
          <p className="text-gray-500">Choose an email from the list to view the conversation</p>
        </div>
      </div>
    );
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      // Handle reply logic here
      setReplyText('');
      setShowReply(false);
    }
  };

  const toggleMessageExpansion = (messageId: string) => {
    setExpandedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  // Sort messages chronologically (oldest first)
  const sortedMessages = [...email.messages].sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{email.subject}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {email.messages.length} message{email.messages.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Star className={`w-5 h-5 ${email.isStarred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {sortedMessages.map((message, index) => {
            const isExpanded = expandedMessages.has(message.id) || index === sortedMessages.length - 1;
            const isLastMessage = index === sortedMessages.length - 1;
            
            return (
              <div key={message.id} className="border-b border-gray-100 last:border-b-0">
                <div className="p-6">
                  {/* Message Header */}
                  <div 
                    className={`cursor-pointer ${!isLastMessage ? 'hover:bg-gray-50 -m-2 p-2 rounded-lg' : ''}`}
                    onClick={() => !isLastMessage && toggleMessageExpansion(message.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold text-sm">
                            {message.sender.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-semibold text-gray-900">{message.sender}</p>
                            {!isLastMessage && (
                              <button className="text-gray-400 hover:text-gray-600">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{formatTimestamp(message.timestamp)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Metadata - Always visible for expanded messages */}
                    {isExpanded && (
                      <div className="mb-4 bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">From:</span>
                            <p className="text-gray-600 mt-1">{message.sender} &lt;{message.senderEmail}&gt;</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Subject:</span>
                            <p className="text-gray-600 mt-1">{message.subject}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">To:</span>
                            <p className="text-gray-600 mt-1">{message.to.join(', ')}</p>
                          </div>
                          
                          {message.cc && message.cc.length > 0 && (
                            <div>
                              <span className="font-medium text-gray-700">CC:</span>
                              <p className="text-gray-600 mt-1">{message.cc.join(', ')}</p>
                            </div>
                          )}
                          
                          {message.bcc && message.bcc.length > 0 && (
                            <div>
                              <span className="font-medium text-gray-700">BCC:</span>
                              <p className="text-gray-600 mt-1">{message.bcc.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Message Content */}
                  {isExpanded && (
                    <>
                      <div className="prose max-w-none mb-6">
                        <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                      
                      {/* Action Buttons - Only show for the last message */}
                      {isLastMessage && (
                        <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                          <button 
                            onClick={() => setShowReply(!showReply)}
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          >
                            <Reply className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                            <ReplyAll className="w-4 h-4" />
                            <span>Reply All</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                            <Forward className="w-4 h-4" />
                            <span>Forward</span>
                          </button>
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Collapsed Message Preview */}
                  {!isExpanded && !isLastMessage && (
                    <div className="text-sm text-gray-500 truncate">
                      {message.content.substring(0, 100)}...
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reply Box */}
      {showReply && (
        <div className="border-t border-gray-200 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reply</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">To:</span> {email.senderEmail}</p>
                <p><span className="font-medium">Subject:</span> Re: {email.subject}</p>
              </div>
            </div>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write your reply..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setShowReply(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSendReply}
                  disabled={!replyText.trim()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationThread;