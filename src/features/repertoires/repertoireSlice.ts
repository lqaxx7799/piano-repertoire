import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IRepertoireItem } from './slice/repertoire.model';

export interface RepertoireState {
  data: IRepertoireItem[];
}

const initialState: RepertoireState = {
  data: [],
};

export const repertoireSlice = createSlice({
  name: 'repertoire',
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<IRepertoireItem[]>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getList } = repertoireSlice.actions;

export default repertoireSlice.reducer;
