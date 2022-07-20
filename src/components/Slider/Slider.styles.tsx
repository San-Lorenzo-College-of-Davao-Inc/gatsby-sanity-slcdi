import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    & .slide:after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        background: rgba(0, 0, 0, 0.32);
        width: 100%;
        height: 100%;
    }
`

export const Slide = styled.div`
    position: relative;
`;

export const SlideImage = styled.img``;

export const SlideContentWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const SlideContent = styled.div`
    display: block;
    text-align: left;
    vertical-align: middle;
    z-index: 99;
    position: relative;
    height: 100%;
    width: 50%;
    margin-left: 100px;
    margin-bottom: 100px;
`;

export const SlideContentTitle = styled.h3`
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 52px;
    font-weight: 800;
    line-height: 58px;
    padding-top: 80px;
    text-transform: capitalize;
    -webkit-animation-delay: 500ms;
    animation-delay: 500ms;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
`;

export const SlideContentText = styled.p`
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 35px;
    -webkit-animation-delay: 1100ms;
    animation-delay: 1100ms;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
`;