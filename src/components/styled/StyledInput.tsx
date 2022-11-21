import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

const StyledInput: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={["rounded-sm border-2 px-2 py-1 mb-2", className].join(" ")}
    />
  );
};

export default StyledInput;
