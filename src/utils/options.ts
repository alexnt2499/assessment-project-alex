import { RHOption } from "../components/RHForm/RHSelect";

export const orderingOptions: Array<RHOption> = [
  {
    value: "",
    label: "Select ordering",
  },
  {
    value: "ASCENDING",
    label: "Ascending",
  },
  {
    value: "DESCENDING",
    label: "Descending",
  },
];

export const sortByOptions: Array<RHOption> = [
  {
    value: "",
    label: "Select sort by",
  },
  {
    value: "CREATED_DATE",
    label: "Created date",
  },
  {
    value: "INVOICE_NUMBER",
    label: "Invoice number",
  },
  {
    value: "INVOICE_DATE",
    label: "Invoice date",
  },
  {
    value: "INVOICE_SUB_TOTAL",
    label: "Invoice sub total",
  },
  {
    value: "TOTAL_DISCOUNT",
    label: "Invoice discount",
  },
  {
    value: "TOTAL_TAX",
    label: "Invoice tax",
  },
  {
    value: "TOTAL_AMOUNT",
    label: "Invoice amount",
  },
  {
    value: "TOTAL_PAID",
    label: "Invoice paid",
  },
];
