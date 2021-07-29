import Image from 'next/image';

export default function PortfolioItem({ item: { folder, title } }) {
  // console.log('Title:');
  // console.log(title);
  return (
    <div className="w-48 h-64 inline-block mr-10 mt-3">
      <div className="relative h-48 w-48 rounded-lg object-cover object-center border-2 border-gray-900">
        <Image src={folder} layout="fill" object-fit="fill" />
      </div>
      <div className="mt-2">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}
