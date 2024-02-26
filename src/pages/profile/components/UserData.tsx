import clsx from "clsx";

interface IUserData  {
  variants?: "outline";
  label?: string;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  onClick?: () => void;
}

export const UserData = (function Input(
  {
    variants,
    label,
    size,
    placeholder,
    onClick,
    ...props
  }: IUserData,
) {
  return (
    <div>
    <div className="mb-6">
        {label && <span className={clsx('',
        {
          'text-neutral-medium  text-[10px] mb-6 top-1 font-bold uppercase': variants === 'outline',
        },
        )}>{label}</span>}
      <div
      className={clsx('',
      {
        'border-b-[5px] mb-6 font-semibold flex justify-between text-black focus-visible:outline-none pb-5 focus-visible:border-primary focus-visible:border-b-4 border-neutral w-full h-10': variants === 'outline',
      },
      )}
        {...props}
      >
        {placeholder}
        <button onClick={onClick} className="text-primary">Editar</button>
      </div>
    </div>
    </div>

  );
});
