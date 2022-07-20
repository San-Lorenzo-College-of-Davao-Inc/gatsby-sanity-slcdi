import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {};

const Programs = (props: Props) => {
  return (
    <Container className="header">
      <Row>
        <Col>
          <div>Programs</div>
        </Col>
        <Col>
          <div>Programs</div>
        </Col>
        <Col>
          <div>Programs</div>
        </Col>
        <Col>
          <div>Programs</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
