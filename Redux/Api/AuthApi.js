import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let END_POINT

if (window.location.protocol === 'http:') {
    END_POINT = `http://localhost:5500`
}
else {
    END_POINT = `https://${window.location.host}/api`
}

// jwtToken
const getJwtToken = () => {
    const userData = JSON.parse(sessionStorage.getItem("clinic-application-jwt"));
    return "Bearer " + String(userData.token);
};

export const LoginUser = createAsyncThunk(
  "users/LoginUser",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/login`, userData, {
        headers: {
          Authorization: getJwtToken()
        }
      });
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Async thunk for user registration
// export const LoginUser = createAsyncThunk(
//   "users/LoginUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/login`, userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "users/registerUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/register`, userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "users/RegisterUser",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/register`, userData, {
        headers: {
          Authorization: getJwtToken()
        }
      });
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);