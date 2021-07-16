/* eslint-disable no-underscore-dangle */
import Layout from '../../components/Layout';
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default function Project({ item }) {
    return (
        <Layout>
            <h1>{item.title}</h1>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    await dbConnect();

    const result = await Item.find({ title: params.id });
    const item = result[0].toObject();
    item._id = item._id.toString();

    return { props: { item } };
}
