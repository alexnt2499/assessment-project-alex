import React from "react";
import AppLayout from "../../layouts/AppLayout";
import RHForm from "./../../components/RHForm";
import * as yup from "yup";
import RHInput from "../../components/RHForm/RHInput";
import RHTextarea from "../../components/RHForm/RHTextarea";
import { useAppDispatch } from "../../hooks/useReactRedux";
import { createInvoiceAsyncThunk } from "../../store/invoiceReducer/asyncThunk";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { selectInvoice } from "../../store/invoiceReducer";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import ItemsForm from "./ItemsForm";

const createInvoiceValidationSchema = yup.object({
  invoiceReference: yup
    .string()
    .required("Invoice reference field cannot be left blank"),
  invoiceNumber: yup
    .string()
    .trim()
    .required("Invoice number field cannot be left blank"),
  invoiceDate: yup.string().required("Invoice date field cannot be left blank"),
  dueDate: yup.string().required("Due date field cannot be left blank"),
  description: yup.string().required("description field cannot be left blank"),
  items: yup
    .array()
    .of(
      yup.object().shape({
        itemReference: yup
          .string()
          .min(0)
          .required("itemReference field cannot be left blank"),
        description: yup
          .string()
          .required("description field cannot be left blank"),
        quantity: yup
          .number()
          .min(0)
          .required("Quantity field cannot be left blank"),
        rate: yup.number().min(0).required("rate field cannot be left blank"),
        itemName: yup.string().required("itemName field cannot be left blank"),
        itemUOM: yup.string().required("itemUOM field cannot be left blank"),
      })
    )
    .min(1)
    .required(),
});

const CreateInvoicePage = () => {
  const { is_create_loading } = useSelector(selectInvoice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    dispatch(createInvoiceAsyncThunk(data));
  };

  return (
    <AppLayout>
      <div className="m-5 p-10 max-md:m-0 max-md:px-4 shadow-lg max-md:shadow-none">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="px-1 py-1">
            <ArrowLeftIcon className="w-7 h-7 text-secondary-500 mx-2" />
          </button>
          <h1
            data-cy="title"
            className="font-bold text-2xl text-secondary-500 uppercase"
          >
            Create New Invoice
          </h1>
        </div>
        <RHForm
          onSubmit={onSubmit}
          defaultValues={{}}
          validationSchemaParams={createInvoiceValidationSchema}
          className="grid grid-cols-2 gap-5 mt-10 max-md:grid-cols-1"
        >
          <RHInput
            name="invoiceReference"
            placeholder="Enter invoice reference"
            labelText="Invoice Reference"
            containerClassName="max-md:col-span-full"
            disabled={is_create_loading}
          />
          <RHInput
            name="invoiceNumber"
            placeholder="Enter invoice number"
            labelText="Invoice Number"
            containerClassName="max-md:col-span-full"
            disabled={is_create_loading}
          />

          <RHInput
            name="invoiceDate"
            placeholder="Enter invoice date"
            labelText="Invoice Date"
            type="date"
            containerClassName="max-md:col-span-full"
            disabled={is_create_loading}
          />
          <RHInput
            name="dueDate"
            placeholder="Enter due date"
            labelText="Due Date"
            type="date"
            containerClassName="max-md:col-span-full"
            disabled={is_create_loading}
          />
          <ItemsForm name="items" disabled={is_create_loading} />
          <RHTextarea
            name="description"
            placeholder="Enter description"
            labelText="Description"
            containerClassName="col-span-full"
            disabled={is_create_loading}
          />
          <div className="flex justify-end col-span-2">
            <Button
              type="submit"
              is_loading={is_create_loading}
              disabled={is_create_loading}
              containerClassName="w-[30%] max-md:w-full"
              data-cy="submitCreateInvoice"
            >
              <p>Create new invoice</p>
            </Button>
          </div>
        </RHForm>
      </div>
    </AppLayout>
  );
};

export default CreateInvoicePage;
