import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';

export default function Portfolio({ items }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-content-center">
        <div className="mt-4">
          <h1 className="text-7xl">Check out our portfolio!</h1>
        </div>
        <div className="mt-3">
          <p>Here you cans see the projects we&apos;ve been working on!</p>
        </div>
      </div>
      {/* {items.map((item) => (
        <Item />
      ))} */}
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
