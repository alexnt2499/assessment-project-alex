export interface AuthBaseResponseType<T> {
  data: T;
  status: Status;
}

export interface Status {
  code: string;
  message: string;
}

export interface InvoiceBaseResponseType<T> {
  data: Array<T>;
  paging: Paging;
}

export interface Paging {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
}
