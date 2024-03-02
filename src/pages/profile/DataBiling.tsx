import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Header } from "../../components/ui/Header";

export const DataBiling = () => {
  return (
    <div>
      <Header>
        <div className="md:text-start">
          <h1 className="text-primary md:text-start text-end text-xl font-bold">
            Perfil
          </h1>
          <p className="text-[12px]">Definições gerais / Dados da faturação</p>
        </div>
      </Header>

      <form className="px-10">
        <h2 className="font-bold text-[24px] my-4">Dados de faturação</h2>
        <p className="text-neutral-medium">
          É muito simples o processo de editar ou adicionar dados de faturação.
        </p>
        <hr className="border-primary  border-[4px] my-[52px] " />
        <p className="text-neutral-medium">
          É muito simples o processo de editar ou adicionar dados de faturação.
        </p>
        <Input
          type={"text"}
          variants="neutral"
          fullwidth
          placeholder="Empresa"
        />
        <hr className="border-neutral  border-[4px] my-5 " />
        <Input type={"text"} variants="neutral" fullwidth placeholder="Nome" />
        <hr className="border-neutral  border-[4px] my-5 " />
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
          placeholder="NIF"
        />
        <hr className="border-neutral  border-[4px] my-5 " />
        <h3 className="font-bold text-[12px]">Morada</h3>
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
        />
        <Input
          type={"password"}
          variants="neutral"
          fullwidth
        />
        <div className="flex gap-3">
          <Input
            type={"password"}
            variants="neutral"
            placeholder="0000"
            fullwidth
          />
          <Input
            type={"password"}
            variants="neutral"
            placeholder="000"
            fullwidth
          />
          <Input
            type={"password"}
            variants="neutral"
            placeholder="Local"
            fullwidth
          />
        </div>
        <hr className="border-neutral  border-[4px] my-5 " />
      <div className="flex cursor-pointer mb-5 gap-3">
        <div className="">
          <input type="checkbox" id="checkbox" />
        </div>
          <label htmlFor="checkbox" className="font-regular cursor-pointer text-neutral-medium">
          Definir os presentes dados de faturação como dados de faturação por defeito.
          </label>
      </div>
        <Button type="submit" fullWidth variants="update">
          Gravar dados de faturação
        </Button>
      </form>
    </div>
  );
};
