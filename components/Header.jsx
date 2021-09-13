import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

export default function Header() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'gifkographix',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  return (
    <Navbar className="pt-2 bg-textured font-sans" expand="lg" fixed="top">
      <Container className="shadow-none">
        <Link href="/" passHref>
          <Navbar.Brand>
            <AdvancedImage className="h-12" cldImg={cld.image('websiteFiles/images/General/logo_t.svg')} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="lightgray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto text-eggshell-default gap-x-9 gap-y-5">
            <Nav.Link as={Link} href="/portfolio"><div className="cursor-pointer hover:text-purple-light">Portfolio</div></Nav.Link>
            <Nav.Link as={Link} href="/about"><div className="cursor-pointer hover:text-purple-light">About Us</div></Nav.Link>
            <Nav.Link as={Link} href="/contact"><div className="cursor-pointer hover:text-purple-light">Contact Us</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
