import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Logo from '../public/images/General/logo_t.svg';

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image src={Logo} alt="Gifko Graphix Logo" height="40" width="80" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link><Link href="/portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link><Link href="/about">About</Link></Nav.Link>
            <Nav.Link><Link href="/contact">Contact Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
