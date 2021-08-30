import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Logo from '../public/images/General/logo_t.svg';

export default function Header() {
  return (
    <Navbar className="pt-2 bg-mazeblack" expand="lg" fixed="top">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image src={Logo} alt="Gifko Graphix Logo" height="40" width="80" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="lightgray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto text-eggshell-default gap-x-9 gap-y-5">
            <Nav.Link as={Link} href="/portfolio" activeStyle={{ color: 'blue' }}>Portfolio</Nav.Link>
            <Nav.Link as={Link} href="/about" activeStyle={{ color: 'blue' }}>About</Nav.Link>
            <Nav.Link as={Link} href="/contact" activeStyle={{ color: 'blue' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
