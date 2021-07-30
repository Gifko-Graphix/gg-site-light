import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import PortfolioSection from '../components/PortfolioSection';
import PageHeader from '../components/PageHeader';

export default function Portfolio({ items }) {
  return (
    <Layout>
      <PageHeader title="Check out our portfolio!" caption="Here you can see what we've been working on!" />
      <PortfolioSection title="Posters" items={items} />
      <PortfolioSection title="Editorial" items={items} />
      <PortfolioSection title="Logos" items={items} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Item.find({});
  const items = result.map((doc) => {
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });

  return { props: { items } };
}
