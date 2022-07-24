import React from 'react'
import * as S from "./Slider.styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
    image: string;
    title: string;
    children: any;
}

const Slide = ({ image, title, children }: Props) => {

  return (
    <S.Slide>
          <S.SlideImage src={image} />

          <S.SlideContentWrapper>
            <S.SlideContent>
              <Container>
                <Row>
                  <Col>
                    <S.SlideContentTitle className="animate__animated animate__fadeInUp">
                      {title}
                    </S.SlideContentTitle>
                    <S.SlideContentText className="animate__animated animate__fadeInUp animate__delay-1s">
                      {children}
                    </S.SlideContentText>
                  </Col>
                </Row>
              </Container>
            </S.SlideContent>
          </S.SlideContentWrapper>
        </S.Slide>
  )
}

export default Slide