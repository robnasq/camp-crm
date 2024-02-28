import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

interface DropDownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  selectedValue?: string;
}

export const DropDown: React.FC<DropDownProps> = ({
  options,
  onChange,
  selectedValue,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOptionClick = (value: string) => {
    onChange(value);
    setMenuOpen(false);
  };

  return (
    <div className="relative mb-[80px]">
      <button
      type="button"
        className={`${
          menuOpen ? "bg-[#EDEBFF]" : ""
        }  w-full bg-white shadow-soft text-black transition-all duration-500 px-6 py-6 rounded-[10px] focus:outline-none`}
        onClick={handleToggle}
      >
        <span className="font-bold flex justify-between">
          <p>
            {options.find((opt) => opt.value === selectedValue)?.label ||
              "Selecione"}
          </p>
          <Icon
            path={mdiChevronDown}
            size={1}
            className={menuOpen ? "hidden transition-all duration-300" : ""}
          />
        </span>
      </button>
      <div
        className={`absolute min-h-[100px] shadow-soft pb-[70px] left-0 mt-2 w-full bg-white rounded-md shadow-lg transition-all duration-300 ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="px-6 cursor-pointer py-[18px] border-b border-neutral hover:bg-[#EDEBFF] hover:bg-gray-100"
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
