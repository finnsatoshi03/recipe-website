/* eslint-disable react/prop-types */
export default function RecipeHeadNotes(props) {
  return (
    <div className="px-2 py-4 inline-flex flex-col w-14 items-center bg-gray200 rounded-full">
      <p className="text-sm font-semibold">{props.amount}</p>
      <p className="text-[10px] font-light">{props.name}</p>
    </div>
  );
}
