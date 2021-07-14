import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main role="main" className="inner cover my-auto mx-auto">
      <Image
        src="/images/General/logo_t.svg"
        width="342.5"
        height="156"
        alt="logo"
        className="img-class img-fluid"
      />
      <h1 className="cover-heading">Coming soon to this page 👌🏾.</h1>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
      </p>
    </main>
  );
}
