import { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import Icon from "@mdi/react";
import { mdiMinusCircleOutline } from "@mdi/js";
import { DropDown } from "../../components/ui/DropDown";

const StepTwo = () => {
  const [contactNumbers, setContactNumbers] = useState<
    { id: number; number: string }[]
  >([{ id: 1, number: "" }]);

  const addContactNumber = () => {
    const newId = contactNumbers.length + 1;
    setContactNumbers([...contactNumbers, { id: newId, number: "" }]);
  };

  const handleContactNumberChange = (id: number, value: string) => {
    const updatedContactNumbers = contactNumbers.map((item) =>
      item.id === id ? { ...item, number: value } : item
    );
    setContactNumbers(updatedContactNumbers);
  };

  const removeContactNumber = (id: number) => {
    const updatedContactNumbers = contactNumbers.filter(
      (item) => item.id !== id
    );
    setContactNumbers(updatedContactNumbers);
  };
  const [, setSelectedValue] = useState<string>("");

  const handleDrop= (value: string) => {
    setSelectedValue(value);
  };
  const options = [
    { label: "Portugal", value: "option1" },
    { label: "Espanha", value: "option3" },
    { label: "Holanda", value: "option4" },
    { label: "Inglaterra", value: "option5" },
  ];
  return (
    <div>
      <form action="" className="">  <h2 className="text-primary font-bold text-2xl mb-8">
      O encarregado de educação é uma figura fulcral em toda a jornada MyCamp.
      </h2>
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">2.1</span>
          Quem é o encarregado de educação e quais os seus contactos?{" "}
        </h2>
        <Input type={"text"} variants="neutral" fullwidth placeholder="Nome" />
        <Input
          type={"email"}
          variants="neutral"
          fullwidth
          placeholder="Email"
        />
        <hr className="border-neutral my-6 border-4" />
        <h2 className="font-bold ">Contacto telefónico</h2>
        {contactNumbers.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <Input
              type={"tel"}
              variants="neutral"
              fullwidth
              placeholder="Número de telefone"
              value={item.number}
              onChange={(e) =>
                handleContactNumberChange(item.id, e.target.value)
              }
            />
            <button
              type="button"
              className="ml-4 mb-2"
              onClick={() => removeContactNumber(item.id)}
            >
              <Icon
                path={mdiMinusCircleOutline}
                size={2}
                className="text-primary"
              />
            </button>
          </div>
        ))}
        <Button variants="update" type="button" onClick={addContactNumber}>
          Adicionar novo contacto
        </Button>
        <hr className="border-primary my-6 border-4" />
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">2.2</span>É
          necessário o Número de Identificação Fiscal (NIF) do encarregado de
          educação.
        </h2>
        <Input type={"text"} variants="neutral" fullwidth placeholder="NIF" />
        <hr className="border-primary my-6 border-4" />
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">2.3</span>E
          não nos podemos esquecer da nacionalidade. É importante para nós
          também.
        </h2>
        <DropDown onChange={handleDrop} options={options} />
      </form>
    </div>
  );
};

export default StepTwo;
