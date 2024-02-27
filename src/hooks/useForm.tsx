import { useState } from "react";

export function useForm(steps: any) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(steps[currentStep]);
  return {
    currentStep,
    currentComponent: steps[currentStep],
  };
}
