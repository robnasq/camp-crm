import Icon from "@mdi/react";
import { Header } from "../../components/ui/Header";
import { Tag } from "../../components/ui/Tag";
import { UserData } from "./components/UserData";
import { mdiCheck, mdiPencil, mdiPencilOutline, mdiTrashCan, mdiTrashCanOutline } from "@mdi/js";
import { Button } from "../../components/button/Button";

export const UserProfile = () => {
  return (
    <div>
      <Header>
        <div>
          <h1 className="text-primary text-end text-xl font-bold">Perfil</h1>
          <p>Definições gerais</p>
        </div>
      </Header>
      <div className="px-10">
        <section className="flex flex-col items-center justify-center">
          <div className="bg-secondary shadow rounded-full w-[128px] h-[132px]" />
          <span className="relative bottom-6">
            <button className="text-[13px] text-white bg-primary rounded-2xl px-4 py-1 ">
              Editar
            </button>
          </span>
        </section>
        <form>
          <h2 className="font-bold text-2xl my-8 text-center ">
            Informações pessoais
          </h2>
          <UserData placeholder="Nome" label="Nome" variants="outline" />
          <UserData placeholder="Email" label="Email" variants="outline" />
          <UserData
            placeholder="Rua Borsalino Kumaru 12"
            label="Morada"
            variants="outline"
          />
          <UserData
            placeholder="+351 243 773 346"
            label="Contacto"
            variants="outline"
          />
          <UserData
            placeholder="Portugal"
            label="Nacionalidade"
            variants="outline"
          />
          <UserData placeholder="875 908 456" label="NIF" variants="outline" />
        </form>
        <hr className="border-primary  border-[4px] my-[52px] " />
        <section>
          <h2 className="font-bold text-3xl mb-8">Dados da faturação</h2>
          <div className="bg-[#F4F4FB] shadow mb-6 w-full px-6 py-8 rounded-2xl">
            <h2 className="text-purple-secondary text-base uppercase text-center font-bold mb-4">
              Encarregado de educação
            </h2>
            <hr className="border-purple-secondary border-[4px] mb-10" />
            <div className="flex flex-col ">
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  Titular
                </p>
                <p className="font-semibold ">Equipa MyCamp</p>
              </span>
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  Morada
                </p>
                <p className="font-semibold ">
                  Rua da Santa Fé, .º36 2070-024 Pontével
                </p>
              </span>
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  NIF
                </p>
                <p className="font-semibold ">097 675 468</p>
              </span>
            </div>
            <Tag size="sm" variants={"purple"}>
              <p>Dados faturação por defeito </p>
              <Icon path={mdiCheck} size={1} className="text-[#61B232]" />
            </Tag>
          </div>
          <div className="bg-white border-neutral border-2 shadow mb-6 w-full px-6 py-8 rounded-2xl">
            <header className="flex justify-between">
              <h2 className="text-purple-secondary text-base uppercase text-start font-bold mb-4">
                Empresa
              </h2>
              <span className="flex gap-2 text-[#4198D4]">
                <Icon path={mdiPencilOutline} size={1} />
                <Icon path={mdiTrashCanOutline} size={1} />
              </span>
            </header>
            <hr className="border-neutral-medium border-[2px] mb-10" />
            <div className="flex flex-col ">
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  Titular
                </p>
                <p className="font-semibold ">Equipa MyCamp</p>
              </span>
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  Morada
                </p>
                <p className="font-semibold ">
                  Rua da Santa Fé, .º36 2070-024 Pontével
                </p>
              </span>
              <span className="mb-6">
                <p className="uppercase text-[10px] font-bold text-neutral-medium">
                  NIF
                </p>
                <p className="font-semibold ">097 675 468</p>
              </span>
            </div>
            <Tag size="sm" variants={"neutral"}>
              <p>Tornar dados faturação por defeito </p>
            </Tag>
          </div>
          <Button type={"button"} variants="update" className="mt-6 mb-[80px]" >
            Adcionar novos dados faturação
          </Button>
        </section>
      </div>
    </div>
  );
};
