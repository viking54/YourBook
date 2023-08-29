"use client"
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'; 

const initialState = {
    isLoggedIn: !!Cookies.get('token'), 
  };

export const authSlice =  createSlice({
     name:'auth',
     initialState,
     reducers:{
        login(state)
        {
            state.isLoggedIn=true;
        },
        logout(state)
        {
            state.isLoggedIn=false;
        },
     },
});


export const {login,logout} = authSlice.actions;
export default authSlice.reducer
