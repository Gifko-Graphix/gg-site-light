/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import fs from 'fs';
import ReactPlayer from 'react-player';
import { v4 as uuidv4 } from 'uuid';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import path from 'path';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn, fadeInUp } from 'react-animations';
import Layout from '../../components/Layout';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
      animation: 1s ${fadeInDownAnimation};
  `;

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const FadeInUpDiv = styled.div`
      animation: 1s ${fadeInUpAnimation} 1.5s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function Project({
  item: {
    folder, title, description, customer, category, profileLink,
  }, files,
}) {
  return (
    <Layout>
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-x-10 w-full h-full">
        <div>
          <FadeInDownDiv>
            <div id="projectTitle" className="mb-4 hidden sm:block">
              <h1 className="text-7xl text-left font-serif">{title}</h1>
            </div>
          </FadeInDownDiv>

          {((category !== 'videos') && (category !== 'editorial'))
          && (
            <FadeInUpDiv>
              <div className="grid md:gap-x-5 gap-y-2 sm:overflow-auto sm:grid-cols-1 xl:grid-cols-2 mt-0 sm:mt-4 " style={{ height: '550px' }}>
                {files.filter((filename) => path.extname(filename) === '.webp').map((file) => (
                  <div key={uuidv4()} className="relative object-center col-span-1 w-full" style={{ height: '370px' }}>
                    <Image src={`/static${folder}${file}`} alt={file} layout="fill" objectFit="contain" />
                  </div>
                ))}
              </div>
            </FadeInUpDiv>
          )}

          {(category === 'videos')
          && (
            <FadeInUpDiv>
              <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 mt-0 sm:mt-4 sm:overflow-auto" style={{ height: '550px' }}>
                {files.filter((filename) => path.extname(filename) === '.mp4').map((file) => (
                  <div key={uuidv4()} className="relative col-span-full">
                    <ReactPlayer width="" height="" url={`/static${folder}${file}`} pip stopOnUnmount={false} controls />
                  </div>
                ))}
              </div>
            </FadeInUpDiv>
          )}

          {(category === 'editorial')
          && (
            <FadeInUpDiv>
              <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 xl:grid-cols-2 mt-0 sm:mt-4 overflow-auto">
                {files.filter((filename) => path.extname(filename) === '.pdf').map((file) => (
                  <div key={uuidv4()} className="relative object-cover overflow-hidden object-center col-span-full inline-block">
                    <Worker key={uuidv4()} workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                      <div key={uuidv4()} style={{ height: '580px' }}>

                        <Viewer theme="dark" fileUrl={`/static${folder}${file}`} defaultScale={SpecialZoomLevel.PageFit} />

                      </div>
                    </Worker>
                  </div>
                ))}
              </div>
            </FadeInUpDiv>
          )}
        </div>

        <hr className="sm:hidden my-4" />
        <div className="flex flex-col">
          <div id="projectTitle" className="mb-4 sm:hidden">
            <FadeInDownDiv>
              <h1 className="text-7xl text-left font-serif">{title}</h1>
            </FadeInDownDiv>
          </div>
          <div id="clientName" className="text-left w-full">
            <FadeInDiv>
              <p className="text-4xl font-bold inline font-serif">Client Name: </p>
              <a href={profileLink} className="hover:text-green-light">
                <p className="inline text-2xl w-full">{customer}</p>
              </a>
            </FadeInDiv>
          </div>
          <div id="projectDescription" className="text-left w-full sm:w-2/3 mt-3">
            <FadeInDiv>
              <p className="text-4xl font-bold font-serif">Description: </p>
              <p className="text-lg w-full">{description}</p>
            </FadeInDiv>
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
