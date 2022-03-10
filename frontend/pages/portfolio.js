import React from 'react';
import cloudinary from 'cloudinary';
import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import ImagePortfolioSection from '../components/ImagePortfolioSection';
import VideoPortfolioSection from '../components/VideoPortfolioSection';
import DocumentPortfolioSection from '../components/DocumentPortfolioSection';
import PageHeader from '../components/PageHeader';

const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

export default function Portfolio({ items, projectFiles: files }) {
  return (
    <Layout currentPage="Portfolio" currentPageDescription="Come check out our repertoire of amzing and interesting projects!">
      <PageHeader title="Check out our portfolio!" caption="Here you can see what we've been working on!" />
      <ImagePortfolioSection category="Posters" items={items} files={files} position="1" />
      <DocumentPortfolioSection category="Editorial" items={items} files={files} position="2" />
      <ImagePortfolioSection category="Logos" items={items} files={files} position="3" />
      <VideoPortfolioSection category="Videos & Animations" items={items} files={files} position="4" />
    </Layout>
  );
}

export async function getStaticProps() {
  cloudinary.v2.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
    secure: true,
  });
  await dbConnect();
  const projectFiles = []; // array of objects with project title & file names
  /* find all the data in our database */
  const result = await Item.find({});
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });
  await Promise.all(items.map(async (item) => {
    const response = await cloudinary.v2.search.expression(
      `folder:websiteFiles${item.folder}*`, // add your folder
    ).sort_by('public_id', 'desc').execute();
    projectFiles.push({
      title: item.title,
      filenames: response.resources.map((file) => (
        {
          public_id: file.public_id,
          format: file.format,
        })),
    });
  }));

  return { props: { items, projectFiles } };
}
