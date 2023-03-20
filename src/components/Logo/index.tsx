import React, { FC } from "react";
import { logoImage } from "../../assets/images";

interface ILogo
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Logo: FC<ILogo> = ({ ...rest }) => {
  return <img src={logoImage} alt="logo" {...rest} />;
};

export default Logo;
