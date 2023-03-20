import React, { FC } from "react";
interface ITagsField {
  labelText?: string;
  contentText: string[];
}

const TagsField: FC<ITagsField> = ({ labelText, contentText }) => {
  return (
    <div>
      {labelText ? <p className="font-bold ml-1">{labelText}</p> : null}
      <div className="flex flex-wrap mt-1">
        {contentText.map((value) => (
          <div className="flex items-center px-2 py-1 rounded-md h-10 border border:bg-gray-200 border-dashed max-md:text-sm mr-2 mt-2">
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsField;
