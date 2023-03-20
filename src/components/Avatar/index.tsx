import React, { FC } from "react";
import { avatarDefault } from "../../assets/images";

interface IAvatar
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  url?: string;
}

const Avatar: FC<IAvatar> = ({ url, ...rest }) => {
  return (
    <img
      src={url ?? avatarDefault}
      className="w-9 h-9 rounded-[50%]"
      {...rest}
    />
  );
};

export default Avatar;
