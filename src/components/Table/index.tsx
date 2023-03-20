import Spinner from "./../Spinner";
import TableFooter, { PaginationInfo } from "./TableFooter";
import React, { FC } from "react";
import { Column, useTable } from "react-table";

interface ITableCustom {
  columns: Column<any>[];
  data: any[];
  isLoading?: boolean;
  paginationInfo: PaginationInfo;
  onChangePage: (pageNumber: number) => void;
}

const TableCustom: FC<ITableCustom> = ({
  columns,
  data,
  isLoading,
  paginationInfo,
  onChangePage,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: data || [] });

  return (
    <>
      <div className="mt-5 flex flex-auto flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="max-h-[1500px] border-b border-gray-200 shadow sm:rounded-lg">
              <table
                className="w-full divide-y divide-gray-200 "
                {...getTableProps()}
              >
                <thead className="bg-gray-50">
                  {
                    // Loop over the header rows
                    headerGroups.map(
                      (headerGroup: {
                        getHeaderGroupProps: () =>
                          | (JSX.IntrinsicAttributes &
                              React.ClassAttributes<HTMLTableRowElement> &
                              React.HTMLAttributes<HTMLTableRowElement>)
                          | any;
                        headers: any[];
                      }) => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {
                            // Loop over the headers in each row
                            headerGroup.headers.map((column) => {
                              return (
                                // Apply the header cell props
                                <th
                                  {...column.getHeaderProps()}
                                  className={`${
                                    column.columns ? "text-center" : "text-left"
                                  } px-6 py-3 text-sm  uppercase tracking-wider font-bold text-gray-500`}
                                >
                                  {
                                    // Render the header
                                    column.render("Header")
                                  }
                                </th>
                              );
                            })
                          }
                        </tr>
                      )
                    )
                  }
                </thead>
                <tbody
                  className="divide-y divide-gray-200 bg-white"
                  {...getTableBodyProps()}
                >
                  {
                    // Loop over the table rows
                    rows.map((row: any) => {
                      // Prepare the row for display
                      prepareRow(row);
                      return (
                        // Apply the row props
                        <tr
                          {...row.getRowProps()}
                          className="hover:bg-gray-100"
                        >
                          {
                            // Loop over the rows cells
                            row.cells.map(
                              (cell: {
                                getCellProps: () =>
                                  | JSX.IntrinsicAttributes
                                  | any;
                                render: (
                                  arg0: string
                                ) =>
                                  | string
                                  | number
                                  | boolean
                                  | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | React.ReactFragment
                                  | React.ReactPortal
                                  | null
                                  | undefined;
                              }) => {
                                // Apply the cell props
                                return (
                                  <td
                                    {...cell.getCellProps()}
                                    className="max-w-xs break-all px-6 py-4 text-sm text-gray-900"
                                  >
                                    {
                                      // Render the cell contents
                                      cell.render("Cell")
                                    }
                                  </td>
                                );
                              }
                            )
                          }
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
              {isLoading && (
                <div className="m-auto my-10 flex w-full justify-center align-middle">
                  <Spinner />
                </div>
              )}
              {data === null && <div className="h-36 w-full" />}
              {data && !data.length && (
                <div className="w-full">
                  <div className="my-20 text-center text-lg"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <TableFooter paginationInfo={paginationInfo} onChange={onChangePage} />
    </>
  );
};

export default React.memo(TableCustom);
