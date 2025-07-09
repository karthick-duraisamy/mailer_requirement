import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlignmentState {
  mode: string;
  status: boolean;
  isInputFilled: string;
}

const initialState: AlignmentState = {
  mode: '320',
  status: false,
  isInputFilled: '',
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
  },
});

export const { setWidthAlign, setInputFilled } = alignmentSlice.actions;
export default alignmentSlice.reducer;