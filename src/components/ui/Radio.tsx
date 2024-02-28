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
    <div>
      {options.map((option) => (
        <label
          key={option.value}
          className="capitalize cursor-pointer inline-block align-middle relative pl-6"
        >
          <span
            className={`h-[20px] w-[20px] rounded-full border-[3px] border-secondary transition-all duration-300 ease-in-out block relative  ${
              option.value === selectedValue ? "after:content-[''] after:h-[10px] after:w-[10px] after:bg-secondary after:rounded-full after:block after:absolute after:left-[50%] after:top-[50%] after:transform  after:translate-x-[-50%] after:translate-y-[-50%]" : ""
            }`}
          >
            {option.value === selectedValue ? (<span className="bg-secondary h-[10px] w-[10px] rounded-full" />): (<span />) }
          </span>
          <input
            type="radio"
            className="hidden"
            value={option.value}
            checked={option.value === selectedValue}
            onChange={() => handleOptionChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
