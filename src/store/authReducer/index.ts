import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "..";
import { getMeAsyncThunk, loginAsyncThunk } from "./asyncThunk";
import { IAuthState } from "./interface";

const initState: IAuthState = {
  authData: null,
  userInfo: null,
  is_loading: false,
  is_loading_get_me: false,
};

export const authStateSlide = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    checkCacheAuthAction: (state) => {
      const getAuthLocal = localStorage.getItem("authData");
      if (!getAuthLocal) return;
      state.authData = JSON.parse(getAuthLocal);
    },
    logoutAction: (state) => {
      localStorage.removeItem("authData");
      state.authData = null;
      state.userInfo = null;
      toast.success("Logout successful", {});
    },
  },
  extraReducers: (builder) => {
    /* Login action */
    builder.addCase(loginAsyncThunk.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
      state.is_loading = false;
      state.authData = action.payload;
      localStorage.setItem("authData", JSON.stringify(action.payload));
      toast.success("Login successful", {});
    });
    builder.addCase(loginAsyncThunk.rejected, (state, action) => {
      state.is_loading = false;
      toast.error("Username and password invalid please try again", {});
    });

    /* Get me action */
    builder.addCase(getMeAsyncThunk.pending, (state, action) => {
      state.is_loading_get_me = true;
    });
    builder.addCase(getMeAsyncThunk.fulfilled, (state, action) => {
      state.is_loading_get_me = false;
      console.log(action.payload?.data, "userInfo");

      state.userInfo = action.payload?.data;
    });
    builder.addCase(getMeAsyncThunk.rejected, (state, action) => {
      state.is_loading_get_me = false;
      toast.error("Error when get your info, please try again", {});
    });
  },
});

export const { checkCacheAuthAction, logoutAction } = authStateSlide.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authStateSlide.reducer;
