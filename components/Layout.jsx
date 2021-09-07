import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';

export default function Layout({ children }) {
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
      </Head>

      <div className="absolute overflow-auto bg-textured text-eggshell-default inset-0" id="background">
        <Header />
        <div className="mx-8 md:mx-12 lg:mx-16 xl:mx-24 mt-24">
          {children}
        </div>

        <footer className="relative bottom-0 w-full flex flex-row items-center justify-center text-gray-300 py-6 px-8 text-center text-xs">
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Gifko Graphix. All rights reserved.
        </footer>

      </div>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

    </>
  );
}
