import React, { useState } from 'react';
import { 
  Inbox, 
  Send, 
  FileText, 
  Star, 
  Clock, 
  ChevronDown, 
  ChevronRight,
  Plus,
  Tag
} from 'lucide-react';
import { Label } from '../types/email';

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemSelect, isOpen }) => {
  const [labelsExpanded, setLabelsExpanded] = useState(true);

  const navigationItems = [
    { id: 'inbox', label: 'Inbox', icon: Inbox, count: 12 },
    { id: 'sent', label: 'Sent', icon: Send },
    { id: 'drafts', label: 'Drafts', icon: FileText, count: 3 },
    { id: 'starred', label: 'Starred', icon: Star },
    { id: 'snoozed', label: 'Snoozed', icon: Clock, count: 1 },
  ];

  const labels: Label[] = [
    { id: 'work', name: 'Work', color: 'bg-blue-500', count: 8 },
    { id: 'personal', name: 'Personal', color: 'bg-green-500', count: 5 },
    { id: 'important', name: 'Important', color: 'bg-red-500', count: 2 },
    { id: 'travel', name: 'Travel', color: 'bg-purple-500' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => {}}
        />
      )}
      
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Compose</span>
            </button>
          </div>

          <nav className="flex-1 px-2 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onItemSelect(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${isActive ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                    `}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => setLabelsExpanded(!labelsExpanded)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Tag className="w-5 h-5" />
                  <span>Labels</span>
                </div>
                {labelsExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {labelsExpanded && (
                <div className="ml-4 mt-2 space-y-1">
                  {labels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => onItemSelect(`label-${label.id}`)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                        ${activeItem === `label-${label.id}`
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${label.color}`}></div>
                        <span>{label.name}</span>
                      </div>
                      {label.count && (
                        <span className={`
                          px-2 py-1 text-xs rounded-full
                          ${activeItem === `label-${label.id}` ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'}
                        `}>
                          {label.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;