"use client";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { data: [] },

  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// export function getUser() {
//   return async function getUserThunk(dispatch, getState) {
//     // dispatch(setStatus(STATUSES.LOADING));
//     // IF you want to get someting , from state  : const prop = getState().data;
//     try {
//       const res = await axios.get("/api/users/me");
//       // two thing are soming in res.data 1 - user 2- message

//       await dispatch(setUser(res.data.data));
//       // dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       // dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
