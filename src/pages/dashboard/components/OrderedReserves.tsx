import { mdiAccountMultipleOutline, mdiCalendarMonthOutline } from "@mdi/js";
import Icon from "@mdi/react";

export const OrderedReserves = () => {
  return (
    <div className="w-[100%] h-[80%] shadow rounded-3xl flex">
      <div className="bg-primary  rounded-l-3xl w-[20%]"></div>
      <div className="pb-4">
        <h2 className="font-semibold my-6 mx-3 text-[20px]">
          Campos de ferias 2024
        </h2>
        <div>
          <span className="flex  font-semibold py-2">
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
        </div>
      </div>
    </div>
  );
};
