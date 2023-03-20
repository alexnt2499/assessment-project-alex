import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "..";
import { createInvoiceAsyncThunk, getInvoicesAsyncThunk } from "./asyncThunk";
import { IInvoiceState } from "./interface";

const initState: IInvoiceState = {
  listInvoices: [],
  currentPage: 1,
  is_create_loading: false,
  is_get_loading: false,
  pageNumber: 1,
  pageSize: 10,
  totalRecords: 0,
};

export const invoiceStateSlide = createSlice({
  name: "invoice",
  initialState: initState,
  reducers: {
    setCurrentPageAction: (state, action) => {
      state.currentPage = action.payload.currentPage ?? 0;
    },
    setSearchFormAction: (state, action) => {
      state.keyword = action.payload.keyword ?? "";
      state.ordering = action.payload.ordering ?? "";
      state.sortBy = action.payload.sortBy ?? "";
    },
  },
  extraReducers: (builder) => {
    /* Create invoice action */
    builder.addCase(createInvoiceAsyncThunk.pending, (state, action) => {
      state.is_create_loading = true;
    });
    builder.addCase(createInvoiceAsyncThunk.fulfilled, (state, action) => {
      state.is_create_loading = false;
      toast.success("Create new invoice successful", {});
    });
    builder.addCase(createInvoiceAsyncThunk.rejected, (state, action: any) => {
      state.is_create_loading = false;
      if (action?.payload.errors) {
        toast.error(action?.payload?.errors[0].message, {});
      } else {
        toast.error("Error when create new invoice, please try again", {});
      }
    });

    /* Get list invoices action */
    builder.addCase(getInvoicesAsyncThunk.pending, (state, action) => {
      state.is_get_loading = true;
    });
    builder.addCase(getInvoicesAsyncThunk.fulfilled, (state, action) => {
      state.is_get_loading = false;
      state.listInvoices = action.payload?.data ?? [];
      state.totalRecords = action.payload?.paging.totalRecords ?? 0;
    });
    builder.addCase(getInvoicesAsyncThunk.rejected, (state, action: any) => {
      state.is_get_loading = false;

      if (action?.payload.errors) {
        toast.error(action?.payload?.errors[0].message, {});
      } else {
        toast.error("Error when get invoices, please try again", {});
      }
    });
  },
});

export const { setCurrentPageAction, setSearchFormAction } =
  invoiceStateSlide.actions;

export const selectInvoice = (state: RootState) => state.invoice;

export default invoiceStateSlide.reducer;
