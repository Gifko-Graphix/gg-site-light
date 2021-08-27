export default function SectionHeader({ text }) {
  return (
    <div className="w-full container">
      <h1 className="text-2xl text-center sm:text-left sm:text-5xl">{text}</h1>
      <hr className="mt-1 w-9/12 sm:w-full" />
    </div>
  );
}
