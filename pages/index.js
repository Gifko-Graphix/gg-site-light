import Link from 'next/link';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main role="main" className="flex flex-col h-96 items-center justify-center pt-20 my-4">
        {/* <Image
          src="/images/General/logo_t.svg"
          width="342.5"
          height="156"
          alt="logo"
          className="img-class img-fluid"
        /> */}
        <h1 className="text-5xl lg:text-8xl text-center font-light mb-14 font-serif">Welcome to Gifko Graphix!</h1>
        <h1 className="mt-4 text-center text-2xl font-sans">Check out our portfolio or contact us today!</h1>
        <div className="space-x-4 mt-4">
          <Link href="/portfolio" passHref>
            <Button className="inline font-sans" variant="contained">
              To the Portfolio
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="inline" variant="contained">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
