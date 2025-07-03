
import React from 'react';
import { X, Database } from 'lucide-react';

interface Entity {
  id: string;
  ayprcId: string;
  pnr: string;
  bookingMode: string;
}

interface EntitiesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const EntitiesPanel: React.FC<EntitiesPanelProps> = ({ isOpen, onClose }) => {
  // Mock entities data - in a real app, this would come from props or API
  const entities: Entity[] = [
    {
      id: '1',
      ayprcId: 'AYP1243',
      pnr: 'ANHP87',
      bookingMode: 'AIR'
    },
    {
      id: '2',
      ayprcId: 'AYP1244',
      pnr: 'BNHP88',
      bookingMode: 'RAIL'
    },
    {
      id: '3',
      ayprcId: 'AYP1245',
      pnr: 'CNHP89',
      bookingMode: 'BUS'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white border-l border-gray-200 shadow-xl flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Database className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Entities</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {entities.map((entity) => (
          <div
            key={entity.id}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">AYPRC ID:</span>
                <span className="text-sm font-semibold text-gray-900">{entity.ayprcId}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">PNR:</span>
                <span className="text-sm font-semibold text-gray-900">{entity.pnr}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">BOOKING MODE:</span>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                  entity.bookingMode === 'AIR' ? 'bg-blue-100 text-blue-800' :
                  entity.bookingMode === 'RAIL' ? 'bg-green-100 text-green-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {entity.bookingMode}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          {entities.length} entities loaded
        </p>
      </div>
    </div>
  );
};

export default EntitiesPanel;
