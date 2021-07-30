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
          <Nav className="me-auto text-eggshell-default space-x-9">
            <Nav.Link as={Link} href="/portfolio" activeStyle={{ color: 'blue' }}>Portfolio</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
