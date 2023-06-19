
export function PrimaryButton({ type, form, inProgress, children }) {

  const bgColor = inProgress ? `bg-marine-blue` : `bg-purplish-blue`;

  return (
    <button
      type={type}
      form={form}
      className={`text-sm text-white ${bgColor} rounded-md py-3 px-4 outline-purplish-blue hover:saturate-200 hover:opacity-50`}
    >
      {children}
    </button>
  );
}


export function SecondaryButton({ onClick, isInitialStep, children }) {

  const visibility = isInitialStep ? "invisible" : "visible";

  return (
    <button
      onClick={onClick}
      className={`text-cool-gray ${visibility} outline-none bg-black`}
    >
      {children}
    </button>
  );
}
