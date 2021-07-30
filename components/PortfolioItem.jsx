import Image from 'next/image';
// import fs from 'fs';
// import dbConnect from '../utils/dbConnect';
// import Item from '../models/Item';

export default function PortfolioItem({ item: { folder, title } }) {
  // const files = fs.readdirSync(folder); // need files from folder to render caroussel
  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 rounded-lg object-cover object-center border-2 border-gray-900">
        <Image src={folder} layout="fill" object-fit="fill" />
      </div>
      <div className="mt-2">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}

//  need to figure a way to get access to the item trying to render this component,
//  so that the fn below can fetch us the images for the carrousel in the component above

// export async function getServerSideProps({ params }) {
//   await dbConnect();

//   const result = await Item.find({ title: params.id });
//   const item = result[0].toObject();
//   item._id = item._id.toString();

//   const files = fs.readdirSync(`${process.cwd()}/./public${item.folder}`);
//   // console.log(files);

//   return { props: { item, files } };
// }
