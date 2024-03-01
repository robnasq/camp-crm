import { useParams } from "react-router-dom";
import { Header } from "../../components/ui/Header";
import Icon from "@mdi/react";
import { mdiAccountMultipleOutline, mdiCalendarMonthOutline } from "@mdi/js";
import { Tag } from "../../components/ui/Tag";
import { PersonDropDown } from "./components/PersonDropDown";
import MainImage from '../../assets/main-image.jpeg'

export const ReserveInfo = () => {
  const id = useParams();
  return (
    <div>
      <Header>
        <div className="">
          <h2 className="font-bold text-2xl text-end text-primary">Reservas</h2>
          <p className="text-end">Informação da reserva</p>
        </div>
      </Header>
      <div className=" z-10 rounded-b-[14px] -top-16 relative h-[196px] w-full">
        <img src={MainImage} alt="Kids playing" className="h-full w-full object-cover rounded-b-[14px]" />
      </div>
      <div className="px-10 pb-5">
        <section className="">
          <h2 className="font-bold mb-8 text-3xl text-center">
            Campos de férias 2024
          </h2>
          <span className="flex items-center justify-between">
            <span className="flex font-semibold py-2">
              <Icon
                path={mdiCalendarMonthOutline}
                size={1}
                className="mx-3 text-primary"
              />
              01 a 06 de Julho
            </span>
            <span className="flex  font-semibold y-2">
              <Icon
                path={mdiAccountMultipleOutline}
                size={1}
                className="mx-3 text-primary"
              />
              2 Participantes
            </span>
          </span>
          <div>
          <span className="flex items-center mt-4 gap-3">
            <p className="text-neutral-medium">Estado:</p>
            <Tag variants={"alert"} size="sm" >Para pagamento</Tag>
          </span>
          <span className="flex mt-4">
            <p className="text-neutral-medium">Fatura:</p>
            <span className="flex ml-3 justify-between w-full">
              <p className="font-bold">A89765/2024</p>
              <p className="text-neutral-medium">385,85€</p>
            </span>
          </span>
          </div>
        </section>
        <hr className="border-4 border-primary my-[52px]" />
        <section className="">
          <PersonDropDown />
        </section>
      </div>
    </div>
  );
};
