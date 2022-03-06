export default function SectionHeader({ text }) {
  return (
    <div className="w-full container mx-auto">
      <h1 className="text-2xl text-center sm:text-left sm:text-5xl font-serif">{text}</h1>
      <hr className="mt-1 sm:w-full" />
    </div>
  );
}
