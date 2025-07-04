import { configureStore } from "@reduxjs/toolkit";
import InboxService from "../service/service";

export const store = configureStore({
  reducer: {
    [InboxService.reducerPath]: InboxService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(InboxService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
