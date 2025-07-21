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
  Scroll,
} from "lucide-react";
import { CustomLabel } from "../types/email";
import EmailFilters, { FilterOptions } from "./EmailFilters";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSettings } from "../store/filterSlice";
import SignatureSetup from "./SignatureSetup";
import { setFilterFilled, setInputFilled, setSelectedTabStatus, setScrollTop } from "../store/alignmentSlice";
import {
  useLazyGetLabelListQuery,
  useLazyGetMailListResponseQuery,
} from "../service/inboxService";
import { Empty } from 'antd';
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
  setEmails,
}) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const [showSignatureSetup, setShowSignatureSetup] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [getMailList, getMailListResponse] = useLazyGetMailListResponseQuery();
  const [selectedTab, setSelectedTab] = useState<string>("inbox");
  const [getLabelList, getLabelListResponse] = useLazyGetLabelListQuery();
  const [countsSection, setCountsSection] = useState<any>();
  const [selectedIntentLabels, setSelectedIntentLabels] = useState<string[]>(
    []
  );
  const [selectedCorporateLabels, setSelectedCorporateLabels] = useState<
    string[]
  >([]);
  const [intentLableOptions, setIntentLableOptions] = useState<any>();
  const [corporateLableOptions, setCorporateLableOptions] = useState<any>();
  const [iscorporateLabels, setIsCorporateLabels] = useState<any>();
  const [isIntentLabels, setIsIntentLabels] = useState<any>();
  const [searchCorporateLabel, setSearchCorporateLabel] = useState("");
  const [searchIntentLabel, setSearchIntentLabel] = useState("");

  const navigationItems = [
    {
      id: "inbox",
      label: "Inbox",
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

  const handleLabelClick = (
    labelId: string,
    category: "intent" | "corporate"
  ) => {
    console.log("Clicked Label:", labelId);
    if (category === "intent") {
      setSelectedIntentLabels((prev) =>
        prev.includes(labelId)
          ? prev.filter((key) => key !== labelId)
          : [...prev, labelId]
      );
    } else {
      setSelectedCorporateLabels((prev) =>
        prev.includes(labelId)
          ? prev.filter((key) => key !== labelId)
          : [...prev, labelId]
      );
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
        page: 1,
        is_starred: newFilters?.starred,
        is_read:
          newFilters.readStatus === "all"
            ? undefined
            : newFilters.readStatus === "read"
              ? true
              : false,
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsIntentOpen(false);
      }
      if (
        dropdownCorpRef.current &&
        !dropdownCorpRef.current.contains(event.target as Node)
      )
        setIsCorporateOpen(false);
    };

    if (isIntentOpen || isCorporateOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
  }, [selectedTab]);

  useEffect(() => {
    if (getLabelListResponse?.isSuccess) {
      const intentLables = (getLabelListResponse as any)?.data?.response?.data.labels;
      const hasLableData = Object.values(intentLables).some((item: any) => item.total > 0);
      setIsIntentLabels(hasLableData)
      const corporateLabels = (getLabelListResponse as any)?.data?.response?.data.corporate_labels;
      const hasEmailData = Object.values(corporateLabels).some((item: any) => item.total > 0);
      setIsCorporateLabels(hasEmailData)
      generateSortedLabelOptions(intentLables, setIntentLableOptions);
      generateSortedLabelOptions(corporateLabels, setCorporateLableOptions);
      setCountsSection((getLabelListResponse as any)?.data?.response?.data);
    }
  }, [getLabelListResponse]);

  // useEffect(() => {
  //   getMailList({ page_size: 20, folder: "inbox" });
  // }, [isAllConversation]);

  // Intent / Corporate labels sorting based on unread count.
  const generateSortedLabelOptions = (
    data: Record<string, { unread: number; total: number }>,
    filterSetter: (val: any[]) => void
  ) => {
    const sorted = Object.entries(data)
      .sort(([, a], [, b]) => (b?.unread || 0) - (a?.unread || 0))
      .map(([key, val]) => ({
        value: key,
        count: (
          <>
            <strong>{val?.unread}</strong> / {val?.total}
          </>
        )
      }));

    filterSetter(sorted);
  };

  useEffect(() => {
    let filterSettings: any = {};

    if (selectedTab === "sent") {
      filterSettings = {
        page: undefined,
        folder: "SENT",
        is_starred: undefined,
        is_deleted: undefined,
        search: undefined
      };
      dispatch(setSelectedTabStatus("sent"));
      dispatch(setInputFilled(''));
    } else if (selectedTab === "starred") {
      filterSettings = {
        page: undefined,
        is_starred: true,
        is_deleted: undefined,
        folder: undefined,
        search: undefined
      };
      dispatch(setSelectedTabStatus("starred"));
      dispatch(setInputFilled(''));
    } else if (selectedTab === "bin") {
      filterSettings = {
        page: undefined,
        is_deleted: true,
        is_starred: undefined,
        folder: undefined,
        search: undefined
      };
      dispatch(setSelectedTabStatus("bin"));
      dispatch(setInputFilled(''));
    } else if (selectedTab === "inbox") {
      filterSettings = {
        page: undefined,
        folder: "inbox",
        is_starred: undefined,
        is_deleted: undefined,
        search: undefined
      };
      dispatch(setSelectedTabStatus("inbox"));
      dispatch(setInputFilled(''));
    }

    dispatch(setFilterSettings(filterSettings));
    dispatch(setFilterFilled(true));
    dispatch(setScrollTop(true));
  }, [selectedTab]);


  // useEffect(() => {
  //   if (getMailListResponse?.isSuccess) {
  //     const staticList = (getMailListResponse as any)?.data?.response?.data
  //       .results;
  //     console.log(staticList, "static list");
  //     setEmails(
  //       staticList.map((email: any) => ({
  //         ...email,
  //         intentLabel: email.labels || "new",
  //       }))
  //     );
  //   }
  // }, [getMailListResponse]);

  useEffect(() => {
    // if (!isOpen) {
    console.log(intentLableOptions, "rag");
    // }
  }, [intentLableOptions])



  // Intent Search All and auto Complete
  const filteredIntentOptions = (intentLableOptions ?? []).filter((label: any) =>
    label.value.toLowerCase().includes(searchIntentLabel.toLowerCase())
  );

  const isSearchActive = searchIntentLabel.trim().length > 0;
  const handleSelectAllIntent = () => {
    const filteredValues = (filteredIntentOptions ?? []).map((label: any) => label.value);

    if (isSearchActive) {
      // Only select filtered values
      const allSelected = filteredValues.every((val: any) => selectedIntentLabels.includes(val));
      if (allSelected) {
        setSelectedIntentLabels(prev =>
          prev.filter(value => !filteredValues.includes(value))
        );
      } else {
        setSelectedIntentLabels(prev => [
          ...prev,
          ...filteredValues.filter((val: any) => !prev.includes(val)),
        ]);
      }
    } else {
      // Full select/deselect
      const allValues = intentLableOptions.map((label: any) => label.value);
      const allSelected = allValues.every((val: any) => selectedIntentLabels.includes(val));
      if (allSelected) {
        setSelectedIntentLabels([]);
        dispatch(
          setFilterSettings({
            page: 1,
            intent: JSON.stringify([]),
            setting: localStorage.getItem("settingId"),
          })
        );
      } else {
        setSelectedIntentLabels(allValues);
      }
    }
  };
  const allFilteredSelected = filteredIntentOptions.length > 0 &&
    filteredIntentOptions.every((label: any) => selectedIntentLabels.includes(label.value));

  // Corporate Search All and auto Complete
  const filteredCorporateOptions = (corporateLableOptions ?? []).filter((label: any) =>
    label.value.toLowerCase().includes(searchCorporateLabel.toLowerCase())
  );
  const allFilteredCorporateSelected = filteredCorporateOptions.every((item: any) =>
    selectedCorporateLabels.includes(item.value)
  );
  const isCorporateSearchActive = searchCorporateLabel.trim().length > 0;

  // SelectAll for corporate
  const handleSelectAllCorporate = () => {
    const filteredValues = filteredCorporateOptions.map((label: any) => label.value);
    const allFilteredSelected = filteredValues.every((val: any) =>
      selectedCorporateLabels.includes(val)
    );

    if (!allFilteredSelected) {
      setSelectedCorporateLabels((prev) => [...new Set([...prev, ...filteredValues])]);
    } else {

      setSelectedCorporateLabels((prev) =>
        prev.filter((val) => !filteredValues.includes(val))
      );
      dispatch(
        setFilterSettings({
          page: 1,
          corporate_labels: JSON.stringify([]),
          setting: localStorage.getItem("settingId"),
        })
      );
    }
  };

  // On unchecking time of intent labels unStoring
  const handleUncheck = (labelValue: string, category: "intent" | "corporate") => {
    if (category === "intent") {
      const updatedLabels = selectedIntentLabels.filter((value) => value !== labelValue);
      setSelectedIntentLabels(updatedLabels);
      if (updatedLabels.length == 0) {
        dispatch(
          setFilterSettings({
            page: 1,
            intent: JSON.stringify(updatedLabels),
            setting: localStorage.getItem("settingId"),
          })
        );
      }
    } else {
      const updatedLabels = selectedCorporateLabels.filter((value) => value !== labelValue);
      setSelectedCorporateLabels(updatedLabels);
      if (updatedLabels.length == 0) {
        dispatch(
          setFilterSettings({
            page: 1,
            corporate_labels: JSON.stringify(updatedLabels),
            setting: localStorage.getItem("settingId"),
          })
        );
      }
    }
  };



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
                    setSelectedTab(item.id);
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
                  {countsSection &&
                    (() => {
                      let countContent;

                      if (item?.id === 'inbox') {
                        const unread = countsSection?.total_unread ?? 0;
                        const total = countsSection?.total_count ?? 0;

                        countContent = (
                          <>
                            <strong>{unread}</strong> / {total}
                          </>
                        );
                      } else if (item?.id === 'starred') {
                        countContent = countsSection?.total_starred;
                      } else if (item?.id === 'sent') {
                        countContent = countsSection?.total_sent;
                      } else {
                        countContent = countsSection?.total_deleted;
                      }

                      return countContent ? (
                        <span
                          className={`
                              px-2 py-1 text-xs rounded-full
                              ${isActive ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}
                            `}
                        >
                          {countContent}
                        </span>
                      ) : null;
                    })()
                  }
                </button>
              );
            })}

            {/* Intent Labels Dropdown */}
            {isIntentLabels && (<div className="relative">
              <button
                onClick={() => {
                  setIsIntentOpen(!isIntentOpen);
                  setIsCorporateOpen(false); // close other
                }}
                className={`
                      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${isIntentOpen || selectedIntentLabels?.length > 0
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
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 pb-0 z-50 max-h-64 overflow-y-auto">
                  {/* Search + Select All */}
                  <div className="flex items-center px-1 py-0.5 gap-2">
                    {filteredIntentOptions.length !== 0 && (
                      <label
                        className="flex items-center text-[10px] pl-2 text-gray-700 whitespace-nowrap cursor-pointer select-none"
                        onClick={handleSelectAllIntent}
                      >
                        <input
                          type="checkbox"
                          checked={allFilteredSelected}
                          onChange={handleSelectAllIntent}
                          className="form-checkbox h-4 w-4 text-blue-600 mr-1 cursor-pointer"
                        />
                      </label>
                    )}

                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchIntentLabel}
                      onChange={(e) => setSearchIntentLabel(e.target.value)}
                      className="flex-1 px-1 py-[2px] border border-gray-300 rounded-sm text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>

                  {/* No Results Found */}
                  {filteredIntentOptions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-4 text-gray-500">
                      <Empty description="No Data Found" />
                    </div>
                  ) : (
                    // Render filtered items if found
                    filteredIntentOptions.map((label: any) => {
                      const isSelected = selectedIntentLabels.includes(label.value);

                      return (
                        <button
                          key={label.value}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              handleUncheck(label.value, "intent");
                            } else {
                              handleLabelClick(label.value, "intent");
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${isSelected
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                          {/* Left: checkbox + label */}
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {/* Visual checkbox only — no handler here */}
                              <input
                                type="checkbox"
                                checked={isSelected}
                                readOnly
                                className="form-checkbox h-4 w-4 text-blue-600 mr-1 pointer-events-none"
                              />
                              <span className="truncate max-w-[150px] block" title={label.value}>
                                {label.value}
                              </span>
                            </div>

                            <span className="cls-indent-count text-xs text-gray-500">
                              {label.count}
                            </span>
                          </div>

                          {/* Right badge */}
                          {getLabelCount(label.value) > 0 && (
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${isSelected ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"
                                }`}
                            >
                              {getLabelCount(label.value)}
                            </span>
                          )}
                        </button>
                      );
                    })
                  )}


                  {/* Submit Button */}
                  <div className="sticky bottom-0 flex justify-end bg-white py-2 my-1 ml-0">
                    {selectedIntentLabels?.length > 0 && <button
                      className={`bg-gray-300 text-white text-sm font-medium py-1 px-2 rounded-full flex items-center space-x-2 mr-2`}
                      onClick={() => {
                        // setIsIntentOpen(false);
                        setSelectedIntentLabels([]);
                        dispatch(
                          setFilterSettings({
                            intent: undefined,
                            setting: localStorage.getItem("settingId"),
                          }));
                        dispatch(setFilterFilled(true));
                      }}
                    >
                      Clear
                    </button>}
                    <button
                      className={`${selectedIntentLabels.length === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                        } text-white text-sm font-medium py-1 px-2 rounded-full flex items-center space-x-2`}
                      disabled={selectedIntentLabels.length === 0}
                      onClick={() => {
                        setIsIntentOpen(false);
                        dispatch(
                          setFilterSettings({
                            page: 1,
                            intent: JSON.stringify(selectedIntentLabels),
                            setting: localStorage.getItem("settingId"),
                          }));
                        dispatch(setFilterFilled(true));
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

            </div>
            )}
            {/* Corporate Labels Dropdown */}
            {iscorporateLabels && (<div className="relative">
              <button
                onClick={() => {
                  setIsCorporateOpen(!isCorporateOpen);
                  setIsIntentOpen(false); // close other
                }}
                className={`
      flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${isCorporateOpen || selectedCorporateLabels?.length > 0
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
                <div
                  ref={dropdownCorpRef}
                  className="absolute top-full left-0 pb-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-64 overflow-y-auto"
                >
                  {/* Search + Select All */}
                  <div className="flex items-center px-1 py-0.5 gap-2">
                    {/* Select All Checkbox */}
                    {filteredCorporateOptions.length !== 0 && (
                      <label
                        className="flex items-center text-[10px] pl-2 text-gray-700 whitespace-nowrap cursor-pointer select-none"
                        onClick={handleSelectAllCorporate}
                      >
                        <input
                          type="checkbox"
                          checked={allFilteredCorporateSelected}
                          onChange={handleSelectAllCorporate}
                          className="form-checkbox h-4 w-4 text-blue-600 mr-1 cursor-pointer"
                        />
                      </label>
                    )}

                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchCorporateLabel}
                      onChange={(e) => setSearchCorporateLabel(e.target.value)}
                      className="flex-1 px-1 py-[2px] border border-gray-300 rounded-sm text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>

                  {/* No Results */}
                  {filteredCorporateOptions.length === 0 ? (
                    <Empty description="No Data Found" />
                  ) : (
                    // Filtered options
                    filteredCorporateOptions.map((label: any) => {
                      const isSelected = selectedCorporateLabels.includes(label.value);

                      return (
                        <button
                          key={label.value}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              handleUncheck(label.value, "corporate");
                            } else {
                              handleLabelClick(label.value, "corporate");
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${isSelected
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                          <div className="w-full flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                readOnly // <- Important: avoids duplicate state calls
                                className="form-checkbox h-4 w-4 text-blue-600 pointer-events-none" // <- prevents double interaction
                              />
                              <span className="truncate max-w-[150px] block" title={label.value}>
                                {label.value}
                              </span>
                            </div>

                            <span className="cls-indent-count text-xs text-gray-500">
                              {label.count}
                            </span>
                          </div>

                          {getLabelCount(label.value) > 0 && (
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${isSelected
                                ? "bg-blue-200 text-blue-800"
                                : "bg-gray-200 text-gray-600"
                                }`}
                            >
                              {getLabelCount(label.value)}
                            </span>
                          )}
                        </button>
                      );
                    }))}

                  {/* Submit Button */}
                  <div className="flex justify-end my-1 ml-0 py-2 sticky bottom-0 bg-white">
                    {selectedCorporateLabels?.length > 0 && <button
                      className={`bg-gray-300 text-white text-sm font-medium py-1 px-2 rounded-full flex items-center space-x-2 mr-2`}
                      onClick={() => {
                        // setIsCorporateOpen(false);
                        setSelectedCorporateLabels([]);
                        dispatch(
                          setFilterSettings({
                            corporate_labels: undefined,
                            setting: localStorage.getItem("settingId"),
                          }));
                        dispatch(setFilterFilled(true));
                      }}
                    >
                      Clear
                    </button>}
                    <button
                      className={`${selectedCorporateLabels.length === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-orange-500 hover:bg-orange-600"
                        } text-white text-sm font-medium py-1 px-2 rounded-full flex items-center space-x-2`}
                      disabled={selectedCorporateLabels.length === 0}
                      onClick={() => {
                        setIsCorporateOpen(false);
                        dispatch(
                          setFilterSettings({
                            page: 1,
                            corporate_labels: JSON.stringify(selectedCorporateLabels),
                            setting: localStorage.getItem("settingId"),
                          }));
                        dispatch(setFilterFilled(true));
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

            </div>)}

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
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-200 bg-orange-500 hover:bg-blue-700 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hidden"
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