import Layout from '../components/Layout';
import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';

export default function Portfolio({ items }) {
    return (
        <Layout>
            {items.map((item) => <h1>{item.title}</h1>)}

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
