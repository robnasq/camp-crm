import { useState } from "react";
import { DropDown } from "../../components/ui/DropDown";
import { RadioImage } from "../../components/ui/RadioImage";
import Cama from "./assets/camaratas.jpeg";
import Glaping from "./assets/glamping.jpeg";

const StepFive = () => {
  const options = [
    { label: "Camaratas", value: "option1", imageUrl: Cama },
    { label: "Glaping", value: "option2", imageUrl: Glaping },
  ];

  const [checkin, setCheckin] = useState<string>("");

  const handleCheckinChange = (value: string) => {
    setCheckin(value);
  };
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <h2 className="text-primary font-bold text-2xl mb-8">
        Agora é hora, não só de escolher o check-in, mas de fazer a cama e tirar
        uma foto.
      </h2>
      <h2 className="text-lg mb-6">
        <span className="font-semibold text-primary text-2xl mr-3">5.1</span>A
        que horas vem fazer o check-in do seu participante?
      </h2>
      <DropDown options={options} onChange={handleCheckinChange} />
      <hr className="border-primary border-4 my-8" />
      <h2 className="text-lg mb-6">
        <span className="font-semibold text-primary text-2xl mr-3">5.2</span>A
        Qual será o tipo de alojamento? Tem 2 opções. E precisa de roupa de
        cama?
      </h2>
      <h3 className="font-bold uppercase ">alojamento</h3>
      <div className="my-4 bg-[#463D8C1A] rounded-[10px] p-4 flex-col ">
        <h3 className="font-semibold text-left text-base mb-2">
          Semana 1 a 6 Julho
        </h3>
        <div className="flex items-center justify-center w-full">
          <RadioImage
            options={options}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
          />
        </div>
      </div>
      <hr className="border-neutral border-4 my-6" />
      <h2 className="uppercase font-bold mb-4 ">Aluguer kit de roupa cama</h2>
    </div>
  );
};

export default StepFive;
