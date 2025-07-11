import React, { useEffect, useRef, useState } from "react";
import {
  Inbox,
  Star,
  Send,
  Trash2,
  Tag,
  ChevronDown,
  ChevronRight,
  Settings,
  UserCircle,
} from "lucide-react";
import { CustomLabel } from "../types/email";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSettings } from "../store/filterSlice";
import SignatureSetup from "./SignatureSetup";
import { setFilterFilled } from "../store/alignmentSlice";
import { useLazyGetLabelListQuery, useLazyGetMailListResponseQuery } from "../service/inboxService";

interface SidebarProps {
  activeItem: string;
  onItemSelect: (item: string) => void;
  isOpen: boolean;
  onComposeClick: () => void;
  customLabels: CustomLabel[];
  onManageLabels: () => void;
  emailCounts: Record<string, number>;
  onSearch: (query: string) => void;
  searchQuery: string;
  setEmails: Function;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  onItemSelect,
  isOpen,
  onComposeClick,
  customLabels,
  onManageLabels,
  emailCounts,
  onSearch,
  searchQuery,
  setEmails
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [selectedTab, setSelectedTab] = useState<string>('');
  const [getLabelList, getLabelListResponse] = useLazyGetLabelListQuery();
  const [countsSection, setCountsSection] = useState<any>();
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedIntentLabels, setSelectedIntentLabels] = useState<string[]>([]);
  const [selectedCorporateLabels, setSelectedCorporateLabels] = useState<string[]>([]);
  const [intentLableOptions, setIntentLableOptions] = useState<any>();
  const [corporateLableOptions, setCorporateLableOptions] = useState<any>();


  const navigationItems = [
    {
      id: "inbox",
      label: "All Conversations",
      icon: Inbox,
      count: emailCounts.inbox,
    },
    { id: "starred", label: "Starred", icon: Star, count: emailCounts.starred },
    {
      id: "sent",
      label: "Sent",
      icon: Send,
      count: emailCounts.sent,
    },
    { id: "bin", label: "Bin", icon: Trash2, count: emailCounts.bin },
  ];

  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isAllConversation, setIsAllConversation] = useState(false);


  const intentLabels = customLabels.filter(
    (label) => label.category === "intent"
  );

  const corporateLabels = customLabels.filter(
    (label) => label.category === "corporate"
  );

  const getLabelCount = (labelId: string) => {
    return (
      emailCounts[`label-${labelId}`] ||
      emailCounts[`custom-label-${labelId}`] ||
      0
    );
  };

  const [filters, setFilters] = useState<FilterOptions>({
    readStatus: "all",
    starred: false,
    hasAttachment: false,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all",
  });

  // const handleLabelClick = (labelId: string, isSystem: boolean) => {
  //   if (isSystem) {
  //     onItemSelect(`label-${labelId}`);
  //   } else {
  //     onItemSelect(`custom-label-${labelId}`);
  //   }
  // };

  const handleLabelClick = (labelId: string, category: 'intent' | 'corporate') => {
    console.log("Clicked Label:", labelId);
    if (category === 'intent') {
      setSelectedIntentLabels((prev) =>
        prev.includes(labelId) ? prev.filter((key) => key !== labelId) : [...prev, labelId]
      );
      getMailList({labels:labelId, setting:29});
    } else {
      setSelectedCorporateLabels((prev) =>
        prev.includes(labelId) ? prev.filter((key) => key !== labelId) : [...prev, labelId]
      );
      getMailList({corporate_labels:labelId, setting:29});
    }

    // if (isSystem) {
    //   onItemSelect(`label-${labelId}`);
    // } else {
    //   onItemSelect(`custom-label-${labelId}`);
    // }
  };

  useEffect(() => {
    console.log("Intent Selected:", selectedIntentLabels);
  }, [selectedIntentLabels]);

  useEffect(() => {
    console.log("Corporate Selected:", selectedCorporateLabels);
  }, [selectedCorporateLabels]);

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    dispatch(
      setFilterSettings({
        is_starred: newFilters?.starred,
        is_read: newFilters.readStatus === 'all' ? undefined : newFilters.readStatus === 'read' ? true : false,
        has_attachment: newFilters?.hasAttachment,
      })
    );
    // dispatch(setInputStatus(true));
  };

  const handleClearFilters = () => {
    setFilters({
      readStatus: "all",
      starred: false,
      hasAttachment: false,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all",
    });
    dispatch(
      setFilterSettings({
        is_starred: undefined,
        is_read: undefined,
        has_attachment: undefined,
      })
    );
  };

  // Close search panel when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isSearchOpen && !target.closest(".search-panel-container")) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  // Inside your component
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownCorpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIntentOpen(false);
      }
      if (dropdownCorpRef.current && !dropdownCorpRef.current.contains(event.target as Node))
        setIsCorporateOpen(false);
    };

    if (isIntentOpen || isCorporateOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isIntentOpen, isCorporateOpen]);

  const handleOpenSignatureSetup = () => {
    setShowSignatureSetup(true);
    setShowSettingsDropdown(false);
  };

  useEffect(() => {
    getLabelList({});
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettingsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    getLabelList({});
  }, [selectedTab])

  useEffect(() => {
    if (getLabelListResponse?.isSuccess) {
      const intentLables = (getLabelListResponse as any)?.data?.response?.data.labels;
      const corporateLabels = (getLabelListResponse as any)?.data?.response?.data.corporate_labels;
      setIntentLableOptions(Object.entries(intentLables).map(([key]) => ({
        value: key,
        count: intentLables[key]?.total
      })));
      setCorporateLableOptions(Object.entries(corporateLabels).map(([key]) => ({
        value: key,
        count: corporateLabels[key]?.total
      })));
      setCountsSection((getLabelListResponse as any)?.data?.response?.data);
    }
  }, [getLabelListResponse]);

  useEffect(() => {
    getMailList({ page_size: 20 });
  }, [isAllConversation])

  useEffect(() => {
    if (selectedTab === 'sent') {
      dispatch(setFilterSettings({ folder: selectedTab.toUpperCase() }));
      dispatch(setFilterSettings({ is_starred: undefined, is_deleted: undefined }));
      dispatch(setFilterFilled(true));
    }
    if (selectedTab === 'starred' || selectedTab === 'bin') {
      dispatch(setFilterSettings({
        [selectedTab === 'starred' ? 'is_starred' : 'is_deleted']: true
      }));
      dispatch(setFilterSettings({ folder: undefined, [selectedTab === 'starred' ? 'is_deleted' : 'is_starred']: undefined }));
      dispatch(setFilterFilled(true));
    }
    if (selectedTab === 'inbox') {
      getMailList({ page_size: 20 });
      dispatch(setFilterFilled(false));
      dispatch(setFilterSettings({ folder: undefined }));
      setIsAllConversation(true);
    }
  }, [selectedTab]);

  useEffect(() => {
    if (getMailListResponse?.isSuccess) {
      const staticList = (getMailListResponse as any)?.data?.response?.data.results;
      console.log(staticList, "static list");
      setEmails(
          staticList.map((email: any) => ({
            ...email,
            intentLabel: email.labels || "new",
          }))
        );
    }
  }, [getMailListResponse]);

  useEffect(() => {
    // if (!isOpen) {
      console.log(intentLableOptions, "rag");
    // }
  }, [intentLableOptions])  

  return (
    <>
      {/* Mobile overlay for labels dropdown */}
      {labelsExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setLabelsExpanded(false)}
        />
      )}

      {/* Overlay for search panel */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Search box and Main navigation items */}
          <div className="flex items-center space-x-1">

            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onItemSelect(item.id);
                    setSelectedTab(item.id)
                  }}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {countsSection && (() => {
                    const count =
                      item?.id === 'inbox'
                        ? countsSection?.total_unread
                        : item?.id === 'starred'
                          ? countsSection?.total_starred
                          : item?.id === 'sent'
                            ? countsSection?.total_sent
                            : countsSection?.total_deleted;

                    return count ? (
                      <span
                        className={`
                            px-2 py-1 text-xs rounded-full
                            ${isActive
                                                ? "bg-blue-200 text-blue-800"
                                                : "bg-gray-200 text-gray-600"
                                              }
                          `}
                      >
                        {count}
                      </span>
                    ) : null;
                  })()}
                </button>
              );
            })}

            {/* Intent Labels Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsIntentOpen(!isIntentOpen);
                  setIsCorporateOpen(false); // close other
                }}
                className={`
                      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${isIntentOpen
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                  }
                    `}
              >
                <Tag className="w-4 h-4" />
                <span className="hidden sm:inline">Intent labels</span>
                {isIntentOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isIntentOpen && (
                <div ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                  {/* {intentLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsIntentOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
            ${activeItem === `custom-label-${label.id}`
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                    >
                      <div className="w-full flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: label.color }}
                        />
                        <span>{label.name}</span>
                        <span className="cls-indent-count" style={{ marginLeft: "auto" }}>{label.count}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span
                          className={`px-2 py-1 text-xs rounded-full
              ${activeItem === `custom-label-${label.id}`
                              ? "bg-blue-200 text-blue-800"
                              : "bg-gray-200 text-gray-600"
                            }`}
                        >
                          {getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))} */}
                  {intentLableOptions.map((label: any) => {
                    // const isSelected = selectedLabels.includes(label.id);
                    const isSelected = selectedIntentLabels.includes(label.value);
                    // const isSystem = label.isSystem ?? false;

                    return (
                      <button
                        key={label.value}
                        type="button"
                        onClick={() => {
                          handleLabelClick(label.value, "intent");
                          // setIsIntentOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
                          ${isSelected ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                        <div className="w-full flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleLabelClick(label.value, "intent");
                            }}
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />

                          {/* <div className="w-3 h-3 rounded-full" style={{ backgroundColor: label.color }} /> */}
                          <span>{label.value}</span>

                          <span className="cls-indent-count" style={{ marginLeft: "auto" }}>{label.count}</span>
                        </div>

                        {getLabelCount(label.value) > 0 && (
                          <span className={`px-2 py-1 text-xs rounded-full
                            ${isSelected ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}`}>
                            {getLabelCount(label.value)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Corporate Labels Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCorporateOpen(!isCorporateOpen);
                  setIsIntentOpen(false); // close other
                }}
                className={`
      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${isCorporateOpen
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }
    `}
              >
                <Tag className="w-4 h-4" />
                <span className="hidden sm:inline">Corporate labels</span>
                {isCorporateOpen ? (
                  <ChevronDown className="w-3 h-3" />
                ) : (
                  <ChevronRight className="w-3 h-3" />
                )}
              </button>

              {isCorporateOpen && (
                <div ref={dropdownCorpRef}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto">
                  {/* {corporateLabels.map((label) => (
                    <button
                      key={label.id}
                      onClick={() => {
                        handleLabelClick(label.id, false);
                        setIsCorporateOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
            ${activeItem === `custom-label-${label.id}`
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                    >
                      <div className="w-full flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: label.color }}
                        />
                        <span>{label.name}</span>
                        <span className="cls-indent-count" style={{ marginLeft: "auto" }}>{label.count}</span>
                      </div>
                      {getLabelCount(label.id) > 0 && (
                        <span
                          className={`px-2 py-1 text-xs rounded-full
              ${activeItem === `custom-label-${label.id}`
                              ? "bg-blue-200 text-blue-800"
                              : "bg-gray-200 text-gray-600"
                            }`}
                        >
                          {getLabelCount(label.id)}
                        </span>
                      )}
                    </button>
                  ))} */}
                  {corporateLableOptions.map((label: any) => {
                    // const isSelected = selectedLabels.includes(label.id); // or use selectedCorporateLabels if separate
                    const isSelected = selectedCorporateLabels.includes(label.value);
                    // const isSystem = label.isSystem ?? false;

                    return (
                      <button
                        key={label.value}
                        type="button"
                        onClick={() => {
                          handleLabelClick(label.value, "corporate");
                          // setIsCorporateOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors
                          ${isSelected ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                      >
                        <div className="w-full flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleLabelClick(label.value, "corporate");
                            }}
                            className="form-checkbox h-4 w-4 text-blue-600"
                          />

                          {/* <div className="w-3 h-3 rounded-full" style={{ backgroundColor: label.color }} /> */}
                          <span>{label.value}</span>

                          <span className="cls-indent-count" style={{ marginLeft: "auto" }}>{label.count}</span>
                        </div>

                        {getLabelCount(label.value) > 0 && (
                          <span className={`px-2 py-1 text-xs rounded-full
                            ${isSelected ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}`}>
                            {getLabelCount(label.value)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            {/* Filters Button */}
            {/* <div className="relative">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div> */}
            <EmailFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />

            {/* Settings Button */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>

              {showSettingsDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Settings</h3>
              </div>

              <button 
                onClick={handleOpenNotificationPreferences}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Bell className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Notification Preferences</span>
              </button> */}

                  <button
                    onClick={handleOpenSignatureSetup}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
                  >
                    <UserCircle className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Signature Setup</span>
                  </button>

                  {/* <button 
                onClick={handleOpenEmailDisplayOptions}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Email Display Options</span>
              </button>

              <button 
                onClick={handleOpenGeneralSettings}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <Settings className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">General Settings</span>
              </button> */}
                </div>
              )}
            </div>

            {/* Compose Button */}
            <button
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-blue-700 bg-blue-600 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onComposeClick}
              aria-label="Compose new email"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="font-medium hidden sm:inline whitespace-nowrap">
                Compose
              </span>
            </button>

            {/* Intent Labels Dropdown */}
          </div>
        </div>
      </nav>

      <SignatureSetup
        isOpen={showSignatureSetup}
        onClose={() => setShowSignatureSetup(false)}
      />
    </>
  );
};

export default Sidebar;
