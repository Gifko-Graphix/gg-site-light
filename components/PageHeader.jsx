export default function PageHeader({ title, caption }) {
  return (
    <div className="flex flex-col items-center justify-content-center">
      <h1 className="text-7xl">{title}</h1>
      <div className="mt-3">
        <p>{caption}</p>
      </div>
    </div>
  );
}
