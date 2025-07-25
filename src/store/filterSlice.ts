import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterOptions {
  readStatus?: string;
  is_starred?: boolean;
  has_attachment?: boolean;
  sortBy?: string;
  dateRange?: { from: string; to: string };
  intent?: string | null;
  search?: string;
  is_read?: any; // Optional field for backward compatibility
  page?: number; // Optional field for pagination
  page_size?: number; // Optional field for pagination
  folder?: string | null;
  is_deleted?: boolean | null;
  setting?: string | number | null;
  corporate_labels?: string | null;
}

const initialState: FilterOptions = {
//   readStatus: "all",
  page: 1,
  page_size: 20,
//   sortBy: "newest",
//   dateRange: { from: "", to: "" },
//   intent: "all",
  search: "",
  folder: 'inbox',
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterSettings(state, action: PayloadAction<Partial<FilterOptions>>) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilterSettings, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;