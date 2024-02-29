import React from "react";

interface Option {
  label: string;
  value: string;
  imageUrl?: string; 
}

interface RadioProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const RadioImage: React.FC<RadioProps> = ({
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
          className={`mx-2 bg-[#463D8C] w-[120px] rounded-[10px] shadow-soft  p-2 py-[7px] px-3 ${option.value === selectedValue ? 'bg-white' : 'bg-[#F4F4FB]' } `}
        >
          <div className="rounded-[6px] w-full h-[78px]">
            <img src={option.imageUrl} alt={option.label} className="w-full rounded-[6px] h-full object-cover" />
          </div>
          <label className="capitalize justify-between flex-col cursor-pointer flex items-center">
            <span className={`ml-2 text-[13px] my-2 font-bold ${option.value === selectedValue ? 'text-secondary' : 'text-black' } `}>
              {option.label}
            </span>
            <div>
              <span
                className={`h-[20px] w-[20px] rounded-full border-[3px] border-[#7369C1] transition-all duration-300 ease-in-out block relative  ${
                  option.value === selectedValue
                    ? "after:content-[''] after:h-[10px] after:w-[10px] after:bg-secondary after:rounded-full after:block after:absolute after:left-[50%] after:top-[50%] after:transform  after:translate-x-[-50%] after:translate-y-[-50%]"
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
