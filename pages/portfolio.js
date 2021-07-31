import fs from 'fs';
import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import PortfolioSection from '../components/PortfolioSection';
import PageHeader from '../components/PageHeader';

export default function Portfolio({ items, projectFiles: files }) {
  return (
    <Layout>
      <PageHeader title="Check out our portfolio!" caption="Here you can see what we've been working on!" />
      <PortfolioSection category="Posters" items={items} files={files} />
      <PortfolioSection category="Editorial" items={items} files={files} />
      <PortfolioSection category="Logos" items={items} files={files} />
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
      filenames: fs.readdirSync(`${process.cwd()}/public${item.folder}`),
    });
    return item;
  });

  // console.log(projectFiles);
  return { props: { items, projectFiles } };
}
