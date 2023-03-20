import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { FieldErrors, useFieldArray, UseFormSetValue } from "react-hook-form";

export type ItemsType = {
  itemReference?: string | null;
  description?: string | null;
  quantity?: number | null;
  rate?: number | null;
  itemName?: string | null;
  itemUOM?: string | null;
};

interface IItemsForm {
  setValue?: UseFormSetValue<any>;
  name: string;
  errors?: FieldErrors<any>;
  errorsFull?: FieldErrors<any>;
  disabled?: boolean;
}

const ItemsForm: FC<IItemsForm> = ({
  setValue,
  errors,
  errorsFull,
  disabled,
}) => {
  const [array, setArray] = useState<Array<ItemsType>>([]);

  useEffect(() => {
    if (setValue) setValue("items", array);
  }, [array]);

  const addOneItemForm = () => {
    setArray([...array, {}]);
  };

  const removeItemForm = (_index: number) => {
    const arrayTerm = [...array];
    setArray(arrayTerm.filter((value, index) => index != _index));
  };

  const setValueItemsForm = (name: string, value: any, index: number) => {
    const arrayTerm = [...array] as Array<any>;
    arrayTerm[index][name] = value;
    setArray(arrayTerm);
  };

  const renderError = (name: string, index: number) => {
    if (errorsFull) {
      return errorsFull[`items[${index}].${name}`]
        ? "border-red-600 border-[2px]"
        : "";
    }
    return "";
  };

  const renderErrorMessage = () => {
    if (errorsFull)
      return errorsFull[Object.keys(errorsFull)[0]]?.message?.toString();
  };

  const renderItemForm = () => {
    return array.map((value, index) => (
      <div key={index}>
        <p
          className="text-primary-500 font-bold mb-1"
          data-cy={`item${index + 1}`}
        >
          Item {index + 1}
        </p>
        <div className="grid grid-cols-7 max-md:grid-cols-2 gap-4 mb-4">
          <input
            className={`border p-2 rounded-md  ${renderError(
              "itemReference",
              index
            )}`}
            placeholder="Enter item reference"
            onChange={(e) =>
              setValueItemsForm("itemReference", e.target.value, index)
            }
            disabled={disabled}
            data-cy={`itemReference${index + 1}`}
          />
          <input
            className={`border p-2 rounded-md  ${renderError(
              "description",
              index
            )}`}
            placeholder="Enter description"
            onChange={(e) =>
              setValueItemsForm("description", e.target.value, index)
            }
            disabled={disabled}
            data-cy={`description${index + 1}`}
          />
          <input
            className={`border p-2 rounded-md  ${renderError(
              "quantity",
              index
            )}`}
            placeholder="Enter quantity"
            type="number"
            onChange={(e) =>
              setValueItemsForm("quantity", e.target.value, index)
            }
            disabled={disabled}
            data-cy={`quantity${index + 1}`}
          />
          <input
            className={`border p-2 rounded-md  ${renderError("rate", index)}`}
            placeholder="Enter rate"
            type="number"
            onChange={(e) => setValueItemsForm("rate", e.target.value, index)}
            disabled={disabled}
            data-cy={`rate${index + 1}`}
          />
          <input
            className={`border p-2 rounded-md  ${renderError(
              "itemName",
              index
            )}`}
            placeholder="Enter item name"
            onChange={(e) =>
              setValueItemsForm("itemName", e.target.value, index)
            }
            disabled={disabled}
            data-cy={`itemName${index + 1}`}
          />
          <input
            className={`border p-2 rounded-md  ${renderError(
              "itemUOM",
              index
            )}`}
            placeholder="Enter item UOM"
            onChange={(e) =>
              setValueItemsForm("itemUOM", e.target.value, index)
            }
            disabled={disabled}
            data-cy={`itemUOM${index + 1}`}
          />
          <button
            disabled={disabled}
            type="button"
            onClick={() => removeItemForm(index)}
          >
            <XCircleIcon className="h-10 w-10 text-red-600" />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="col-span-full p-2 border border-dashed">
      {renderItemForm()}
      <button
        onClick={addOneItemForm}
        type="button"
        className="border-[2px] mt-4 py-2 px-3 border-dashed rounded-lg hover:border-secondary-500 hover:text-secondary-500"
        data-cy="addItem"
      >
        + 1 Item
      </button>

      {errors ? (
        <p className="text-xs mt-1 text-red-500">
          {errors?.message?.toString()}
        </p>
      ) : null}

      {errorsFull && Object.keys(errorsFull).length != 0 ? (
        <p className="text-xs mt-1 text-red-500">{renderErrorMessage()}</p>
      ) : null}
    </div>
  );
};

export default ItemsForm;
