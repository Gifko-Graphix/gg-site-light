import Link from 'next/link';
import { lowerCase } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import DocumentPortfolioItem from './DocumentPortfolioItem';
import ItemButton from './ItemButton';

export default function VideoPortfolioSection({ category, items, files }) {
  return (
    <div className="mt-5 flex flex-col items-center ">
      <h1 className="text-3xl text-center sm:text-left sm:text-4xl">{category}</h1>
      <hr className="mt-1 w-9/12 sm:w-full" />
      <div className="flex flex-col gap-y-8 sm:gap-y-5 sm:grid md:grid-cols-3 md:gap-x-12 lg:grid-cols-4 lg:gap-x-11 xl:grid-cols-6 xl:gap-x-16 xl:gap-y-8 pt-4">
        {(items.filter((item) => item.category === lowerCase(category))).map((item, index) => (
          <Link key={uuidv4()} id={index} href={`/portfolio/${item.title}`} passHref>
            <ItemButton key={uuidv4()}>
              <DocumentPortfolioItem key={uuidv4()} item={item} files={files} />
            </ItemButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
