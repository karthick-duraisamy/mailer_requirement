import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlignmentState {
  mode: string;
  status: boolean;
  isInputFilled: string;
  selectedMailsCount: number;
  isFilterFilled: any;
}

const initialState: AlignmentState = {
  mode: '320',
  status: false,
  isInputFilled: '',
  selectedMailsCount: 0,
  isFilterFilled:false,
};

const alignmentSlice = createSlice({
  name: 'alignment',
  initialState,
  reducers: {
    setWidthAlign: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    setInputFilled: (state, action: PayloadAction<string>) => {
      state.isInputFilled = action.payload;
    },
    setSelectedMailsCount: (state, action: PayloadAction<number>) => {
      state.selectedMailsCount = action.payload;
    },
    setFilterFilled: (state, action: PayloadAction<any>) => {
      state.isFilterFilled = action.payload;
    }
  },
});

export const { setWidthAlign, setInputFilled, setSelectedMailsCount , setFilterFilled} = alignmentSlice.actions;
export default alignmentSlice.reducer;