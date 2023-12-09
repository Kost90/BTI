import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import DataBaseApi from "@/api/DataBaseApi";

interface initialStates {
  date: string;
  times: number[];
}

export const fetchDates = createAsyncThunk<initialStates[]>(
  "dates/fetchDates",
  async () => {
    return await DataBaseApi.getDates();
  }
);

export const addDate = createAsyncThunk<initialStates, initialStates>(
  "dates/addDates",
  async (data: any) => {
    console.log(`Slicer add date: ${data}`);
    return await DataBaseApi.addDate(data);
  }
);

const initialDates: initialStates[] = [];

export const bookedDatesSlicer = createSlice({
  name: "dates",
  initialState: {
    dates: initialDates,
    loading: false,
  },
  reducers: {
    addData(state, action: PayloadAction<initialStates[]>) {
      state.dates = action.payload;
    },
    addDates(state, action: PayloadAction<initialStates>) {
      state.dates.push(action.payload);
    },
    addTime(state, action: PayloadAction<{ index: number; time: number[] }>) {
      state.dates = state.dates.map((item, i) => {
        if (i === action.payload.index) {
          return { ...item, times: [...item.times, ...action.payload.time] };
        } else {
          return item;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDates.fulfilled, (state, action) => {
        state.dates = action.payload;
        state.loading = false;
      })
      .addCase(addDate.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDate.fulfilled, (state, action) => {
        state.dates.push(action.payload);
        state.loading = false;
      });
  },
});

export const { addDates, addTime, addData } = bookedDatesSlicer.actions;

export const selectBooking = (state: RootState) => state.dates.dates;
