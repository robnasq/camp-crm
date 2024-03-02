import { ReserveForm } from "../pages/reserve_form";
import Pattern from "../assets/main-image.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import StepFive from "../pages/reserve_form/StepFive";
import StepFour from "../pages/reserve_form/StepFour";
import StepOne from "../pages/reserve_form/StepOne";
import StepSeven from "../pages/reserve_form/StepSeven";
import StepSix from "../pages/reserve_form/StepSix";
import StepThree from "../pages/reserve_form/StepThree";
import StepTwo from "../pages/reserve_form/StepTwo";
import Icon from "@mdi/react";
import { mdiArrowLeftCircleOutline } from "@mdi/js";
import { Button } from "../components/button/Button";
import { NavMenu } from "../components/nav-menu/NavMenu";

export const OrderReserveLayout = () => {
  const [subtittle, setSubtittle] = useState("");

  const formComponents = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <StepFive />,
    <StepSix />,
    <StepSeven />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents);
  console.log(changeStep);
  const progressPercent = (currentStep / (formComponents.length - 1)) * 100;

  const navigate = useNavigate();

  const conclusion = () => {
    navigate("/order-completed");
    console.log(conclusion)
  };

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setSubtittle("Semanas e protocolos");
        break;
      case 1:
        setSubtittle("Encarregado de edecação");
        break;
      case 2:
        setSubtittle("Participante");
        break;
      case 3:
        setSubtittle("Saúde");
        break;
      case 4:
        setSubtittle("Opções reserva");
        break;
      case 5:
        setSubtittle("Dados de faturação");
        break;
      case 6:
        setSubtittle("Sumário e adição de participantes");
        break;
      default:
        setSubtittle("");
        break;
    }
  }, [currentStep]);
  return (
    <div className="pb-3">

      <header className="shadow md:hidden z-50 relative bg-white rounded-b-3xl mb-10 w-full items-center justify-between py-6 flex px-10  ">
        <span onClick={(e) => changeStep(currentStep - 1, e)}>
          <Icon
            path={mdiArrowLeftCircleOutline}
            className="text-[#ccc] font-light cursor-pointer"
            title="Go back"
            size={2}
          />
        </span>
        <div>
          <h1 className="text-primary text-end text-base font-bold">
            Reserva campos de feerias 20224
          </h1>
          <p>{subtittle} </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-black"></span>
            <div className="flex mt-3  bg-secondary justify-between items-center pl-[6px] pr-3 h-4 bg-gray-200 rounded-[100px] w-full">
              <div className="bg-[#544C94] w-full h-[6px] mr-4 rounded-full">
                <div
                  className="h-[6px] bg-[#61B232] flex justify-end items-center rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <span className="text-white text-[12px]">
                {currentStep + 1}/{formComponents.length}
              </span>
            </div>
          </div>
        </div>
      </header>
      <header className="h-[200px] ml-[20%] mb-4 max-md:hidden bg-[#FFF8F9]">
        <div className="px-[17%]">
          <h1 className="text-[40px] text-primary font-bold">
            Pedido de reserva
          </h1>
          <hr className="border-4 my-6 border-[#FFDFE4]" />
          <span className="flex gap-4" onClick={(e) => changeStep(currentStep - 1, e)}>
            <Icon
              path={mdiArrowLeftCircleOutline}
              className="text-[#ccc]  font-light cursor-pointer md:text-primary"
              title="Go back"
              size={1}
            />
            <div>
              <h1 className="text-primary text-base font-bold">
                Reserva campos de feerias 20224
              </h1>
              <p>{subtittle} </p>
              <div className="flex items-center">
                <span className="text-sm text-black"></span>
              </div>
            </div>
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-black"></span>
          <div className="flex mt-3  bg-secondary ml-0  justify-between items-center pl-[10%] pr-3 h-4 bg-gray-200  w-full">
            <div className="bg-[#544C94] w-[90%] h-[6px] rounded-full">
              <div
                className="h-[6px] bg-[#61B232] flex justify-end items-center rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-white text-[12px]">
              {currentStep + 1}/{formComponents.length}
            </span>
          </div>
        </div>
      </header>
      <div className="md:flex">
        <div
          className="w-[20%] h-[100vh] max-md:hidden bg-top fixed top-0  "
          style={{
            backgroundImage: `url(${Pattern})`,
            backgroundSize: "cover",
          }}
        />
        <div className="md:ml-[30%] md:max-w-[522px]">
          <main className="px-10">
            <form className="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
              {currentComponent}
              {!isLastStep ? (
                <Button type={"submit"} variants="primary" fullWidth>
                  Continuar
                </Button>
              ) : (
                <Button
                  type={"button"}
                  onClick={conclusion}
                  variants="primary"
                  fullWidth
                >
                  Concluir
                </Button>
              )}
            </form>
          </main>
        </div>
      </div>
      <div className="md:hidden mb-[70px]">
      <NavMenu />
      </div>
    </div>
  );
};
