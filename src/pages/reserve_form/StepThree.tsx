import { useState } from "react";
import { Input } from "../../components/input/Input";
import { DropDown } from "../../components/ui/DropDown";
import { CheckField } from "../../components/ui/CheckField";

const StepThree = () => {
  const options = [
    { label: "Masculino", value: "option1" },
    { label: "Feminino", value: "option2" },
  ];
  const nacionalityOptions = [
    { label: "Portugal", value: "option1" },
    { label: "Espanha", value: "option2" },
  ];

  const [, setGender] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [otherLanguage, setOtherLanguage] = useState<string>("");

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const handleLanguageChange = (language: string) => {
    if (languages.includes(language)) {
      setLanguages(languages.filter((lang) => lang !== language));
    } else {
      setLanguages([...languages, language]);
    }
  };

  const handleOtherLanguageChange = (value: string) => {
    setOtherLanguage(value);
  };

  return (
    <div>
      <h2 className="text-primary font-bold text-2xl mb-8">
        E agora sim vamos às informações da estrela principal.
      </h2>
      <form action="" className="">
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">3.1</span>
          Comecemos com coisas simples como nome, data de nascimento, género e
          nacionalidade.
        </h2>
        {/* Inputs para nome e data de nascimento */}
        <hr className="border-4 border-neutral my-6" />
        <h2 className="uppercase font-bold mb-4">género</h2>
        <DropDown options={options} onChange={handleGenderChange} />
        <hr className="border-4 border-neutral my-6" />
        <h2 className="uppercase font-bold mb-4">nacionalidade</h2>
        <DropDown options={nacionalityOptions} onChange={() => {}} />
        <hr className="border-4 border-primary my-6" />
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">3.2</span>
          Apresentações feitas, precisamos dos documentos de identificação.
        </h2>
        {/* Inputs para documentos de identificação */}
        <hr className="border-4 border-primary my-6" />
        <h2 className="text-lg mb-6">
          <span className="font-semibold text-primary text-2xl mr-3">3.3</span>E
          se é falando que nos entendemos, em que língua(s) é esta estrela
          fluente?
        </h2>
        <CheckField
          label="Português"
          checked={languages.includes("Português")}
          onChange={() => handleLanguageChange("Português")}
        />
        <CheckField
          label="Inglês"
          checked={languages.includes("Inglês")}
          onChange={() => handleLanguageChange("Inglês")}
        />
        <CheckField
          label="Francês"
          checked={languages.includes("Francês")}
          onChange={() => handleLanguageChange("Francês")}
        />
        <CheckField
          label="Outro(s)"
          checked={languages.includes("Outro(s)")}
          onChange={() => handleLanguageChange("Outro(s)")}
        />
        {languages.includes("Outro(s)") && (
          <Input
            type={"text"}
            placeholder="Sueco, Alemão"
            fullwidth
            variants="neutral"
            value={otherLanguage}
            onChange={(e) => handleOtherLanguageChange(e.target.value)}
          />
        )}
      </form>
    </div>
  );
};

export default StepThree;
