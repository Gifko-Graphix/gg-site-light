/* eslint-disable no-underscore-dangle */
import { v4 as uuidv4 } from 'uuid';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn, fadeInUp } from 'react-animations';
import cloudinary from 'cloudinary';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Layout from '../../components/Layout';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

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
    title, description, customer, category, profileLink,
  }, files,
}) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'gifkographix',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  return (
    <Layout currentPage={title} currentPageDescription={`Come find out more about our ${title} project right here!`}>
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
                {files.filter((filename) => filename.format === 'webp').map((file) => (
                  <div key={uuidv4()} className="relative object-center col-span-1 w-full" style={{ height: '370px' }}>
                    <AdvancedImage className="object-contain object-center h-full" cldImg={cld.image(file.public_id).resize(thumbnail().height(370))} />
                  </div>
                ))}
              </div>
            </FadeInUpDiv>
          )}

          {(category === 'videos')
          && (
            <FadeInUpDiv>
              <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 mt-0 sm:mt-4 sm:overflow-auto" style={{ height: '550px' }}>
                {files.filter((filename) => filename.format === 'mp4').map((file) => (
                  <div key={uuidv4()} className="relative w-full">
                    <AdvancedVideo cldVid={cld.video(file.public_id)} controls className="flex-grow h-full w-full object-cover shadow-xl" />
                  </div>
                ))}
              </div>
            </FadeInUpDiv>
          )}

          {(category === 'editorial')
          && (
            <FadeInUpDiv>
              <div className="grid md:gap-x-5 gap-y-4 sm:grid-cols-1 xl:grid-cols-2 mt-0 sm:mt-4 overflow-auto">
                {files.filter((filename) => filename.format === 'pdf').map((file) => (
                  <div key={uuidv4()} className="relative object-cover overflow-hidden object-center col-span-full inline-block">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                      <div style={{ height: '580px' }}>
                        <Viewer
                          theme="dark"
                          fileUrl={`https://res.cloudinary.com/gifkographix/image/upload/${file.public_id}`}
                          defaultScale={SpecialZoomLevel.PageFit}
                          plugins={[defaultLayoutPluginInstance]}
                        />
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

export async function getStaticPaths() {
  await dbConnect();
  /* find all the data in our database */
  const result = await Item.find({});
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });
  const paths = items.map((item) => ({
    params: { id: item.title },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  cloudinary.v2.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
    secure: true,
  });
  const result = await Item.find({ title: params.id });
  const item = result[0].toObject();
  item._id = item._id.toString();
  const response = await cloudinary.v2.search.expression(
    `folder:websiteFiles${item.folder}*`, // add your folder
  ).sort_by('public_id', 'desc').execute();
  const files = response.resources.map((file) => (
    {
      public_id: file.public_id,
      format: file.format,
    }));
  return { props: { item, files } };
}
