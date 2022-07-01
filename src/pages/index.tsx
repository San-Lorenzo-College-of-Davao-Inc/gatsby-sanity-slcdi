import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import WhyUs from '../components/WhyUs/WhyUs'
import Programs from '../components/Programs/Programs'
import Footer from '../components/Footer/Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <Slider />
          <WhyUs />
          <Programs />
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage