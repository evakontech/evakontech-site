export const minStepNo = 1;
export const totalStepCount = 4;

export default function StepNo({ no, active }) {
  const colorStyle = active
    ? `bg-white text-[#1662D1]`
    : `text-white`;
  return (
    <article
      className={`font-bold border border-white grid place-content-center rounded-full h-8 w-8 ${colorStyle}`}
    >
      {no}
    </article>
  );
}
