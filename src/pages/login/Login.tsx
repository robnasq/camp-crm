import Google from "./assets/google.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import MainLoginImg from './assets/main-ogin-img.jpeg'

import { create } from "zustand";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";

interface EmailProps {
  email: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface Store {
  email: string;
  setEmail_: (email: string) => void;
}

export const useStore = create<Store>((set) => ({
  email: "",
  setEmail_: (email) => set({ email }),
}));

const Email: React.FC<EmailProps> = ({ email, onEmailChange, onSubmit }) => {
  return (
    <div className="px-10 w-full py-[80px] mb-[90px]">
      <header className="">
        <h1 className="font-bold text-[64px] text-primary">Olá.</h1>
        <p className="text-[24px] text-neutral-dark font-medium leading-7">
          Bem-vindo(a) à área de cliente My Camp!
        </p>
      </header>
      <div className="mt-8">
        <div className="flex items-center my-3 justify-between px-4 py-2 cursor-pointer font-semibold border border-[#F5F5F5] shadow-soft rounded-[10px] gap-4">
          <img src={Google} alt="" className="w-8 h-8" />
          <p className="">Continuar com Google</p>
        </div>
        <div className="flex items-center my-3 justify-between px-4 py-2 cursor-pointer font-semibold border border-[#F5F5F5] shadow-soft rounded-[10px] gap-4">
          <img src={Facebook} alt="" className="w-8 h-8" />
          <p className="">Continuar com Facebook</p>
        </div>
        <div className="flex items-center my-3 justify-between px-4 py-2 cursor-pointer font-semibold border border-[#F5F5F5] shadow-soft rounded-[10px] gap-4">
          <img src={Instagram} alt="" className="w-8 h-8" />
          <p className="">Continuar com Instagram</p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <hr className="border w-full border-primary" />
          <p>ou</p>
          <hr className="border w-full border-primary" />
        </div>
        <form onSubmit={onSubmit} className="">
          <Input
            type={"email"}
            placeholder={"Email"}
            variants="neutral"
            fullwidth
            value={email}
            onChange={onEmailChange}
          />
          <Button type={"submit"} variants="primary" fullWidth>
            Continuar
          </Button>
          <span className="text-[14px] my-2 flex justify-center gap-3 items-center text-neutral-medium">
            <p>Sem conta My Camp?</p>
            <Link to={"/"} className="text-primary">
              Criar conta
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
const Password: React.FC = () => {
  const { email } = useStore();
  return (
    <div className="px-10 pt-24 pb-16 w-full md:py-16 md:mb-20 lg:mb-32">
      <header className="">
        <h1 className="font-bold text-[64px] text-primary">Quase...</h1>
        <p className="text-[24px] text-neutral-dark font-medium mb-8 mt-4 leading-7">
          Insira sua <br /> palavra passe.
        </p>
      </header>
      <div className="mb-[90px]">
        <form action="" className="">
          <Link to={"/"} className="text-primary font-medium text-[13px]">
            Esqueceu-se da palavra-passe?
          </Link>
          <div className="mt-4">
            <Input
              type={"email"}
              placeholder={email}
              aria-disabled
              aria-readonly
              value={email}
              variants="neutral"
              fullwidth
            />
            <Input
              type={"password"}
              variants="neutral"
              fullwidth
              placeholder="Senha"
            />
          </div>
          <Button type="submit" variants="primary" fullWidth className="mt-4">Continuar</Button>
          <span className="text-[14px] my-2 flex justify-center gap-3 items-center text-neutral-medium">
            <p>Sem conta My Camp?</p>
            <Link to={"/"} className="text-primary">
              Criar conta
            </Link>
            </span>
        </form>
      </div>
    </div>
  );
};
export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const { setEmail_ } = useStore();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = email.includes("@");
    setEmail_(email);
    setValidEmail(isValidEmail);
  };

  return (
    <div className="md:flex md:justify-between md:items-center md:overflow-hidden md:h-[100vh]">
      <div className="md:px-[5%] w-full md:flex  md:items-center md:mt-[60px] ">
      {validEmail ? (
        <Password />
      ) : (
        <Email
          email={email}
          onEmailChange={handleEmailChange}
          onSubmit={handleSubmit}
        />
      )}
      </div>
      <img src={MainLoginImg} alt="" className="max-md:hidden md:w-[60%] md:h-[100vh] object-cover"   />
    </div>
  );
};
