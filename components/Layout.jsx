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

      <div className="absolute overflow-auto bg-textured text-eggshell-default inset-0" id="background">
        <Header />
        {children}
        <footer className="flex items-center justify-center align-bottom text-gray-300">
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

    </>
  );
}
