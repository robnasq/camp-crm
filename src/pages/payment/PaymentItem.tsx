export const PaymentItem = () => {
  return (
    <div className="flex items-center mb-6 justify-between">
      <div className="">
        <div className="w-16 h-14 bg-neutral-medium rounded-[8px]"></div>
      </div>
      <div className="">
        <div>
          <h2 className="font-bold">Campos de ferias</h2>
          <span className="text-[10px] font-semibold text-neutral-medium">
            <p>01 a 06 Julho</p>
            <p>FAT A02845/2023</p>
            <p>Pago 19/02</p>
          </span>
        </div>
      </div>
      <span className="font-bold">€180,00</span>
    </div>
  );
};
