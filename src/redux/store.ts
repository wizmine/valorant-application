import { configureStore } from "@reduxjs/toolkit";
import { agentsReducer } from "./slices/agents";
import { weaponsReducer } from "./slices/weapons";

export const store = configureStore({
  reducer: {
    agents: agentsReducer,
    weapons: weaponsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
