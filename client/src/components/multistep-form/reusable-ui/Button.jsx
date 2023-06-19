
export function PrimaryButton({ type, form, inProgress, children }) {

  const bgColor = inProgress ? `bg-[#3874D1]` : `bg-purplish-blue`;

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
      className={`text-sm text-white ${visibility} rounded-md py-3 px-4 outline-purplish-blue bg-black hover:saturate-200 hover:opacity-50`}
    >
      {children}
    </button>
  );
}
