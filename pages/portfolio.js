import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import PortfolioSection from '../components/PortfolioSection';
import PageHeader from '../components/PageHeader';
import PortfolioItem from '../components/PortfolioItem';

export default function Portfolio({ items }) {
  // console.log(items);
  return (
    <Layout>
      <div className="mx-24">
        <PageHeader title="Check out our portfolio!" caption="Here you can see what we've been working on!" />
        <PortfolioSection title="Posters">
          {items.map((item, index) => <PortfolioItem key={index} id={index} item={item} />)}
        </PortfolioSection>
        <PortfolioSection title="Editorial Design" />
        <PortfolioSection title="Logos" />
      </div>
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
