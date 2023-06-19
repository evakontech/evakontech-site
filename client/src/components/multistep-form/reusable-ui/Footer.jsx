
import { PrimaryButton, SecondaryButton } from "./Button";
import { minStepNo, totalStepCount } from "./StepNo";

export default function Footer({ currentStepNo, formId, onGoBackButtonClick }) {

  const isInitialStep = currentStepNo === minStepNo;
  const inProgress = currentStepNo < totalStepCount;

  return (
    <footer className="flex justify-between items-center p-4 md:justify-self-center md:min-w-[30em]">
      <SecondaryButton
        onClick={onGoBackButtonClick}
        isInitialStep={isInitialStep}
      >
        Go Back
      </SecondaryButton>
      <PrimaryButton type="submit" form={formId} inProgress={inProgress}>
        {inProgress ? "Next Step" : "Confirm"}
      </PrimaryButton>
    </footer>
  );
}
