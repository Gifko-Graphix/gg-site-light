import Link from 'next/link';
import { lowerCase } from 'lodash';
import PortfolioItem from './PortfolioItem';
import ItemButton from './ItemButton';

export default function PortfolioSection({ category, items, files }) {
  return (
    <div className="mt-5">
      <h1 className="text-4xl">{category}</h1>
      <hr className="mt-1" />
      <div className="grid grid-cols-6 gap-x-16 gap-y-8 pt-4">
        {(items.filter((item) => item.category === lowerCase(category))).map((item, index) => (
          <Link key={index} id={index} href={`/portfolio/${item.title}`} passHref>
            <ItemButton>
              <PortfolioItem item={item} files={files} />
            </ItemButton>
          </Link>
        ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   await dbConnect();

//   const result = await Item.find({ title: params.id });
//   const item = result[0].toObject();
//   item._id = item._id.toString();

//   const files = fs.readdirSync(`${process.cwd()}/./public${item.folder}`);
//   // console.log(files);

//   return { props: { item, files } };
// }
