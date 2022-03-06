import { v4 as uuidv4 } from 'uuid';

export default function ServiceListSection({ title, services }) {
  return (
    <div className="col-span-1 w-full px-8 mb-8 sm:mb-0">
      <h1 className="text-xl font-semibold">{title}</h1>
      <ul className="list-disc list-outside font-light">
        {services.map((service) => <li key={uuidv4()}>{service}</li>)}
      </ul>
    </div>
  );
}
