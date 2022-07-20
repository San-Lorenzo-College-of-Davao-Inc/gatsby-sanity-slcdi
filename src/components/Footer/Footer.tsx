import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <div>Footer</div>
        </Col>
        <Col>
          <div>Footer</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
