import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlignmentState {
  mode: string;
  status: boolean;
  isInputFilled: string;
  selectedMailsCount: number;
  isFilterFilled: any;
  selectedTabStatus: string;
  scrollTopEnable: boolean;
}

const initialState: AlignmentState = {
  mode: '475',
  status: false,
  isInputFilled: '',
  selectedMailsCount: 0,
  isFilterFilled:false,
  selectedTabStatus: 'inbox',
  scrollTopEnable: true
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
    },
    setSelectedTabStatus:(state,action:PayloadAction<string>)=>{
        state.selectedTabStatus = action.payload
    },
    setScrollTop:(state,action:PayloadAction<boolean>)=>{
        state.scrollTopEnable = action.payload
    }
  },
});

export const { setWidthAlign, setInputFilled, setSelectedMailsCount , setFilterFilled, setSelectedTabStatus, setScrollTop} = alignmentSlice.actions;
export default alignmentSlice.reducer;