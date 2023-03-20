import { ItemsType } from "../../containers/CreateInvoicePage/ItemsForm";

export interface InvoiceCreateParamType {
  invoiceReference: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  description: string;
  invoiceSubTotal: number;
  totalDiscount: number;
  totalTax: number;
  totalAmount: number;
  items: Array<ItemsType>;
}

export interface InvoiceGetParamType {
  pageNum: number;
  pageSize: number;
  dateType?: "INVOICE_DATE" | "CREATED_DATE";
  sortBy?: "INVOICE_DATE" | "CREATED_DATE";
  ordering?: "ASCENDING" | "DESCENDING";
  keyword?: string;
}

export interface InvoiceResponseType {
  createdAt: string;
  createdBy: string;
  currency: string;
  currencySymbol: string;
  customer: Customer;
  description: string;
  dueDate: string;
  extensions: any[];
  invoiceDate: string;
  invoiceId: string;
  invoiceNumber: string;
  invoiceSubTotal: number;
  totalDiscount: number;
  totalTax: number;
  totalAmount: number;
  totalPaid: number;
  balanceAmount: number;
  numberOfDocuments: number;
  documents: any[];
  items: any[];
  merchant: Merchant;
  payments: any[];
  status: Status[];
  subStatus: any[];
  type: string;
  version: string;
  purchaseOrderMatched: boolean;
  isRegulated: boolean;
  isInsured: boolean;
  customFields: CustomField[];
}

export interface Customer {
  id: string;
  addresses: any[];
}

export interface Merchant {
  id: string;
  addresses: any[];
}

export interface Status {
  key: string;
  value: boolean;
}

export interface CustomField {
  key: string;
  value: string;
}
