import { configureStore } from "@reduxjs/toolkit";
import { bookingSlicer } from "./features/booking/BookingSlicer";
import { ordersSlicer } from "./features/orders/OrderSlice";
import { bookedDatesSlicer } from "./features/bookeddates/BookedDatesSlicer";
import { ThemeSlicer } from "./features/theme/ThemeSlicer";


export const makeStore = configureStore({
  reducer: {
    booking: bookingSlicer.reducer,
    orders:ordersSlicer.reducer,
    dates:bookedDatesSlicer.reducer,
    theme:ThemeSlicer.reducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
