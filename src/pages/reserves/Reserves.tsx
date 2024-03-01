import Icon from "@mdi/react";
import { Header } from "../../components/ui/Header";
import { mdiAlertDecagramOutline } from "@mdi/js";
import { Button } from "../../components/button/Button";
import { OrderedReserves } from "../dashboard/components/OrderedReserves";
import { useNavigate } from "react-router-dom";

export const Reserves = () => {
  const navigate = useNavigate();

  const navToReserve = () => {
    navigate(`/reserves/${1}`)
  }
  return (
    <div>
      <Header>
        <div>
          <h1 className="text-xl text-primary font-bold">Reservas</h1>
          <p className="text-end">Histórico</p>
        </div>
      </Header>
      <main className="px-10 py-10">
        <h2 className="font-bold text-[24px]">Reservas atuais</h2>
        <div className="rounded-[20px] flex-col flex justify-center  bg-[#F4F4FD] mt-6 mb-[56px] items-center w-full py-7 px-8">
          <Icon
            path={mdiAlertDecagramOutline}
            size={2}
            className="text-secondary text-center"
          />
          <p className="text-secondary font-[400] text-center text-[18px] mb-5  ml-2">
            Não tem reservas de <br /> momneto.
          </p>
          <Button variants="primary" fullWidth type={"button"}>
            Criar reserva
          </Button>
        </div>
        <section className="">
            <h2 className="font-bold text-[24px]">Historico</h2>
        </section>
        <div className="md:flex gap-3">
            <OrderedReserves onClick={navToReserve} />
            <OrderedReserves />
        </div>
      </main>
    </div>
  );
};
