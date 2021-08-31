import fs from 'fs';
import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import ImagePortfolioSection from '../components/ImagePortfolioSection';
import VideoPortfolioSection from '../components/VideoPortfolioSection';
import DocumentPortfolioSection from '../components/DocumentPortfolioSection';
import PageHeader from '../components/PageHeader';

export default function Portfolio({ items, projectFiles: files }) {
  return (
    <Layout>
      <PageHeader title="Check out our portfolio!" caption="Here you can see what we've been working on!" />
      <ImagePortfolioSection category="Posters" items={items} files={files} />
      <DocumentPortfolioSection category="Editorial" items={items} files={files} />
      <ImagePortfolioSection category="Logos" items={items} files={files} />
      <VideoPortfolioSection category="Videos" items={items} files={files} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const projectFiles = []; // array of objects with project title & file names

  /* find all the data in our database */
  const result = await Item.find({});
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    projectFiles.push({
      title: item.title,
      filenames: fs.readdirSync(`${process.cwd()}/public/static${item.folder}`),
    });
    return item;
  });

  return { props: { items, projectFiles } };
}
