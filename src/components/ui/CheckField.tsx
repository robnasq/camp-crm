import React from "react";

interface CheckFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckField: React.FC<CheckFieldProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="w-full shadow-soft py-3 pl-4 rounded-[10px] mb-2 pr-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-[18px]">{label}</p>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 mt-4 cursor-pointer border-neutral-medium rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
;