import React, { useState, useRef, useEffect } from "react";
import { X, Plane, Ticket, FileText, XCircle, CheckCircle } from "lucide-react";

interface EntitiesPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
  entitiesInfo?: any[];
}

const EntitiesPopover: React.FC<EntitiesPopoverProps> = ({
  isOpen,
  onClose,
  triggerRef,
  entitiesInfo,
}) => {
  console.log("Entities Info:", entitiesInfo);
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
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const getEntityIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case "ticket":
      case "pnr":
        return <Ticket className="w-4 h-4 text-green-600" />;
      case "travel":
      case "airline":
      case "train":
        return <Plane className="w-4 h-4 text-blue-600" />;
      case "date":
        return <FileText className="w-4 h-4 text-purple-600" />;
      case "status":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "cancellation":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

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
        <div className="absolute -top-2 left-9 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Entities
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
          {entitiesInfo &&
            Object.entries(entitiesInfo).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div className="relative group max-w-[120px]">
                  <span className="text-sm font-medium text-gray-700 capitalize whitespace-nowrap overflow-hidden text-ellipsis block pr-4 cursor-default">
                    {key.replace(/_/g, " ")}
                    <span className="absolute right-0 bg-white">{":"}</span>
                  </span>
                  <div className="absolute z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 shadow-lg max-w-xs w-max break-words top-full mt-1">
                    {key.replace(/_/g, " ")}:
                  </div>
                </div>
                <div className="relative group max-w-[150px] text-right">
                  <span className="text-sm text-gray-900 font-mono truncate block cursor-default">
                    {String(value)}
                  </span>
                  <div className="absolute z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 shadow-lg max-w-xs w-max break-words right-0 top-full mt-1">
                    {String(value)}
                  </div>
                </div>
              </div>
            ))}
          {(Object.keys(entitiesInfo ?? {}).length === undefined || Object.keys(entitiesInfo ?? {}).length === 0) && <p>No entities is mapped for this conversion </p>}
        </div>
      </div>
    </>
  );
};

export default EntitiesPopover;
