export default function PageHeader({ title, caption }) {
  return (
    <div className="flex flex-col items-center justify-content-center ">
      <h1 className="text-4xl sm:text-7xl text-center font-serif">{title}</h1>
      <div className="mt-3">
        <p className="text-center text-sm sm:text-xl font-sans">{caption}</p>
      </div>
    </div>
  );
}
