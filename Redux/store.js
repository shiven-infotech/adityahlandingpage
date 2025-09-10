"use client";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { combineReducers } from "redux";

import RegisterUserReducer from "./Slice/Auth/Register";
import LoginReducer from "./Slice/Auth/Login";
import FormsReducer from "./Slice/formSlice"

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  RegisterAPI: RegisterUserReducer,
  LoginAPI: LoginReducer,
  FormsAPI: FormsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
