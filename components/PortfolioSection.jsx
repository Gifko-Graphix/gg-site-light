import Link from 'next/link';
import { lowerCase } from 'lodash';
import PortfolioItem from './PortfolioItem';
import ItemButton from './ItemButton';

export default function PortfolioSection({ title, items }) {
  return (
    <div className="mt-5">
      <h1 className="text-4xl">{title}</h1>
      <hr className="mt-1" />
      <div className="grid grid-cols-6 gap-x-16 gap-y-8 pt-4">
        {(items.filter((item) => item.category === lowerCase(title))).map((item, index) => (
          <Link key={index} id={index} href={`/portfolio/${item.title}`} passHref>
            <ItemButton>
              <PortfolioItem item={item} />
            </ItemButton>
          </Link>
        ))}
      </div>
    </div>
  );
}
