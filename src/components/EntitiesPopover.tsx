
import React, { useState, useRef, useEffect } from 'react';
import { X, Plane, Ticket, FileText, XCircle, CheckCircle } from 'lucide-react';

interface EntitiesPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const EntitiesPopover: React.FC<EntitiesPopoverProps> = ({
  isOpen,
  onClose,
  triggerRef,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      
      // Position the popover below and aligned to the left of the trigger
      const top = triggerRect.bottom + 8;
      const left = triggerRect.left;
      
      // Ensure popover doesn't go off screen
      const maxLeft = window.innerWidth - popoverRect.width - 16;
      const adjustedLeft = Math.min(left, maxLeft);
      
      setPosition({ top, left: adjustedLeft });
    }
  }, [isOpen, triggerRef]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" />
      
      {/* Popover */}
      <div
        ref={popoverRef}
        className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        {/* Arrow pointing up */}
        <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Observation Overview
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Airline:</span>
            </div>
            <span className="text-sm text-gray-900">Delta Airlines</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Ticket className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Ticket Type:</span>
            </div>
            <span className="text-sm text-gray-900">Round Trip</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">PNR:</span>
            </div>
            <span className="text-sm text-gray-900 font-mono">ABC123XYZ</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Cancellation:</span>
            </div>
            <span className="text-sm text-gray-900">Allowed</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Status:</span>
            </div>
            <span className="text-sm text-green-800 bg-green-100 px-2 py-1 rounded-full">Confirmed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntitiesPopover;
