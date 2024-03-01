import { Button } from "../../components/button/Button";
import { PersonSumaryDropDown } from "./components/PersonSumaryDropDown";

const StepSeven = () => {
  return (
    <div>
      <div className="my-3">
      <Button type={"button"} variants="update" fullWidth >Adcionar participante</Button>
      </div>
      <PersonSumaryDropDown />
      <div className="flex cursor-pointer mb-5 gap-3">
        <div className="">
          <input type="checkbox" id="checkbox" />
        </div>
          <label htmlFor="checkbox" className="font-regular cursor-pointer text-neutral-medium">
          Concordo com os Termos e Condições, Política de Privacidade e autorizo a utilização de todos os dados pessoais aqui presentes para os fins mencionados.
          </label>
      </div>
    </div>
  );
};

export default StepSeven;
