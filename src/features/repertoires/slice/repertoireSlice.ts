import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IRepertoireItem } from './repertoire.model';

export interface RepertoireState {
  data: IRepertoireItem[];
}

const initialState: RepertoireState = {
  data: [
    {
      id: '1',
      name: 'Tea For Two',
      isDeleted: false,
      pieceId: '1',
      piece: {
        name: 'Tea For Two',
      }
    },
    {
      id: '2',
      name: 'Unforgettable',
      isDeleted: false,
      pieceId: '1',
      piece: {
        name: 'Unforgettable',
      }
    },
  ],
};

export const repertoireSlice = createSlice({
  name: 'repertoire',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<IRepertoireItem[]>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList } = repertoireSlice.actions;

export default repertoireSlice.reducer;
