/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import fs from 'fs';
import Layout from '../../components/Layout';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default function Project({ item: { folder, title, description }, files }) {
  console.log(files);
  return (
    <Layout>
      <div className="grid grid-cols-2 w-full">
        <div id="images" className="grid gap-x-5 grid-cols-2">
          {files.map((file, index) => (
            <div key={index} className="relative object-cover object-center col-span-1 inline-block h-96">
              <Image src={folder + file} alt={file} layout="fill" object-fit="fill" />
              {/* {console.log(folder + file)} */}
            </div>
          ))}
        </div>
        <div className="pl-16">
          <div id="projectTitle">
            <h1 className="text-6xl">{title}</h1>
          </div>
          <div id="projectDescription" className="text-lg w-2/3 mt-3">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const result = await Item.find({ title: params.id });
  const item = result[0].toObject();
  item._id = item._id.toString();

  const files = fs.readdirSync(`${process.cwd()}/./public${item.folder}`);
  // console.log(files);

  return { props: { item, files } };
}
