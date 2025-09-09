"use client";
import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../Api/AuthApi";

const loginSlice = createSlice({
  name: "users/loginUser",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.data = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [action.payload]; 
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;