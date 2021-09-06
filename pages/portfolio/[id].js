/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import fs from 'fs';
import ReactPlayer from 'react-player';
import { v4 as uuidv4 } from 'uuid';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import path from 'path';
import Layout from '../../components/Layout';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

export default function Project({
  item: {
    folder, title, description, customer, category, profileLink,
  }, files,
}) {
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-x-10 w-full h-full">
        <div>
          <div id="projectTitle" className="mb-4 hidden sm:block">
            <h1 className="text-7xl text-left">{title}</h1>
          </div>
          {((category !== 'videos') && (category !== 'editorial'))
          && (
          <div className="grid md:gap-x-5 gap-y-4 sm:overflow-auto sm:h-96 sm:grid-cols-1 xl:grid-cols-2 mt-0 sm:mt-4 ">
            {files.map((file) => (
              <div key={uuidv4()} className="relative object-cover object-center col-span-1 inline-block h-96">
                <Image src={`/static${folder}${file}`} alt={file} layout="fill" object-fit="cover" />
              </div>
            ))}
          </div>
          )}

          {(category === 'videos')
          && (
          <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 mt-0 sm:mt-4 ">
            {files.filter((filename) => path.extname(filename) === '.mp4').map((file) => (
              <div key={uuidv4()} className="relative col-span-full">
                <ReactPlayer width="" height="" url={`/static${folder}${file}`} pip stopOnUnmount={false} controls />
              </div>
            ))}
          </div>
          )}

          {(category === 'editorial')
          && (
          <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 xl:grid-cols-2 mt-0 sm:mt-4 overflow-auto">
            {files.map((file) => (
              <div key={uuidv4()} className="relative object-cover overflow-hidden object-center col-span-full inline-block">
                <Worker key={uuidv4()} workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <div key={uuidv4()} style={{ height: '580px' }}>

                    <Viewer theme="dark" fileUrl={`/static${folder}${file}`} defaultScale={SpecialZoomLevel.PageFit} />

                  </div>
                </Worker>
              </div>
            ))}
          </div>
          )}
        </div>
        <hr className="sm:hidden my-4" />
        <div className="flex flex-col">
          <div id="projectTitle" className="mb-4 sm:hidden">
            <h1 className="text-7xl text-left">{title}</h1>
          </div>
          <div id="clientName" className="text-left w-full">
            <p className="text-4xl text-bold inline ">Client Name: </p>
            <a href={profileLink}>
              <p className="inline text-2xl w-full">{customer}</p>
            </a>
          </div>
          <div id="projectDescription" className="text-left w-full sm:w-2/3 mt-3">
            <p className="text-4xl text-bold">Description: </p>
            <p className="text-lg w-full">{description}</p>
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

  const files = fs.readdirSync(`${process.cwd()}/public/static${item.folder}`);

  return { props: { item, files } };
}
