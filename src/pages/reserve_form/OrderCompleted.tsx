import Icon from "@mdi/react";
import MainImage from "../../assets/main-image.jpeg";
import {mdiCheckCircleOutline } from "@mdi/js";
import { Button } from "../../components/button/Button";

export const OrderCompleted = () => {
  return (
    <div>
      <div className=" z-10 rounded-b-[14px] md:hidden -top-2 relative h-[196px] w-full">
        <img
          src={MainImage}
          alt="Kids playing"
          className="h-full w-full object-cover rounded-b-[14px]"
        />
        <span className="bg-[#C5F4AA] rounded-full w-[50px] h-[50px] absolute top-[89%] left-[9%]">
          <Icon
            path={mdiCheckCircleOutline}
            size={2}
            className="relative left-[1px] top-[1px] text-[#269C2C]"
          />
        </span>
      </div>
        <span className="bg-[#C5F4AA] rounded-full w-[50px] h-[50px] absolute top-[18%] max-md:hidden left-[33%]">
          <Icon
            path={mdiCheckCircleOutline}
            size={2}
            className="relative left-[1px] top-[1px] text-[#269C2C]"
          />
        </span>
      <div className="px-10">
        <h2 className="font-bold text-primary text-[36px] mt-[130px] leading-9">
          Pedido <br /> concluido
        </h2>
        <p className="font-medium text-[13px] leading-[16px] text-neutral-medium mt-4 mb-6">
          Muito obrigada pelo seu pedido de reserva. Vamos analisá-lo e em breve
          comunicaremos se o mesmo foi validado. Esperamos a vinda do(s) seu(s)
          participante(s) com muito entusiasmo.
        </p>
        <Button type={"button"} fullWidth variants="primary">OK</Button>
      </div>
    </div>
  );
};
