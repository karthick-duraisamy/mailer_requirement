import { configureStore } from "@reduxjs/toolkit";
import InboxService from "../service/service";
import filterReducer from "./filterSlice";
import alignmentReducer from "./alignmentSlice";

// ✅ Export reducer in reusable format for host apps
export const inboxServiceReducer = {
  [InboxService.reducerPath]: InboxService.reducer,
  filters: filterReducer,
  alignment: alignmentReducer, //  Needed in consumer app
};

// ✅ Export middleware as reusable function
export const inboxServiceMiddleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(InboxService.middleware);

// ✅ Local store (used only in dev or embedded child)
export const store = configureStore({
  reducer: inboxServiceReducer, // ✅ simplified
  middleware: inboxServiceMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { InboxService };
