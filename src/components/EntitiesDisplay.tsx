
import React, { useState } from 'react';
import { Info, Calendar, MapPin, User, Building, Clock, Tag } from 'lucide-react';

interface EntitiesDisplayProps {
  entities: Record<string, string>;
}

const EntitiesDisplay: React.FC<EntitiesDisplayProps> = ({ entities }) => {
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  if (!entities || Object.keys(entities).length === 0) {
    return null;
  }

  const getEntityIcon = (key: string) => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.includes('date') || lowerKey.includes('time')) return Calendar;
    if (lowerKey.includes('destination') || lowerKey.includes('origin') || lowerKey.includes('location')) return MapPin;
    if (lowerKey.includes('name') || lowerKey.includes('traveler') || lowerKey.includes('user')) return User;
    if (lowerKey.includes('company') || lowerKey.includes('team') || lowerKey.includes('department')) return Building;
    if (lowerKey.includes('meeting') || lowerKey.includes('event')) return Clock;
    return Tag;
  };

  const getEntityColor = (key: string) => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.includes('date') || lowerKey.includes('time')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (lowerKey.includes('destination') || lowerKey.includes('origin') || lowerKey.includes('location')) return 'bg-green-100 text-green-800 border-green-200';
    if (lowerKey.includes('name') || lowerKey.includes('traveler') || lowerKey.includes('user')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (lowerKey.includes('company') || lowerKey.includes('team') || lowerKey.includes('department')) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (lowerKey.includes('meeting') || lowerKey.includes('event')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const formatEntityKey = (key: string) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleMouseEnter = (key: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 8
    });
    setHoveredEntity(key);
  };

  const handleMouseLeave = () => {
    setHoveredEntity(null);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 mt-2">
        <Info className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Entities:</span>
        <div className="flex flex-wrap gap-2">
          {Object.entries(entities).map(([key, value]) => {
            const IconComponent = getEntityIcon(key);
            const colorClass = getEntityColor(key);
            
            return (
              <button
                key={key}
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border transition-all duration-200 hover:shadow-md hover:scale-105 ${colorClass}`}
                onMouseEnter={(e) => handleMouseEnter(key, e)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleMouseEnter(key, e)}
              >
                <IconComponent className="w-3 h-3 mr-1" />
                {formatEntityKey(key)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tooltip/Popover */}
      {hoveredEntity && (
        <div
          className="fixed z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{formatEntityKey(hoveredEntity)}:</span>
            <span>{entities[hoveredEntity]}</span>
          </div>
          {/* Tooltip arrow */}
          <div
            className="absolute w-2 h-2 bg-gray-900 transform rotate-45"
            style={{
              left: '50%',
              top: '-4px',
              marginLeft: '-4px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EntitiesDisplay;
