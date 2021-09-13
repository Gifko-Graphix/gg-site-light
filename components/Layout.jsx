/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Header from './Header';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} 3s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function Layout({ children, currentPage, currentPageDescription }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Expletus+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>
          Gifko Graphix |
          {' '}
          {currentPage}
        </title>
        <meta name="description" content={currentPageDescription} />
        <meta name="keywords" content="Graphic Design, Brochures, Video Production, Digital Marketing, Business Development, Editorial Design" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="https://res.cloudinary.com/gifkographix/image/upload/websiteFiles/images/General/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/gifkographix/image/upload/websiteFiles/images/General/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <div className="absolute overflow-auto bg-textured text-eggshell-default inset-0 min-h-screen" id="background">
        <Header />
        <div className="mx-8 md:mx-12 lg:mx-16 xl:mx-24 mt-24">
          {children}
        </div>
        <footer className="relative self-end bottom-0 w-full flex flex-row items-center justify-center text-gray-300 py-10 px-8 text-center text-xs">
          <FadeInDiv>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Gifko Graphix. All rights reserved.
          </FadeInDiv>
        </footer>
      </div>
    </>
  );
}
