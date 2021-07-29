import Image from 'next/image';

export default function Item({ item: { imgUrl } }) {
  return (
    <div className="w-48 h-64 bg-gray-300">
      <div className="h-48 w-48 rounded-lg">
        <Image src={imgUrl} layout="fill" object-fit="fill" />
      </div>
    </div>
  );
}
