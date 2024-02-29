import { useState } from "react";
import { DropDown } from "../../components/ui/DropDown";
import { Input } from "../../components/input/Input";

const StepSix = () => {
  const options = [
    { label: "Indique que dados devem constar na fatura.", value: "option1" },
    { label: "Outros dados de faturacação", value: "option2" },
    { label: "Fatura sem NIF", value: "option2" },
  ];
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleDropChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <h2 className="text-primary font-bold text-2xl mb-8">
        Estamos quase no fim. Falta só mesmo os dados de faturação.
      </h2>
      <h2 className="text-lg mb-6">
        <span className="font-semibold text-primary text-2xl mr-3">6.1</span>
        Indique que dados devem constar na fatura.
      </h2>
      <DropDown options={options} onChange={handleDropChange} />

      <hr className="border-neutral border-4 my-8" />
      <h3 className="font-base mb-3 font-bold">NIF</h3>
      <Input type={"number"} fullwidth variants="neutral" placeholder="NIF" />

      <hr className="border-neutral border-4 my-8" />
      <h3 className="font-base mb-3 font-bold">Morada</h3>
      <Input
        type={"text"}
        fullwidth
        variants="neutral"
        placeholder="Rua da Santa Fé"
      />
      <Input type={"number"} fullwidth variants="neutral" placeholder="n° 37" />
      <div className="flex gap-1">
        <Input
          type={"number"}
          fullwidth
          variants="neutral"
          placeholder="2070"
        />
        <Input type={"number"} fullwidth variants="neutral" placeholder="024" />
        <Input
          type={"number"}
          fullwidth
          variants="neutral"
          placeholder="Pontéavel"
        />
      </div>
      <hr className="border-neutral border-4 flex my-8" />
      <div className="flex cursor-pointer mb-5 gap-3">
        <div className="">
          <input type="checkbox" id="checkbox" />
        </div>
          <label htmlFor="checkbox" className="font-regular cursor-pointer text-neutral-medium">
            Definir os presentes dados de faturação como dados de faturação por
            defeito.
          </label>
      </div>
    </div>
  );
};
""
export default StepSix;
