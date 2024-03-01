import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Sumarydata } from "../../reserves/components/SumaryData";
export const PersonSumaryDropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative mb-[70px]">
      <button
      type="button"
        className={`${
          menuOpen ? "bg-[#EDEBFF]" : ""
        }  w-full bg-white shadow-soft text-black transition-all duration-500 px-6 py-6 rounded-[10px] focus:outline-none`}
        onClick={handleToggle}
      >
        <span className="font-bold flex justify-between">
          <p>Participante 1 - Salomé Lino</p>
          <Icon
            path={mdiChevronDown}
            size={1}
            className={menuOpen ? "hidden transition-all duration-300" : ""}
          />
        </span>
      </button>
      <div
        className={`absolute min-h-[300px] pb-[70px] left-0 mt-2 w-full bg-white rounded-md shadow-lg transition-all duration-300 ${
          menuOpen ? "h-auto opacity-100" : "h-0 hidden opacity-0"
        } overflow-hidden`}
      >
        <h2 className="font-bold text-3xl my-8">Sumário</h2>
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          1. Semanas e protocolo
        </h2>
        <Sumarydata
          label="semana"
          variants="outline"
          placeholder="Semana 1-7 Julho"
        />
        <Sumarydata
          label="semana"
          variants="outline"
          placeholder="Semana 6-13 Julho"
        />
        <hr className="my-6 border-neutral border-4" />
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          2. Encarregado de educação{" "}
        </h2>
        <Sumarydata
          label="nome"
          variants="outline"
          placeholder="Alexander de Souza Lino"
        />
        <Sumarydata
          label="e-mail"
          variants="outline"
          placeholder="alexander.souza@gmail.com"
        />
        <Sumarydata
          label="morada"
          variants="outline"
          placeholder="Rua da Santa Fé, n.º362070-024 Pontével"
        />
        <Sumarydata
          label="contacto"
          variants="outline"
          placeholder="+351 243 773 346"
        />
        <Sumarydata
          label="nacionalidade"
          variants="outline"
          placeholder="Portugal"
        />
        <Sumarydata label="nif" variants="outline" placeholder="736 630 733" />
        <hr className="my-6 border-neutral border-4" />
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          3. Participante
        </h2>
        <Sumarydata
          label="nome"
          variants="outline"
          placeholder="Alexander de Souza Lino"
        />
        <Sumarydata
          label="data de nascimento"
          variants="outline"
          placeholder="14-07-2012"
        />
        <Sumarydata label="genero" variants="outline" placeholder="Feminino" />
        <Sumarydata
          label="nacionalidade"
          variants="outline"
          placeholder="Portugal"
        />
        <Sumarydata
          label="cartão de cidadão"
          variants="outline"
          placeholder="12570629 4 XZ7"
        />
        <Sumarydata
          label="número de utente"
          variants="outline"
          placeholder="178 926 555"
        />
        <Sumarydata
          label="fluente em"
          variants="outline"
          placeholder="Portugues, Sueco, Alemão"
        />
        <hr className="my-6 border-neutral border-4" />
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          4. Saúde do participante
        </h2>
        <Sumarydata
          label="restrições alimentares"
          variants="outline"
          placeholder={["Lactose", "glutem"]}
        />
        <Sumarydata
          label="alergias não alimentares"
          variants="outline"
        />
        <Sumarydata
          label="condições de saúde"
          variants="outline"
          placeholder="Condição ABC..."
        />
        <hr className="my-6 border-neutral border-4" />
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          5. Opções de reserva
        </h2>
        <Sumarydata
          label="alojamento"
          variants="outline"
          placeholder={[{ text: " 1-6 Julho", complemento: "Camaratas" }, { text: " 1-6 Julho", complemento: "Glaping"}]}
        />
          <Sumarydata
          label="aluguel kit roupa de cama"
          variants="outline"
          placeholder={[{ text: "1 - 13 Julho", complemento: "Sim" }, { text: " 1-13 Julho", complemento: "Sim"}]}
        />
          <Sumarydata
          label="cedência de imagem"
          variants="outline"
          placeholder={[{ text: " 1-6 Julho", complemento: "Sim" }, { text: " 6-13 Julho", complemento: "Sim"}]}
        />
          <Sumarydata
          label="serviço de fotográfia"
          variants="outline"
          placeholder={[{ text: " 1-6 Julho", complemento: "Sim" }, { text: " 1-6 Julho", complemento: "Sim"}]}
        />
          <Sumarydata
          label="mensagem"
          variants="outline"
          placeholder='Informação muito relevante que pai ou mãe escreveu sobre algo que não havia antes sido questionado no formulário e que aproveitando este espaço assim o fez.'
          />
           <hr className="my-6 border-neutral border-4" />
        <h2 className="font-bold text-2xl my-8 text-[#463D8C]">
          6. Dados de faturação
        </h2>
        <Sumarydata
          label="serviço de fotográfia"
          variants="outline"
          placeholder='Equipa My Camp'
        />
         <Sumarydata
          label="morada"
          variants="outline"
          placeholder='Rua da Santa Fé, n.º36
          2070-024 Pontével'
        />
          <Sumarydata
          label="nif"
          variants="outline"
          placeholder='986 234 872'
        />
        
      </div>
    </div>
  );
};
