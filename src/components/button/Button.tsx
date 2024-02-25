import clsx from "clsx";
import React, { forwardRef } from "react";

interface IButton {
    size?: 'sm' | 'md' | 'lg';
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    variants?: 'reserve';
    fullWidth?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export const Button = forwardRef(function Button(
    {
        size ,
        type ,
        onClick,
        variants ,
        fullWidth ,
        children,
        className,
        ...props
    }: IButton, 
    ref: any
){
  return (
    <button onClick={onClick} ref={ref} type={type} 
    {...props}
    className={clsx('',
    {
        'w-full': fullWidth === true, 
        'px-6 py-4 text-start flex justify-between items-center  bg-[#554AA6] uppercase font-semibold  text-white rounded-3xl': variants === 'reserve',
    },
    className,
    )} >
    {children}
    </button>
  )
})
