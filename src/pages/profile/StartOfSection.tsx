import Icon from "@mdi/react";
import { Input } from "../../components/input/Input";
import { Header } from "../../components/ui/Header";
import { Button } from "../../components/button/Button";
import { mdiInformationOutline } from '@mdi/js';


export const StartOfSection = () => {
  return (
    <div className="pb-[70px]">
      <Header>
        <div className="md:text-start">
          <h1 className="text-primary md:text-start text-end text-xl font-bold">
            Perfil
          </h1>
          <p className="text-[12px]">Definições gerais / Início de sessão</p>
        </div>
      </Header>
      <form className="px-10">
        <h2 className="font-bold text-[24px] my-4">Início de sessão</h2>
        <p className="text-neutral-medium">
          É muito simples o processo de mudar a palavra-passe, mas é necessário
          inserir a sua palavra-passe atual.
        </p>
        <hr className="border-primary  border-[4px] my-[52px] " />
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
          label="Insira sua palavra passe atual "
          placeholder="Palavra-passe atual"
        />
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
          label="Introduzir nova palavra-passe"
          placeholder="Palavra-passe atual"
        />
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
          label="Confirmar palavra-passe"
          placeholder=""
        />
        <span className="flex gap-4 mb-4">

          <Icon
            path={mdiInformationOutline}
            size={2}
            className="text-primary"
          />
          <p className="">
            Ao gravar uma nova palavra-passe irá fechar a sessão atual e será
            pedido para fazer um novo login com a sua nova palavra-passe.
          </p>
        </span>
        <Button type="submit" fullWidth variants="update">
          Gravar palavra-passe
        </Button>
      </form>
    </div>
  );
};
