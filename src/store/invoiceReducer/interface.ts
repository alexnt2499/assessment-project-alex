import { InvoiceResponseType } from "../../apis/types/InvoiceType";

export interface IInvoiceState {
  listInvoices: Array<InvoiceResponseType>;
  is_create_loading: boolean;
  is_get_loading: boolean;
  currentPage: number;
  totalRecords: number;
  pageSize: number;
  pageNumber: number;
  dateType?: "INVOICE_DATE" | "CREATED_DATE";
  sortBy?: "INVOICE_DATE" | "CREATED_DATE";
  ordering?: "ASCENDING" | "DESCENDING";
  keyword?: string;
}

export interface ValidationErrors {
  errors?: Array<{ code: string; message: string }>;
}
