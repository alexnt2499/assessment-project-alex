import React, { FC } from "react";

interface ITextInfoField {
  labelText?: string;
  contentText?: string;
}

const TextInfoField: FC<ITextInfoField> = ({ labelText, contentText }) => {
  return (
    <div>
      {labelText ? <p className="font-bold ml-1 mt-1">{labelText}</p> : null}
      <div className="flex items-center px-2 w-[100%] rounded-md h-10 border  max-md:text-sm mt-2">
        <p>{contentText ?? ""}</p>
      </div>
    </div>
  );
};

export default TextInfoField;
