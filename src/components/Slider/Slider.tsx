import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Slider.styles";
import Slide from './Slide';

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
    infiniteLoop: true,
  };

  return (
    <S.CarouselWrapper>
      <Carousel {...options}>
        <Slide image="/assets/images/slider1.jpeg" title="TOTALLY TRANSFORMED PERSON WITH CHRISTIAN VALUES">
        We envision a totally transformed person with Christian
                      values practised in the family and community that
                      preserved the richness of Filipino heritage and diverse
                      cultures in harmony with God's creation.
        </Slide>
        <Slide image="/assets/images/slider2.jpeg" title="WELL-INTEGRATED AND FAMILY-ORIENTED PERSONS">
        As members of SLCD family steadfast to our faith in God,
                      guided by the Blessed Virgin Mary and San Lorenzo Ruiz, we
                      commit ourselves to form well-integrated and
                      family-oriented persons, and to exercise inspired
                      leadership in the pursuit of academic and religious
                      excellence.
        </Slide>
        <Slide image="/assets/images/slider3.jpeg" title="ENRICH AND IMPART FILIPINO SOCIO-CULTURAL TRADITION">
        In order to live and pursue with our mission, we dedicate
                      all our human resources to enrich and impart Filipino
                      socio-cultural tradition and to empower families to
                      participate in building a Christian environment.
        </Slide>
      </Carousel>
    </S.CarouselWrapper>
  );
};

export default Slider;
