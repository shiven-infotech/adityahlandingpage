import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const END_POINT =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_PROD;


// jwtToken

export const CreateContactUs = createAsyncThunk(
  "create/ContactUs",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/contactUs/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateCallBack = createAsyncThunk(
  "create/Callback",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/callBacks/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateQuestions = createAsyncThunk(
  "create/Questions",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/didNotFindYourQuestions/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateTestimonials = createAsyncThunk(
  "create/Testimonials",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/submitYourTestimonial/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateSharedThoughts = createAsyncThunk(
  "create/SharedThoughts",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/ShareYourThoughts/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateEnrollPackage = createAsyncThunk(
  "create/EnrollInHealthPackage",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/EnrollInHealthPackage/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateCalmAilmentNaturally = createAsyncThunk(
  "create/calmYourAilmentNaturally",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/calmYourEczemaNaturally/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const CreateBookAlternativeTherapy = createAsyncThunk(
  "create/BookAlternativeTherapy",
  async (userData , { rejectWithValue }) => {
    try {
      const res = await axios.post(`${END_POINT}/bookAlternativeTherapies/create`, userData);
      return res.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return []; // ✅ No items, return empty array instead of rejecting
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);


