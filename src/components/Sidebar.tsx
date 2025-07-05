import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  Star, 
  Clock, 
  Trash2, 
  Settings, 
  Plus, 
  Tag,
  Mail,
  Users,
  Calendar,
  Bell,
  Megaphone,
  HelpCircle,
  Folder,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Label, CustomLabel } from '../types/email';

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
  onComposeClick: () => void;
  customLabels: CustomLabel[];
  onManageLabels: () => void;
  emailCounts: Record<string, number>;
  onClose?: () => void; // Optional close handler for mobile
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeItem, 
  onItemSelect, 
  isOpen, 
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
  onClose
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(true);

  // Close sidebar when clicking on navigation items on mobile
  const handleItemSelect = (item: string) => {
    onItemSelect(item);
    // Auto-close on mobile after selection
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const navigationItems = [
    { id: 'inbox', label: 'All Conversations', icon: Inbox, count: emailCounts.inbox },
    { id: 'starred', label: 'Starred', icon: Star, count: emailCounts.starred },
    { id: 'snoozed', label: 'Snoozed', icon: Clock, count: emailCounts.snoozed },
    { id: 'bin', label: 'Bin', icon: Trash2, count: emailCounts.bin },
  ];

  // Separate system and custom labels
  const systemLabels = customLabels.filter(label => label.isSystem);
  const userLabels = customLabels.filter(label => !label.isSystem);

  const getLabelCount = (labelId: string) => {
    return emailCounts[`label-${labelId}`] || emailCounts[`custom-label-${labelId}`] || 0;
  };

  const handleLabelClick = (labelId: string, isSystem: boolean) => {
    if (isSystem) {
      handleItemSelect(`label-${labelId}`);
    } else {
      handleItemSelect(`custom-label-${labelId}`);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col h-full
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Sidebar Header - Mobile only */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Mail</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Compose Button */}
        <div className="p-4">
          <button 
            onClick={() => {
              onComposeClick();
              // Auto-close on mobile after compose
              if (window.innerWidth < 768 && onClose) {
                onClose();
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <Plus className="w-4 h-4" />
            <span>Compose</span>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2 space-y-1 overflow-y-auto thin-scrollbar">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemSelect(item.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium 
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  ${isActive 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className={`
                    px-2 py-1 text-xs rounded-full flex-shrink-0 min-w-[1.5rem] text-center
                    ${isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                  `}>
                    {item.count > 99 ? '99+' : item.count}
                  </span>
                )}
              </button>
            );
          })}

          {/* Labels Section */}
          {false && (
            <div className="pt-4">
              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={() => setLabelsExpanded(!labelsExpanded)}
                  className="flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-expanded={labelsExpanded}
                  aria-controls="labels-list"
                >
                  <Tag className="w-5 h-5" />
                  <span>Labels</span>
                  {labelsExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={onManageLabels}
                  className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  title="Manage labels"
                  aria-label="Manage labels"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {labelsExpanded && (
                <div id="labels-list" className="ml-4 mt-2 space-y-1">
                  {/* System Labels */}
                  {systemLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => handleLabelClick(label.id, true)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm 
                        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        ${activeItem === `label-${label.id}`
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                      aria-current={activeItem === `label-${label.id}` ? 'page' : undefined}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: label.color }}
                          aria-hidden="true"
                        />
                        <span className="truncate">{label.name}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span className={`
                          px-2 py-1 text-xs rounded-full flex-shrink-0 min-w-[1.5rem] text-center
                          ${activeItem === `label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                        `}>
                          {getLabelCount(label.id) > 99 ? '99+' : getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))}

                  {/* Separator if both system and user labels exist */}
                  {systemLabels.length > 0 && userLabels.length > 0 && (
                    <div className="border-t border-gray-200 my-2" />
                  )}

                  {/* User Labels */}
                  {userLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => handleLabelClick(label.id, false)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm 
                        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        ${activeItem === `custom-label-${label.id}`
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                      aria-current={activeItem === `custom-label-${label.id}` ? 'page' : undefined}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: label.color }}
                          aria-hidden="true"
                        />
                        <span className="truncate">{label.name}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span className={`
                          px-2 py-1 text-xs rounded-full flex-shrink-0 min-w-[1.5rem] text-center
                          ${activeItem === `custom-label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                        `}>
                          {getLabelCount(label.id) > 99 ? '99+' : getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))}

                  {/* Add Label Button */}
                  <button
                    onClick={() => {
                      onManageLabels();
                      // Auto-close on mobile
                      if (window.innerWidth < 768 && onClose) {
                        onClose();
                      }
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add label</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Sidebar Footer - Optional */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            Mail Engine v1.0
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;