import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const { NEXT_PUBLIC_GOOGLE_ANALYTICS } = process.env;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
