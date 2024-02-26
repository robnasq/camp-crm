import clsx from "clsx";
import { HTMLAttributes, HTMLInputTypeAttribute, forwardRef } from "react";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  variants?: "outline";
  label?: string;
  type: HTMLInputTypeAttribute;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(function Input(
  {
    variants,
    label,
    type,
    size,
    placeholder,
    value,
    onChange,
    ...props
  }: IInputProps,
  ref: any
) {
  return (
    <div>
    <label className="mb-6">
        {label && <span className={clsx('',
        {
          'text-neutral-medium  text-[10px] mb-6 top-1 font-bold uppercase': variants === 'outline',
        },
        )}>{label}</span>}
      <input
      className={clsx('',
      {
        'border-b-[5px] mb-6 font-semibold placeholder:text-black focus-visible:outline-none pb-5 focus-visible:border-primary focus-visible:border-b-4    border-neutral w-full h-10': variants === 'outline',
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
