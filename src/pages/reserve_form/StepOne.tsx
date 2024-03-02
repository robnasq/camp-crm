import { useState } from "react";
import { Radio } from "../../components/ui/Radio";
import { DropDown } from "../../components/ui/DropDown";

const Weeks = () => {
  const [isChecked, setIsChecked] = useState(false);
 
  const toggleCheckbox = () => {
     setIsChecked(!isChecked);
  };
 
  return (
     <label className="w-full shadow py-3 pl-4 rounded-[10px] mb-2 pr-6 cursor-pointer" htmlFor="default-checkbox" onClick={toggleCheckbox}>
       <div className="flex items-center justify-between">
         <div className="rounded-full w-5 h-5 bg-[#FBBE11]"></div>
         <div>
           <p className="font-semibold text-[18px]">1 a 6 de julho</p>
           <p className="text-neutral-medium text-sm font-bold uppercase">
             Pré esgotada
           </p>
         </div>
         <div>
           <div className="flex items-center mb-4">
             <input
               id="default-checkbox"
               type="checkbox"
               checked={isChecked}
               onChange={toggleCheckbox} // This is optional if you're controlling the checkbox state
               className="w-5 h-5 mt-4 cursor-pointer border-neutral-medium rounded"
             />
             <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
           </div>
         </div>
       </div>
     </label>
  );
 };
 

const StepOne = () => {
  const options = [
    { label: "Sim", value: "option1" },
    { label: "Não", value: "option2" },
  ];
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <h2 className="text-primary font-bold text-2xl mb-8">
        A sua reserva começa aqui e agora! Vamos lá!
      </h2>
      <form>
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">1.1</span>
          Escolha a semana ou as semnas que pretende reservar
        </h2>
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-4">
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
          <Weeks />
        </div>
        <hr className="border-primary border-4 my-8" />

        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">1.2</span>E
          vem atravéz de algum protocolo?
        </h2>
        <div className="flex justify-center items-center">
          <Radio
            options={options}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </div>
        {selectedValue === "option1" && (
          <DropDown options={options} onChange={handleRadioChange} />
        )}
      </form>
    </div>
  );
};

export default StepOne;
