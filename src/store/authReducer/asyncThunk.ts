import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { apiAuth } from "../../apis";
import { LoginParamsType } from "../../apis/types/AuthType";

const loginAsyncThunk = createAsyncThunk(
  "auth/login",
  async (params: LoginParamsType, thunkAPI) => {
    const res = await apiAuth.login({
      username: params.username,
      password: params.password,
      client_id: params.client_id,
      grant_type: params.grant_type,
      scope: params.scope,
      client_secret: params.client_secret,
    });

    return res;
  }
);

const getMeAsyncThunk = createAsyncThunk(
  "auth/getMe",
  async (params, thunkAPI) => {
    const state: RootState | any = thunkAPI.getState();
    if (!state.auth?.authData) return null;
    const res = await apiAuth.getMe(state.auth.authData.access_token);

    return res;
  }
);

export { loginAsyncThunk, getMeAsyncThunk };
