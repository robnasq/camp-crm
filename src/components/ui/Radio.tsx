import React from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleOptionChange = (value: string) => {
    if (value !== selectedValue) {
      onChange(value);
    }
  };

  return (
    <div className="flex mb-4">
      {options.map((option) => (
        <div
          key={option.value}
          className="mr-4 bg-[#463D8C] w-[130px] h-[32] rounded-[40px] py-[7px] px-3 "
        >
          <label className="capitalize justify-between cursor-pointer flex items-center">
            <span className="ml-2 text-white text-[13px] font-medium">
              {option.label}
            </span>
            <div>
              <span
                className={`h-[20px] w-[20px] rounded-full border-[3px] border-[#7369C1] transition-all duration-300 ease-in-out block relative  ${
                  option.value === selectedValue
                    ? "after:content-[''] after:h-[10px] after:w-[10px] after:bg-[#61B232] after:rounded-full after:block after:absolute after:left-[50%] after:top-[50%] after:transform  after:translate-x-[-50%] after:translate-y-[-50%]"
                    : ""
                }`}
              ></span>
              <input
                type="radio"
                className="hidden"
                value={option.value}
                checked={option.value === selectedValue}
                onChange={() => handleOptionChange(option.value)}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};
