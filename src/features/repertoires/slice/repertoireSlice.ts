import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IRepertoireItem } from './repertoire.model';
import { baseService } from '@core/services';

export interface RepertoireState {
  data: IRepertoireItem[];
  loading: boolean;
  selectedRepertoireId?: string;
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
      },
    },
    {
      id: '2',
      name: 'Unforgettable',
      isDeleted: false,
      pieceId: '1',
      piece: {
        name: 'Unforgettable',
      },
    },
  ],
  loading: false,
};

export const fetchAllRepertoires = createAsyncThunk(
  'repertoire/fetchAllRepertoires',
  async (_arg, { getState }) => {
    const { loading } = getState() as RepertoireState;
    if (loading) {
      return;
    }
    return await baseService.get<IRepertoireItem[]>('/repertoires');
  }
);

export const repertoireSlice = createSlice({
  name: 'repertoire',
  initialState,
  reducers: {
    selectRepertoire: (state, action: PayloadAction<string>) => {
      state.selectedRepertoireId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRepertoires.pending.type, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchAllRepertoires.fulfilled.type,
        (state, action: PayloadAction<IRepertoireItem[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchAllRepertoires.rejected.type, (state, action) => {
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { selectRepertoire } = repertoireSlice.actions;

export default repertoireSlice.reducer;
