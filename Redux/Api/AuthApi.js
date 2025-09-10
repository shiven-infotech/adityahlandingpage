import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const END_POINT =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_PROD;


// jwtToken

export const LoginUser = createAsyncThunk(
  "users/LoginUser",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/doctor/loginByName`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/RegisterUser",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/customer`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);