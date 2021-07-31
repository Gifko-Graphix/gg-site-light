import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <main role="main" className="flex flex-col h-96 items-center justify-center">
        <Image
          src="/images/General/logo_t.svg"
          width="342.5"
          height="156"
          alt="logo"
          className="img-class img-fluid"
        />
        {/* <h1 className="cover-heading">Coming soon to this page 👌🏾.</h1>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
      </p> */}
      </main>
    </Layout>
  );
}
