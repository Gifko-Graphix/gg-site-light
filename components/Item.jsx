import Image from 'next/image';

export default function Item({ item: { imgUrl } }) {
  return (
    <div className="box">
      <div className="content">
        <Image src={imgUrl} layout="fill" object-fit="fill" />
      </div>
    </div>
  );
}
