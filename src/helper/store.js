"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage
import authReducer from "../reducer/slice";
import userReducer from "../reducer/userSlice";
import postReducer from "../reducer/postSlice";
const authPersistConfig = {
  key: "auth",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const postPersistConfig = {
  key: "post",
  storage,
};


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedPostReducer = persistReducer(postPersistConfig, postReducer);

export const store = configureStore({
  reducer: { auth: persistedAuthReducer, user: persistedUserReducer , post: persistedPostReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
