import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IRepertoireItem } from './repertoire.model';
import { baseService } from '@core/services';

export interface RepertoireState {
  data: IRepertoireItem[];
  loading: boolean;
  selectedRepertoireId?: string;
  selectedRepertoire?: IRepertoireItem;
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
  selectedRepertoire: {
    id: '1',
    name:' Tea For Two',
    isDeleted: false,
    pieceId: '1',
    piece: {
      name: 'Tea For Two',
    },
  }
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

export const fetchRepertoire = createAsyncThunk(
  'repertoire/fetchRepertoire',
  async (_arg: string, { getState }) => {
    const { loading } = getState() as RepertoireState;
    if (loading) {
      return;
    }
    return await baseService.get<IRepertoireItem>('/repertoire', {
      params: {
        id: _arg
      }
    });
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

    builder
      .addCase(fetchRepertoire.pending.type, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchRepertoire.fulfilled.type,
        (state, action: PayloadAction<IRepertoireItem>) => {
          state.loading = false;
          state.selectedRepertoire = action.payload;
        }
      )
      .addCase(fetchRepertoire.rejected.type, (state, action) => {
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { selectRepertoire } = repertoireSlice.actions;

export default repertoireSlice.reducer;
