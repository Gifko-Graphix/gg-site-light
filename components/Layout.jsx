import Head from 'next/Head';
import Script from 'next/Script';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>

            {children}
            <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
        </>
    );
}
