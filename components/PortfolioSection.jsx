export default function PortfolioSection({ title, children }) {
  return (
    <div className="mt-5">
      <h1 className="text-3xl">{title}</h1>
      <hr />
      {children}
    </div>
  );
}
