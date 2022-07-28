import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as S from './Programs.styles';

type Props = {};

const Programs = (props: Props) => {
  return (
    <S.Container>
    <Container className="py-5">
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
    </S.Container>
  );
};

export default Programs;
