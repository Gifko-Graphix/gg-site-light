import Link from 'next/link';
import { lowerCase } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInUp } from 'react-animations';
import VideoPortfolioItem from './VideoPortfolioItem';
import ItemButton from './ItemButton';
import SectionHeader from './SectionHeader';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} ${(props) => parseInt(props.parentDelay, 10) + parseInt(props.delay, 10) / 2}s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const FadeInUpDiv = styled.div`
      animation: 1s ${fadeInUpAnimation} ${(props) => parseInt(props.delay, 10)}s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function VideoPortfolioSection({
  category, items, files, position,
}) {
  return (
    <FadeInUpDiv delay={position}>
      <div className="mt-5 flex flex-col items-center ">
        <SectionHeader text={category} />
        <div className="flex flex-col gap-y-8 sm:gap-y-5 sm:grid md:grid-cols-3 md:gap-x-12 lg:grid-cols-4 lg:gap-x-11 xl:grid-cols-6 xl:gap-x-16 xl:gap-y-8 pt-4">
          {(items.filter((item) => item.category === lowerCase(category))).map((item, index) => (
            <FadeInDiv delay={index} parentDelay={position}>
              <Link key={uuidv4()} id={index} href={`/portfolio/${item.title}`} passHref>
                <ItemButton key={uuidv4()}>
                  <VideoPortfolioItem key={uuidv4()} item={item} files={files} />
                </ItemButton>
              </Link>
            </FadeInDiv>
          ))}
        </div>
      </div>
    </FadeInUpDiv>
  );
}
