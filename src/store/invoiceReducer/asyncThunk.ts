import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "..";
import { apiInvoice } from "../../apis";
import { InvoiceCreateParamType } from "../../apis/types/InvoiceType";
import { ValidationErrors } from "./interface";

const createInvoiceAsyncThunk = createAsyncThunk(
  "invoice/createNewInvoice",
  async (params: InvoiceCreateParamType | any, thunkAPI) => {
    try {
      const state: RootState | any = thunkAPI.getState();
      if (!state.auth?.authData || !state.auth?.userInfo) return null;
      const res = await apiInvoice.createInvoice(
        state.auth?.authData.access_token,
        state.auth?.userInfo?.memberships[0].token,
        params
      );
      return res;
    } catch (err) {
      let error: AxiosError<ValidationErrors> | any = err; // cast the error for access

      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getInvoicesAsyncThunk = createAsyncThunk(
  "invoice/getInvoices",
  async (params: any | null, thunkAPI) => {
    try {
      const state: RootState | any = thunkAPI.getState();
      console.log(state, "Abc@123456");

      if (!state.auth?.authData || !state.auth?.userInfo) return null;
      const res = await apiInvoice.getListInvoices(
        state.auth?.authData.access_token,
        state.auth?.userInfo?.memberships[0].token,
        {
          pageNum: state.invoice?.currentPage,
          pageSize: state.invoice?.pageSize,
          dateType: state.invoice?.dateType,
          keyword: state.invoice?.keyword,
          ordering: state.invoice?.ordering,
          sortBy: state.invoice?.sortBy,
        }
      );
      return res;
    } catch (err) {
      let error: AxiosError<ValidationErrors> | any = err; // cast the error for access

      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { createInvoiceAsyncThunk, getInvoicesAsyncThunk };
