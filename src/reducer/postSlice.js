"use client";
;
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: { data: [] },

  reducers: {
    setPost(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
