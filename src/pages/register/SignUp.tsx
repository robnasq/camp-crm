import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { useState } from "react";
import { Modal } from "./components/ThanksModal";
import MainLoginImg from '../login/assets/main-ogin-img.jpeg'


export const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="md:flex md:justify-between md:items-center md:overflow-hidden md:h-[100vh]">
    <div className="px-10 py-[120px] md:px-[5%] md:mt-[60px]  ">
      <header className="">
        <h2 className="text-primary font-bold text-[40px]">Nova conta.</h2>
        <p className="font-medium text-neutral-dark text-2xl leading-6 mt-6 mb-9">
          Insira seu Email para começar.
        </p>
      </header>
      <form action="f" className="">
        <Input type={"text"} variants="neutral" fullwidth placeholder="Email" />
        <div className="flex cursor-pointer mb-5 mt-3 items-center gap-3">
          <div className="">
            <input className="w-5 h-5 " type="checkbox" id="checkbox" />
          </div>
          <label
            htmlFor="checkbox"
            className="font-regular cursor-pointer text-neutral-medium"
          >
            Concordo com os Termos e Condições e autorizo a utilização dos meus
            dados pessoais para os fins mencionados
          </label>
        </div>
        <Button
          type="button" // Altere o tipo para "button" para evitar o envio do formulário
          onClick={handleOpenModal} // Chame a função para abrir o modal no evento onClick
          variants="primary"
          fullWidth
        >
          Continuar
        </Button>
        <span className="text-[14px] my-2 flex justify-center flex-col items-center text-neutral-medium">
          <p>Prefere iniciar com rede social?</p>
          <Link to={"/"} className="text-primary">
            Voltar ao acrâ inicial
          </Link>
        </span>
      </form>
      {isModalOpen && <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />}
    
    </div>
      <img src={MainLoginImg} alt="" className="max-md:hidden md:w-[60%] md:h-[100vh] object-cover"   />
    </div>
  );
};
