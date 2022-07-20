import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className="why-us">
      <Container>
        <Row>
          <Col>
            <h1>WHY STUDY IN SAN LORENZO COLLEGE OF DAVAO?</h1>
            <p>
              San Lorenzo College of Davao, Inc., as a Filipino and Catholic
              school, delivers outstanding educational opportunities through its
              Christian tradition of being a loving, supportive, and caring
              community. The academic progress of your child is our number one
              priority and we are committed to display enthusiasm, dedication
              and high level teaching skills. We persistently do our best to
              build an environment in which every student is supported to reach
              the highest levels of success.
            </p>

            <p>
              The foundation of our learning environment is the positive
              relationships between parents, students and teachers and as we
              encourage constant communication to ensure your child’s success.
              We welcome you to the San Lorenzo College of Davao, Inc. and we
              believe that every student can succeed and excel.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
