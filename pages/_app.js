import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID});
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
