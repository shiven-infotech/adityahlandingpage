"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CreateContactUs,CreateCallBack,CreateBookAlternativeTherapy,CreateCalmAilmentNaturally,CreateQuestions,CreateEnrollPackage,CreateSharedThoughts,CreateTestimonials } from "../Api/LandingPageFormsApi";

const FillForms = createSlice({
  name: "create/forms",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateContactUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateContactUs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateContactUs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
            .addCase(CreateCallBack.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateCallBack.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateCallBack.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
            .addCase(CreateBookAlternativeTherapy.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateBookAlternativeTherapy.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateBookAlternativeTherapy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(CreateCalmAilmentNaturally.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateCalmAilmentNaturally.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateCalmAilmentNaturally.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

            .addCase(CreateEnrollPackage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateEnrollPackage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateEnrollPackage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

            .addCase(CreateSharedThoughts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateSharedThoughts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateSharedThoughts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

            .addCase(CreateTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
            .addCase(CreateQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Optional: Add registered user data to state
      })
      .addCase(CreateQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

  },
});

export default FillForms.reducer;