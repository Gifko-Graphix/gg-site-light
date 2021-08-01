import Image from 'next/image';
import Card from '../components/Card';
import Layout from '../components/Layout';

export default function Home() {
  const slides = [
    { name: '1', alt: '1', src: '/images/Photos/mario.jpeg' },
    { name: '2', alt: '2', src: '/images/Photos/cameron.png' },
    { name: '3', alt: '3', src: '/images/Photos/shell.jpeg' },
    { name: '4', alt: '4', src: '/images/Photos/mario.jpeg' },
    { name: '5', alt: '5', src: '/images/Photos/shell.jpeg' }];
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
        <Card slides={slides} />
        {/* <h1 className="cover-heading">Coming soon to this page 👌🏾.</h1>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
      </p> */}
      </main>
    </Layout>
  );
}
