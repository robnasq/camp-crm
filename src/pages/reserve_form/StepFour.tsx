import { mdiMinusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { DropDown } from "../../components/ui/DropDown";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

const StepFour = () => {
  const [restrictions, setRestrictions] = useState<
    { id: number; number: string }[]
  >([{ id: 1, number: "" }]);

  const [condition, seetCondition] = useState<
    { id: number; condition: string }[]
  >([{ id: 1, condition: "" }]);

  const addRestriction = () => {
    const newId = restrictions.length + 1;
    setRestrictions([...restrictions, { id: newId, number: "" }]);
  };

  const addCondition = () => {
    const newId = condition.length + 1;
    seetCondition([...condition, { id: newId, condition: "" }]);
  };

  const handleChangeRestriction = (id: number, value: string) => {
    const updatedrestrictions = restrictions.map((item) =>
      item.id === id ? { ...item, number: value } : item
    );
    setRestrictions(updatedrestrictions);
  };

  const handleChangeCondition = (id: number, value: any) => {
    const updateCondition = condition.map((item) =>
      item.id === id ? { ...item, condition: value } : item
    );
    seetCondition(updateCondition);
  };
  const removerestriction = (id: number) => {
    const updatedrestrictions = restrictions.filter((item) => item.id !== id);
    setRestrictions(updatedrestrictions);
  };

  return (
    <div>
      <h2 className="text-primary font-bold text-2xl mb-8">
        Vamos falar sobre saúde! É essencial saber as condições e necessidades.
      </h2>
      <h2 className="text-lg mb-6">
        <span className="font-semibold text-primary text-2xl mr-3">4.1</span>O
        seu participante tem algumas condições de saúde?
      </h2>
      <h3 className="uppercase font-bold">restrições alimentares</h3>
      <div className="pt-6 pb-3">
        {restrictions.map((item) => (
          <div
            key={item.id}
            className="items-center relative max-h-[70px]  mb-4"
          >
            <div className="w-[80%]">
              <DropDown
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                ]}
                onChange={(value) => handleChangeRestriction(item.id, value)}
              />
            </div>
            <button
              type="button"
              className=" absolute top-3 right-0 ml-4 mb-2"
              onClick={() => removerestriction(item.id)}
            >
              <Icon
                path={mdiMinusCircleOutline}
                size={2}
                className="text-primary"
              />
            </button>
          </div>
        ))}
      </div>
      <div className="my-3">
        <Button type="button" variants="update" onClick={addRestriction}>
          Adcionar restrição
        </Button>
      </div>
      <hr className="my-6 border-4 border-neutral" />
      <h3 className="font-bold mb-4 uppercase">Alergias não alimentares</h3>
      <div className="pt-6 pb-3">
        {restrictions.map((item) => (
          <div
            key={item.id}
            className="items-center relative max-h-[70px]  mb-4"
          >
            <div className="w-[80%]">
              <DropDown
                options={[
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                ]}
                onChange={(value) => handleChangeRestriction(item.id, value)}
              />
            </div>
            <button
              type="button"
              className=" absolute top-3 right-0 ml-4 mb-2"
              onClick={() => removerestriction(item.id)}
            >
              <Icon
                path={mdiMinusCircleOutline}
                size={2}
                className="text-primary"
              />
            </button>
          </div>
        ))}
      </div>
      <Button type="button" variants="update" onClick={addRestriction}>
        Adcionar restrição
      </Button>

      <hr className="my-6 border-4 border-neutral" />
      <h3 className="font-bold mb-4 uppercase">Condições de saúde</h3>
      {condition.map((item) => (
        <div key={item.id}>
        <Input
          type={"text"}
          variants="neutral"
          placeholder="Condição ABC..."
          fullwidth
          onChange={(value) => handleChangeCondition(item.id, value)}
        />
        <textarea className="w-full mt-4 h-[72px] px-3 py-2  bg-neutral rounded-[5px] placeholder:font-medium text-[12px] placeholder:text-black" placeholder="Indique qual a medicação para a condição acima descrita"></textarea>
        </div>
      ))}
      <div className="my-3">
      <Button type="button" variants="update" onClick={addCondition}>
        Adcionar Condição
      </Button>
      </div>
    </div>
  );
};

export default StepFour;
