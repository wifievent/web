import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="headerNav" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">NetBlock</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/download">Download</Nav.Link>
          <Nav.Link href="/help">Help</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
