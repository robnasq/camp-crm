import ReactModal from "react-modal";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { Button } from "../../../components/button/Button";

type IModalProps = React.ComponentProps<typeof ReactModal>;

export const Modal = ({ isOpen, onRequestClose, children, ...props }: IModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={`ReactModal__overlay bg-[#00000024] h-screen w-full flex-@x-center justify-center fixed z-[10000] top-0 left-0`}
      className={`ReactModal__content absolute  top-1/2  left-1/2 mx-auto min-h-[321px] py-9 px-9  w-[87.2%] -translate-x-1/2 -translate-y-1/2 transform rounded-[20px] bg-white md:min-w-[440px] md:max-w-[28%] `}
      {...props}
    >
      <div className="">
        <span className=" bg-[#C5F4AA] rounded-full w-[50px] h-[50px] absolute   ">

          <Icon
            path={mdiCheckCircleOutline}
            size={2}
            className="relative left-[1px] top-[1px] text-[#269C2C]"
          />
        </span>
      </div>
      <h2 className="mt-[70px] font-bold text-primary text-[28px]">Muito obrigada.</h2>
      <p className=" leading-[18px] text-neutral-medium mt-3">Enviámos um email com um link para entrar na My Camp em segurança através de um código de autenticação.</p>
      <Button type="button" onClick={onRequestClose} className="mt-[30px]" variants="primary" fullWidth>OK</Button>
    </ReactModal>
  );
};
