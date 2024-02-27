import Icon from "@mdi/react";
import { Header } from "../../components/ui/Header";
import { mdiAlertDecagramOutline } from "@mdi/js";
import { PaymentItem } from "./PaymentItem";
import { Tag } from "../../components/ui/Tag";

export const Payments = () => {
  return (
    <div>
      <Header>
        <div>
          <h2 className="font-bold text-2xl text-end text-primary">
            Pagamentos
          </h2>
          <p className="text-end">Histórico</p>
        </div>
      </Header>
      <div className="px-10">
        <div className="rounded-[20px] flex-col flex justify-center  bg-[#F4F4FD] mt-6 mb-[56px] items-center w-full py-7 px-8">
          <Icon
            path={mdiAlertDecagramOutline}
            size={2}
            className="text-secondary text-center"
          />
          <p className="text-secondary font-[400] text-center text-[18px] mb-5  ml-2">
            Não tem qualquer informação relativa a pagamentos de momento.
          </p>
        </div>
        <main className="">
          <h2 className="text-3xl font-bold mt-10 mb-6">Pagamentos</h2>
          <div>
            <div className="mb-4">
              <Tag size="xsm" variants="year">
                2023
              </Tag>
            </div>
            <PaymentItem />
            <PaymentItem />
          </div>
          <hr className="border-primary border-4 my-14 " />
          <div>
            <div className="mb-4">
              <Tag size="xsm" variants="year">
                2022
              </Tag>
            </div>
            <PaymentItem />
          </div>
        </main>
      </div>
    </div>
  );
};
