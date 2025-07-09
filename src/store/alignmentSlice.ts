import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlignmentState {
  mode: string;
  status: boolean;
}

const initialState: AlignmentState = {
  mode: '320',
  status: false,
};

const alignmentSlice = createSlice({
  name: 'alignment',
  initialState,
  reducers: {
    setWidthAlign: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    // setInputStatus: (state, action: PayloadAction<boolean>) => {
    //   state.status = action.payload;
    // },
  },
});

export const { setWidthAlign } = alignmentSlice.actions;
export default alignmentSlice.reducer;