import { configureStore } from "@reduxjs/toolkit";
import RegisterUserReducer from "./Slice/Auth/Register";
import LoginReducer from "./Slice/Auth/Login";

const store = configureStore({
  reducer: {
    RegisterAPI: RegisterUserReducer,
    LoginAPI: LoginReducer,
  },
});

export default store;