import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Slider.styles";

type Props = {};
type CarouselOptions = {
  showArrows: boolean;
  showStatus: boolean;
  showIndicators: boolean;
  showThumbs: boolean;
  animationHandler: "fade" | "slide" | undefined;
  infiniteLoop?: boolean;
};

const Slider = (props: Props) => {
  const options: CarouselOptions = {
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    showThumbs: false,
    animationHandler: "fade",
    infiniteLoop: false,
  };

  return (
    <S.CarouselWrapper>
      <Carousel {...options}>
        <S.Slide>
          <S.SlideImage src="/assets/images/slider1.jpeg" />

          <S.SlideContentWrapper>
            <S.SlideContent>
              <Container>
                <Row>
                  <Col>
                    <S.SlideContentTitle>
                      TOTALLY TRANSFORMED PERSON WITH CHRISTIAN VALUES
                    </S.SlideContentTitle>
                    <S.SlideContentText>
                      We envision a totally transformed person with Christian
                      values practised in the family and community that
                      preserved the richness of Filipino heritage and diverse
                      cultures in harmony with God's creation.
                    </S.SlideContentText>
                  </Col>
                </Row>
              </Container>
            </S.SlideContent>
          </S.SlideContentWrapper>
        </S.Slide>
        <S.Slide>
          <S.SlideImage src="/assets/images/slider2.jpeg" />

          <S.SlideContentWrapper>
            <S.SlideContent>
              <Container>
                <Row>
                  <Col>
                    <S.SlideContentTitle>
                      WELL-INTEGRATED AND FAMILY-ORIENTED PERSONS{" "}
                    </S.SlideContentTitle>
                    <S.SlideContentText>
                      As members of SLCD family steadfast to our faith in God,
                      guided by the Blessed Virgin Mary and San Lorenzo Ruiz, we
                      commit ourselves to form well-integrated and
                      family-oriented persons, and to exercise inspired
                      leadership in the pursuit of academic and religious
                      excellence.
                    </S.SlideContentText>
                  </Col>
                </Row>
              </Container>
            </S.SlideContent>
          </S.SlideContentWrapper>
        </S.Slide>
        <S.Slide>
          <S.SlideImage src="/assets/images/slider3.jpeg" />

          <S.SlideContentWrapper>
            <S.SlideContent>
              <Container>
                <Row>
                  <Col>
                    <S.SlideContentTitle>
                      ENRICH AND IMPART FILIPINO SOCIO-CULTURAL TRADITION{" "}
                    </S.SlideContentTitle>
                    <S.SlideContentText>
                      In order to live and pursue with our mission, we dedicate
                      all our human resources to enrich and impart Filipino
                      socio-cultural tradition and to empower families to
                      participate in building a Christian environment.
                    </S.SlideContentText>
                  </Col>
                </Row>
              </Container>
            </S.SlideContent>
          </S.SlideContentWrapper>
        </S.Slide>
      </Carousel>
    </S.CarouselWrapper>
  );
};

export default Slider;
