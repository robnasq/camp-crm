import { mdiArrowLeftCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/button/Button";
import { useForm } from "../../hooks/useForm";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSeven from "./StepSeven";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export const ReserveForm = () => {
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
    console.log(changeStep)
  const progressPercent = (currentStep / (formComponents.length - 1)) * 100;

  return (
    <div>
      <header className="shadow z-50 relative bg-white rounded-b-3xl mb-10 w-full items-center justify-between py-6 flex px-10  ">
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
          <p>Semanas e protocolos</p>
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
      <div className="bg-primary z-10 rounded-b-[14px] -top-16 relative h-[196px] w-full"></div>

      <main className="px-10">
        <form className="" onSubmit={(e) => changeStep(currentStep + 1, e)}>
          {currentComponent}
          {!isLastStep ? (
            <Button type={"submit"} variants="primary" fullWidth>
              Continuar
            </Button>
          ) : (
            <Button type={"button"} variants="primary" fullWidth>
              Enviar
            </Button>
          )}
        </form>
      </main>
    </div>
  );
};
