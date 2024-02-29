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

export const Radiooption: React.FC<RadioProps> = ({
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
          className={`mx-2 bg-[#463D8C] w-[120px] rounded-[10px] shadow-soft p-2 py-[7px] px-3 ${
            option.value === selectedValue ? "bg-white" : "bg-[#F4F4FB]"
          } `}
        >
          <div className="rounded-[10px] w-full"></div>
          <label className="capitalize justify-between flex items-center gap-1 cursor-pointer ">
         
            <div>
              <input
                type="radio"
                className="hidden"
                value={option.value}
                checked={option.value === selectedValue}
                onChange={() => handleOptionChange(option.value)}
              />
              <span
                className={`h-[20px] w-[20px] rounded-full border-[3px] border-[#7369C1] transition-all duration-300 ease-in-out block relative  ${
                  option.value === selectedValue
                    ? "after:content-[''] after:h-[10px] after:w-[10px] after:bg-secondary after:rounded-full after:block after:absolute after:left-[50%] after:top-[50%] after:transform  after:translate-x-[-50%] after:translate-y-[-50%]"
                    : ""
                }`}
              ></span>
            </div>
            <span
              className={`ml-2 text-[13px] my-2 pr-9 font-bold ${
                option.value === selectedValue ? "text-secondary" : "text-black"
              } `}
            >
              {option.label}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
