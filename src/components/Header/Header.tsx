import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as S from './Header.styles';
import { Link } from "gatsby";

type Props = {};

const Header = (props: Props) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const ScrollEvent = () => {
    if (window.scrollY > 50) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  return (
    <S.Wrapper className={collapsed ? `sticky` : ``}>
      <Container className="header">
        <Row>
          <Col>
            <Navbar variant="light" fixed="top">
              <Container>
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="/assets/images/header-logo.png"
                    width="270"
                    height="49"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link to="/" as={Link}>Home</Nav.Link>
                    <Nav.Link to="/why-us" as={Link}>Why Us</Nav.Link>
                    <Nav.Link to="/our-programs" as={Link}>Our Programs</Nav.Link>
                    <Nav.Link to="/faculty-and-staff" as={Link}>Faculty and Staff</Nav.Link>
                    <Nav.Link to="/contact-us" as={Link}>Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  );
};

export default Header;
