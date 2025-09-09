"use client";
import { configureStore } from "@reduxjs/toolkit";
import RegisterUserReducer from "./Slice/Auth/Register";
import LoginReducer from "./Slice/Auth/Login";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  RegisterAPI: RegisterUserReducer,
  LoginAPI: LoginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
