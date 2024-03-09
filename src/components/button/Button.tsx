import clsx from "clsx";
import React, { forwardRef } from "react";

interface IButton {
  size?: "sm" | "md" | "lg";
  type: "button" | "submit" | "reset";
  onClick?: any;
  variants?: "reserve" | 'update' | 'primary';
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Button = forwardRef(function Button(
  {
    size,
    type,
    onClick,
    variants,
    fullWidth,
    children,
    className,
    ...props
  }: IButton,
  ref: any
) {
  return (
    <button
      onClick={onClick}
      ref={ref}
      type={type}
      {...props}
      className={clsx(
        "z-[1000]",
        {
          "w-full": fullWidth === true,
          "px-6 py-4 text-start flex justify-between items-center  bg-[#554AA6] uppercase font-semibold  text-white rounded-3xl":
            variants === "reserve",
            'rounded-[5px] bg-[#FBBE11] w-full text-white font-[600] py-3 ':  variants === 'update',
            'bg-primary text-white font-[600] py-[8px] px-6 rounded-[10px]': variants === 'primary',
        },
        className
      )}
    >
      {children}
    </button>
  );
});
