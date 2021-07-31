import Image from 'next/image';
// import fs from 'fs';
// import dbConnect from '../utils/dbConnect';
// import Item from '../models/Item';

export default function PortfolioItem({ item: { folder, title }, files }) {
  // console.log(title);
  // console.log(files);
  const projects = files.filter((project) => project.title === title);
  console.log(projects);
  return (
    <div className="w-48 h-56 inline-block">
      <div className="relative h-48 w-48 rounded-lg object-cover object-center border-2 border-gray-900">
        {projects.map((project) => (
          project.filenames.map((file, index) => (
            <div key={index} className="relative object-cover object-center inline-block">
              <Image src={folder + file} alt={file} layout="fill" object-fit="fill" />
              {console.log(folder + file)}
            </div>
          ))

        ))}

      </div>
      <div className="mt-2">
        <h1 className="text-xl text-gray-700">{title}</h1>
      </div>
    </div>
  );
}

//  need to figure a way to get access to the item trying to render this component,
//  so that the fn below can fetch us the images for the carrousel in the component above

// export async function getServerSideProps() {
//   const { props: { item: { folder } } } = this;
//   // await dbConnect();

//   // const result = await Item.find({ folder });
//   // const item = result[0].toObject();
//   // item._id = item._id.toString();

//   console.log(files);

//   return { props: { files } };
// }
