import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import ModeReducer from "../slices/mode";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  mode: ModeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export default store;
