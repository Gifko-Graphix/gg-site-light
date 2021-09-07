import Link from 'next/link';
import { Button } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn, fadeInUp } from 'react-animations';
import Layout from '../components/Layout';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
      animation: 1s ${fadeInDownAnimation};
  `;

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const FadeInUpDiv = styled.div`
      animation: 1s ${fadeInUpAnimation} 1.5s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function Home() {
  return (
    <Layout>
      <main role="main" className="flex flex-col h-96 items-center justify-center pt-20 my-4">
        <FadeInDownDiv>
          <h1 className="text-5xl lg:text-8xl text-center font-light mb-6">Welcome to Gifko Graphix!</h1>
        </FadeInDownDiv>
        <FadeInDiv>
          <h1 className="my-4 text-center text-2xl">Check out our portfolio or contact us today!</h1>
        </FadeInDiv>

        <FadeInUpDiv>
          <div className="space-x-4 mt-4">
            <Link href="/portfolio" passHref>
              <Button className="inline" variant="contained">
                To the Portfolio
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="inline" variant="contained">
                Contact Us
              </Button>
            </Link>
          </div>
        </FadeInUpDiv>
      </main>
    </Layout>
  );
}
