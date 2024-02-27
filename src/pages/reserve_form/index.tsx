import { Header } from "../../components/ui/Header";
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

  const {currentStep, currentComponent} = useForm(formComponents)
  return (
    <div>
      <Header>
        <div>
          <h1 className="text-primary text-end text-base font-bold">
            Reserva campos de feerias 20224
          </h1>
          <p>Semanas e protocolos</p>
        </div>
      </Header>
      <div className="bg-primary z-10 rounded-b-[14px] -top-16 relative h-[196px] w-full"></div>

      <main className="px-10">
        <form  className="">
            {currentComponent}
        </form>
      </main>
    </div>
  );
};
