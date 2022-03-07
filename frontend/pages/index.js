import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn, fadeInUp } from 'react-animations';
import Layout from '../components/Layout';
import axios from 'axios';

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

export default function Home({header, description}) {
  return (
    <Layout currentPage="Home" currentPageDescription="The home of the best design team you'll ever meet. We mean it.">
      <main role="main" className="flex flex-col h-96 items-center justify-center pt-20 my-4">
        <FadeInDownDiv>
          <h1 className="text-5xl lg:text-8xl text-center font-light mb-6 font-serif">{header}</h1>
        </FadeInDownDiv>
        <FadeInDiv>
          <h1 className="my-4 text-center text-2xl font-sans">{description}</h1>
        </FadeInDiv>
        <FadeInUpDiv>
          <div className="lg:space-x-4 space-y-4 lg:space-y-0 flex flex-col lg:flex-row items-center mt-4 mb-12">
            <Link href="/portfolio" passHref>
              <button className="btn bg-eggshell-default inline font-sans hover:text-purple-light hover:bg-green-light" type="button">
                To The Portfolio
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="btn bg-eggshell-default inline font-sans hover:text-purple-light hover:bg-green-light" type="button">
                Contact Us
              </button>
            </Link>
          </div>
        </FadeInUpDiv>
      </main>
    </Layout>
  );
}


export async function getServerSideProps(){
  const contentRes = await axios.get("http://localhost:1337/api/home/?populate=%2A");
  console.log(contentRes.data.data);
  return {props: {header: contentRes.data.data.attributes.Header, description: contentRes.data.data.attributes.Description}}
}