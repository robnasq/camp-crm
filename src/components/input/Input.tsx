import clsx from "clsx";
import { HTMLAttributes, HTMLInputTypeAttribute, forwardRef } from "react";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  variants?: "outline" | 'neutral';
  label?: string;
  type: HTMLInputTypeAttribute;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  value?: string;
  fullwidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(function Input(
  {
    variants,
    label,
    type,
    size,
    placeholder,
    fullwidth,
    value,
    onChange,
    ...props
  }: IInputProps,
  ref: any
) {
  return (
    <div className="flex flex-col">
    <label className="mb-2">
        {label && <span className={clsx('block',
        {
          'text-neutral-medium  text-[10px] mb-6 top-1 font-bold uppercase': variants === 'outline',
          'font-bold text-neutral-medium text-[12px] mb-2 ml-1 ': variants === 'neutral',
        },
        )}>{label}</span>}
      <input
      className={clsx('',
      {
        'border-b-[5px] mb-6 font-semibold placeholder:text-black focus-visible:outline-none pb-5 focus-visible:border-primary focus-visible:border-b-4 border-neutral w-full h-10': variants === 'outline',
        'bg-[#F5F5F5] border-[#D9D9D9] py-[17px] px-4 rounded-[5px] placeholder:text-neutral-dark font-medium border ': variants === 'neutral',
        'w-full': fullwidth === true ,
      },
      )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    </label>
    </div>

  );
});
