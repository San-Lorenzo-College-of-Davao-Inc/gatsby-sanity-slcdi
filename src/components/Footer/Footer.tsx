import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FBWidget from "../FBWidget/FBWidget"

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <img src="/assets/images/footer-logo.png" />
          <div className="mt-3">
            San Lorenzo College of Davao, Inc. (SLCDI) is a Catholic educational
            institution in Davao City, Philippines, envisioning a total
            transformed person with Christian values practiced in the family and
            community that preserved the richness of Filipino heritage.
          </div>
        </Col>
        <Col>
        <FBWidget />
        </Col>
        <Col>
          <h3>GET IN TOUCH</h3>
          <p>Lorenzville Homes, Ulas, Brgy. Talomo, Davao City</p>

<p>+63 (82) 233-0848</p>

<p>slcd_official@slcd.edu.ph</p>
<p>www.slcd.edu.ph</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
