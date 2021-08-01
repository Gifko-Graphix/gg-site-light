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
      </Head>

      <div className="absolute overflow-auto bg-purple-dark text-eggshell-default inset-0" id="background">
        <Header />
        <div className="mx-24 mt-24">
          {children}
        </div>
        <footer className="flex items-center justify-center align-bottom text-gray-300 mt-6 py-6">
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
