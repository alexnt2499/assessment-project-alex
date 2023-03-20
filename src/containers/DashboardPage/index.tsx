import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import RHInput from "../../components/RHForm/RHInput";
import Table from "../../components/Table";
import useInvoiceColumn from "../../hooks/useInvoiceColumn";
import { useAppDispatch, useAppSelector } from "../../hooks/useReactRedux";
import AppLayout from "../../layouts/AppLayout";
import {
  selectInvoice,
  setCurrentPageAction,
  setSearchFormAction,
} from "../../store/invoiceReducer";
import { getInvoicesAsyncThunk } from "../../store/invoiceReducer/asyncThunk";
import RHForm from "./../../components/RHForm";
import * as yup from "yup";
import RHSelect, { RHOption } from "../../components/RHForm/RHSelect";
import { orderingOptions, sortByOptions } from "../../utils/options";

const searchValidationSchema = yup.object({
  keyword: yup.string().default("").notRequired(),
  ordering: yup.string().default("").notRequired(),
});

const DashboardPage = () => {
  const {
    listInvoices,
    pageNumber,
    pageSize,
    totalRecords,
    is_get_loading,
    currentPage,
    keyword,
    ordering,
    sortBy,
  } = useAppSelector(selectInvoice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { invoiceColumns } = useInvoiceColumn();

  const onGoCreateInvoice = () => {
    navigate("/dashboard/create-invoice/");
  };

  useEffect(() => {
    dispatch(getInvoicesAsyncThunk({}));
  }, []);

  useEffect(() => {
    dispatch(getInvoicesAsyncThunk({}));
  }, [currentPage, keyword, ordering, sortBy]);

  const onSubmitSearchForm = (data: any) => {
    dispatch(setSearchFormAction({ ...data, currentPage: 1 }));
  };

  return (
    <AppLayout>
      <div className="m-5 p-10 max-md:m-0 max-md:px-4 shadow-lg max-md:shadow-none">
        <h1 className="font-bold text-2xl text-secondary-500">DASHBOARD</h1>

        <div className="mt-5">
          <div className="grid grid-cols-2">
            <div className="max-md:col-span-full">
              <RHForm
                className="grid grid-cols-12 max-md:grid-cols-1 max-md:w-full gap-2"
                defaultValues={{}}
                onSubmit={onSubmitSearchForm}
                validationSchemaParams={searchValidationSchema}
              >
                <RHInput
                  name="keyword"
                  placeholder="enter keyword"
                  containerClassName="col-span-3 max-md:col-span-full"
                />
                <RHSelect
                  name="ordering"
                  containerClassName="col-span-3 max-md:col-span-full"
                  options={orderingOptions}
                />
                <RHSelect
                  name="sortBy"
                  containerClassName="col-span-3 max-md:col-span-full"
                  options={sortByOptions}
                />
                <div className="-mt-[6px] col-span-3 max-md:col-span-full">
                  <Button
                    type="submit"
                    is_loading={is_get_loading}
                    disabled={is_get_loading}
                  >
                    <p>Search</p>
                  </Button>
                </div>
              </RHForm>
            </div>

            <div className="flex justify-end m-[-10px]">
              <div className="max-md:w-full max-md:col-span-full w-[200px]">
                <Button
                  onClick={onGoCreateInvoice}
                  containerClassName="w-[200px] max-md:col-span-full max-md:w-full  bg-secondary-500"
                  data-cy="create_invoice"
                >
                  <p>Create Invoice</p>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Table
              columns={invoiceColumns ?? []}
              data={listInvoices ?? []}
              paginationInfo={{
                pageNumber: pageNumber || 0,
                totalPages: totalRecords,
                totalElements: totalRecords,
                pageSize: pageSize || 0,
                currentPage: currentPage,
              }}
              onChangePage={(pageNumber: number) => {
                dispatch(setCurrentPageAction({ currentPage: pageNumber }));
              }}
              isLoading={is_get_loading}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
