import { useNavigate } from "react-router-dom";
import { OrderedReserves } from "./components/OrderedReserves";
import { ReservesSujestion } from "./components/ReservesSujestion";

export const Initial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form/reserve-form");
  };

  return (
    <div className="md:w-full ">
      <header className="px-8 pb-4 rounded-[28px]   max-md:shadow-[0_10px_10px_rgba(0,0,0,0.09)]">
        <h2 className="text-primary font-bold text-2xl mt-4 mb-2 px-4 text-center">
          Olá Equipa MyCamp <span className="max-md:hidden"> 👋 !</span>
        </h2>
        <p className="ml-16 md:text-center">Bem-vindo de volta </p>
      </header>
      <h2 className="font-bold text-2xl mt-10 mb-2 px-4 md:text-start md:ml-10 text-center">
        Pedidos de reserva
      </h2>
      <div className="px-9">
        <section className="flex justify-center items md:flex-row flex-col md:gap-3">
          <OrderedReserves />
        </section>
        <section className="md:flex md:flex-col">
          <h2 className="font-bold text-2xl md:text-start whitespace-nowrap mt-10 mb-4 px-4 text-center">
            Sujestões de reservas
          </h2>
        <section className="flex justify-center items md:flex-row flex-col md:gap-3">
            <ReservesSujestion onClick={handleClick} ButtonType={"button"} />
            <ReservesSujestion ButtonType={"button"} />
          </section>
        </section>
      </div>
    </div>
  );
};
