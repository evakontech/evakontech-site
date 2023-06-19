
import { create } from "zustand";
import { minStepNo, totalStepCount } from "../reusable-ui/StepNo";

export const useStepFormSetting = create(
  (set) => ({
    stepNo: minStepNo,
    setting: {
      name: "",
      email: "",
      phone: "",
      planName: "arcade",
      planPrice: 9,
      isMonthlyBilling: true,
      selectedAddOns: [
        {
          name: "Online service",
          description: "Access to multiplayer games",
          monthlyPrice: 1,
        },
        {
          name: "Larger storage",
          description: "Extra 1TB of cloud save",
          monthlyPrice: 2,
        },
      ],
    },
    showNextStep: (newSetting) =>
      set((state) => ({
        ...state,
        stepNo: Math.min(state.stepNo + 1, totalStepCount + 1),
        setting: {
          ...state.setting,
          ...(state.stepNo < totalStepCount ? newSetting : {}),
        },
      })),
    showPrevStep: () =>
      set((state) => ({
        ...state,
        stepNo: Math.max(minStepNo, state.stepNo - 1),
      })),
    showPlanSelectionStep: () =>
      set((state) => ({ ...state, stepNo: minStepNo + 1 })),
  })
);

export const Form = ({ title, description, children, id, onSubmit }) => {

  const hasHeader = title !== "" || description !== "";

  return (
    <form
      id={id}
      title={title}
      description={description}
      onSubmit={onSubmit}
      className="absolute top-24 inset-x-0 mx-4 py-8 px-6 bg-white rounded-lg shadow-xl md:static md:shadow-none md:mx-0 md:px-0 md:pt-10"
    >
      {hasHeader && (
        <section className="flex flex-col gap-2 mb-5 md:mb-10">
          <h2 className="font-bold text-2xl text-marine-blue md:text-3xl">
            {title}
          </h2>
          <p className="text-cool-gray pr-4 md:pr-0">{description}</p>
        </section>
      )}
      {children}
    </form>
  );
}
