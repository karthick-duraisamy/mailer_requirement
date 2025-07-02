import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Save, Paperclip, Users, Eye, EyeOff, Upload, Trash2 } from 'lucide-react';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (emailData: ComposeEmailData) => void;
  onSaveDraft: (emailData: ComposeEmailData) => void;
  initialData?: Partial<ComposeEmailData>;
}

export interface ComposeEmailData {
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
  attachments: File[];
}

interface Attachment {
  file: File;
  id: string;
}

const ComposeModal: React.FC<ComposeModalProps> = ({
  isOpen,
  onClose,
  onSend,
  onSaveDraft,
  initialData,
}) => {
  const [to, setTo] = useState<string[]>(initialData?.to || []);
  const [cc, setCc] = useState<string[]>(initialData?.cc || []);
  const [bcc, setBcc] = useState<string[]>(initialData?.bcc || []);
  const [subject, setSubject] = useState(initialData?.subject || '');
  const [body, setBody] = useState(initialData?.body || '');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [toInput, setToInput] = useState('');
  const [ccInput, setCcInput] = useState('');
  const [bccInput, setBccInput] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-save draft functionality
  useEffect(() => {
    if (!isOpen) return;

    const autoSaveInterval = setInterval(() => {
      if (to.length > 0 || subject.trim() || body.trim()) {
        handleSaveDraft(true); // Silent save
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, [to, subject, body, isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (to.length === 0) {
      newErrors.to = 'At least one recipient is required';
    } else {
      const invalidEmails = to.filter(email => !validateEmail(email));
      if (invalidEmails.length > 0) {
        newErrors.to = `Invalid email addresses: ${invalidEmails.join(', ')}`;
      }
    }

    // Validate CC emails
    const invalidCcEmails = cc.filter(email => !validateEmail(email));
    if (invalidCcEmails.length > 0) {
      newErrors.cc = `Invalid CC email addresses: ${invalidCcEmails.join(', ')}`;
    }

    // Validate BCC emails
    const invalidBccEmails = bcc.filter(email => !validateEmail(email));
    if (invalidBccEmails.length > 0) {
      newErrors.bcc = `Invalid BCC email addresses: ${invalidBccEmails.join(', ')}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailInput = (
    value: string,
    currentEmails: string[],
    setEmails: (emails: string[]) => void,
    setInput: (value: string) => void
  ) => {
    if (value.includes(',') || value.includes(';') || value.includes(' ')) {
      const newEmails = value
        .split(/[,;\s]+/)
        .map(email => email.trim())
        .filter(email => email.length > 0);
      
      const validEmails = newEmails.filter(email => validateEmail(email));
      const uniqueEmails = [...new Set([...currentEmails, ...validEmails])];
      
      setEmails(uniqueEmails);
      setInput('');
    } else {
      setInput(value);
    }
  };

  const removeEmail = (emailToRemove: string, emails: string[], setEmails: (emails: string[]) => void) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxSize = 25 * 1024 * 1024; // 25MB limit
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/gif',
      'text/plain',
    ];

    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 25MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} is not allowed.`);
        return false;
      }
      return true;
    });

    const newAttachments = validFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
    }));

    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(att => att.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSend = async () => {
    if (!validateForm()) return;

    setIsSending(true);
    try {
      const emailData: ComposeEmailData = {
        to,
        cc,
        bcc,
        subject,
        body,
        attachments: attachments.map(att => att.file),
      };

      await onSend(emailData);
      handleClose();
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveDraft = async (silent = false) => {
    if (!silent) setIsSavingDraft(true);
    
    try {
      const emailData: ComposeEmailData = {
        to,
        cc,
        bcc,
        subject,
        body,
        attachments: attachments.map(att => att.file),
      };

      await onSaveDraft(emailData);
      if (!silent) {
        // Show success message or close modal
        handleClose();
      }
    } catch (error) {
      console.error('Failed to save draft:', error);
    } finally {
      if (!silent) setIsSavingDraft(false);
    }
  };

  const handleClose = () => {
    const hasContent = to.length > 0 || subject.trim() || body.trim() || attachments.length > 0;
    
    if (hasContent) {
      const shouldSave = window.confirm(
        'You have unsaved changes. Would you like to save this as a draft before closing?'
      );
      if (shouldSave) {
        handleSaveDraft();
        return;
      }
    }
    
    // Reset form
    setTo([]);
    setCc([]);
    setBcc([]);
    setSubject('');
    setBody('');
    setAttachments([]);
    setToInput('');
    setCcInput('');
    setBccInput('');
    setShowCc(false);
    setShowBcc(false);
    setErrors({});
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">New Message</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* To Field */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <label className="text-sm font-medium text-gray-700 w-12">To:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {to.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, to, setTo)}
                          className="ml-1 text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={toInput}
                      onChange={(e) => handleEmailInput(e.target.value, to, setTo, setToInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (toInput.trim() && validateEmail(toInput.trim())) {
                            setTo([...to, toInput.trim()]);
                            setToInput('');
                          }
                        }
                      }}
                      placeholder={to.length === 0 ? "Enter email addresses..." : ""}
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setShowCc(!showCc)}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      showCc ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Cc
                  </button>
                  <button
                    onClick={() => setShowBcc(!showBcc)}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      showBcc ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Bcc
                  </button>
                </div>
              </div>
            </div>

            {/* CC Field */}
            {showCc && (
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 w-12">Cc:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {cc.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, cc, setCc)}
                          className="ml-1 text-gray-600 hover:text-gray-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={ccInput}
                      onChange={(e) => handleEmailInput(e.target.value, cc, setCc, setCcInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (ccInput.trim() && validateEmail(ccInput.trim())) {
                            setCc([...cc, ccInput.trim()]);
                            setCcInput('');
                          }
                        }
                      }}
                      placeholder="Enter CC email addresses..."
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.cc && <p className="text-red-500 text-sm mt-1">{errors.cc}</p>}
                </div>
              </div>
            )}

            {/* BCC Field */}
            {showBcc && (
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 w-12">Bcc:</label>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                    {bcc.map((email, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                      >
                        {email}
                        <button
                          onClick={() => removeEmail(email, bcc, setBcc)}
                          className="ml-1 text-gray-600 hover:text-gray-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={bccInput}
                      onChange={(e) => handleEmailInput(e.target.value, bcc, setBcc, setBccInput)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Tab') {
                          e.preventDefault();
                          if (bccInput.trim() && validateEmail(bccInput.trim())) {
                            setBcc([...bcc, bccInput.trim()]);
                            setBccInput('');
                          }
                        }
                      }}
                      placeholder="Enter BCC email addresses..."
                      className="flex-1 min-w-0 border-none outline-none bg-transparent"
                    />
                  </div>
                  {errors.bcc && <p className="text-red-500 text-sm mt-1">{errors.bcc}</p>}
                </div>
              </div>
            )}

            {/* Subject Field */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 w-12">Subject:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Attachments */}
            {attachments.length > 0 && (
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
                <div className="space-y-2">
                  {attachments.map((attachment) => (
                    <div
                      key={attachment.id}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center space-x-2">
                        <Paperclip className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{attachment.file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({formatFileSize(attachment.file.size)})
                        </span>
                      </div>
                      <button
                        onClick={() => removeAttachment(attachment.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Body Field */}
            <div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Compose your message..."
                rows={12}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Paperclip className="w-4 h-4" />
              <span className="text-sm">Attach</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Discard
            </button>
            <button
              onClick={() => handleSaveDraft()}
              disabled={isSavingDraft}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSavingDraft ? 'Saving...' : 'Save Draft'}</span>
            </button>
            <button
              onClick={handleSend}
              disabled={isSending || to.length === 0}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>{isSending ? 'Sending...' : 'Send'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;