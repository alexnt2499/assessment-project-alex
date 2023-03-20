import moment from "moment";
import React, { useMemo } from "react";
import { CellProps, Column } from "react-table";
import { InvoiceResponseType } from "../apis/types/InvoiceType";

const useInvoiceColumn = () => {
  const invoiceColumns: Column<InvoiceResponseType>[] = useMemo(
    () => [
      {
        Header: "Invoice ID",
        accessor: "invoiceId",
      },
      {
        Header: "Invoice Number",
        accessor: "invoiceNumber",
      },
      {
        Header: "Invoice Date",
        accessor: "invoiceDate",
      },
      {
        Header: "Invoice sub total",
        accessor: "invoiceSubTotal",
      },
      {
        Header: "Total Discount",
        accessor: "totalDiscount",
      },
      {
        Header: "Total Tax",
        accessor: "totalTax",
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
      },
      {
        Header: "Total paid",
        accessor: "totalPaid",
      },
      {
        Header: "Created date",
        accessor: "createdAt",
        Cell: ({ value }: CellProps<InvoiceResponseType>) => (
          <p>{moment(value).format("YYYY-MM-DD")}</p>
        ),
      },
    ],
    []
  );

  return {
    invoiceColumns,
  };
};

export default useInvoiceColumn;
