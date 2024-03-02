import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../components/input/Input";
import MainLoginImg from "../../assets/main-image.jpeg";
import { Button } from "../../components/button/Button";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

interface NewPasswordProps {
  onPasswordSubmit: () => void;
}

const NewPassword: React.FC<NewPasswordProps> = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      onPasswordSubmit();
    }
  };

  return (
    <>
      <Input
        type="password"
        variants="neutral"
        fullwidth
        placeholder="Nova senha"
        value={password}
        onChange={handlePasswordChange}
      />
      <Input
        type="password"
        variants="neutral"
        fullwidth
        placeholder="Confirmar nova senha"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <Button type="submit" fullWidth variants="primary" onClick={handleSubmit}>
        Continuar
      </Button>
    </>
  );
};

const Success = () => {
  return (
    <div>
      <div className="">
        <span className=" bg-[#C5F4AA] top-[150px] rounded-full w-[50px] h-[50px] absolute   ">
          <Icon
            path={mdiCheckCircleOutline}
            size={2}
            className="relative left-[1px] top-[1px] text-[#269C2C]"
          />
        </span>
      </div>
      <h3 className="font-bold text-primary text-[40px]">Sucesso</h3>
      <p className="font-medium leading-7 text-black text-[24px]">
      A sua nova palavra-passe foi criada e já está associada à sua conta.
      </p>
      <p className="my-3 font-semibold text-neutral-medium leading-[18px] ">Valide se recebeu o seu email de confirmação e inicie sessão com as suas novas credenciais.</p>
      <Button type="button" variants="primary" fullWidth  >Iniciar sessão</Button>
    </div>
  );
};

export const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordSubmit = () => {
    setPasswordSuccess(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = email.includes("@");
    setValidEmail(isValidEmail);
    if (validEmail) {
      setEmail("");
    }
  };

  return (
    <div>
      <div className="md:flex md:justify-between md:items-center md:overflow-hidden md:h-[100vh]">
        <div className="px-10 py-[120px] md:px-[5%] md:mt-[60px]">
          {!passwordSuccess && (
            <>
              <header className="">
                <h2 className="text-primary font-bold text-[40px]">
                  {validEmail ? "Criar nova senha" : "Criar nova palavra passe"}
                </h2>
                <p className="font-medium text-neutral-medium leading-6 mt-6 mb-9">
                  {validEmail
                    ? "Insira sua nova palavra passe."
                    : "Insira o seu email para que nós possamos enviar-lhe instruções de como recuperar o acesso à sua conta."}
                </p>
              </header>
              <form onSubmit={handleSubmit} className="">
                {validEmail ? (
                  <NewPassword onPasswordSubmit={handlePasswordSubmit} />
                ) : (
                  <>
                    <Input
                      type={"text"}
                      variants="neutral"
                      fullwidth
                      placeholder="Email"
                      onChange={handleEmailChange}
                    />
                    <Button type="submit" fullWidth variants="primary">
                      Continuar
                    </Button>
                  </>
                )}
              </form>
            </>
          )}
          {passwordSuccess && (
            <>
              <Success />
            </>
          )}
        </div>
        <img
          src={MainLoginImg}
          alt=""
          className="max-md:hidden md:w-[60%] md:h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};
