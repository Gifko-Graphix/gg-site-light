import Head from 'next/head';
import Script from 'next/script';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Header from './Header';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} 3s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      <div className="absolute overflow-auto bg-textured text-eggshell-default inset-0" id="background">
        <Header />
        <div className="mx-8 md:mx-12 lg:mx-16 xl:mx-24 mt-24">
          {children}
        </div>

        <footer className="relative bottom-0 w-full flex flex-row items-center justify-center text-gray-300 py-6 px-8 text-center text-xs">
          <FadeInDiv>
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Gifko Graphix. All rights reserved.
          </FadeInDiv>
        </footer>

      </div>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

    </>
  );
}
