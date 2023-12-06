import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface initialStates {
  date: string;
  times: number[];
}

// export const postBooking = createAsyncThunk<>('posts/fetchPosts', async () => {
//     const controler = new AbortController()
//     const signal = controler.signal
//     return await JsonPlaceholderAPI.getPosts({ signal })
//   })

const initialDates: initialStates[] = [
  {
    date: "",
    times: [0],
  },
];

export const bookedDatesSlicer = createSlice({
  name: "dates",
  initialState: {
    dates: initialDates,
    loading: false,
  },
  reducers: {
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
});

export const { addDates, addTime } = bookedDatesSlicer.actions;

export const selectBooking = (state: RootState) => state.dates.dates;
