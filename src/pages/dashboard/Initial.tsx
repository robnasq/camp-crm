import { OrderedReserves } from "./components/OrderedReserves"

export const Initial = () => {
  return (
    <div className=" ">
      <header className="px-8 pb-4 rounded-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.09)]">
        <h2 className="text-primary font-bold text-2xl mt-4 mb-2 px-4 text-center">
        Olá Equipa MyCamp 
        </h2>
        <p className="ml-16">Bem-vindo de volta </p>
      </header>
      <div className="px-9">
      <section className="flex justify-center items flex-col">
        <h2 className="font-bold text-2xl mt-10 mb-2 px-4 text-center">Pedidos de reserva</h2>
        <OrderedReserves />
      </section>
      <section>
        <h2 className="font-bold text-2xl mt-10 mb-2 px-4 text-center">
          Sujestões de reservas
        </h2>
      </section>
      </div>
    
    </div>
  )
}
