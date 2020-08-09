import React from "react";
import { PLACEHOLDER } from "../../static/images/image";
const Img = ({ className, src, ...props }) => {
  return (
    <img
      src={src || PLACEHOLDER}
      className={className || ""}
      alt="imag"
      {...props}
    />
  );
};
export default Img;
