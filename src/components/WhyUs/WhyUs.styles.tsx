import styled from 'styled-components';

export const Container = styled.div`
    background: url(/assets/images/choose-bd.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    position: relative;
    padding-top: 79px;
    
    & > div.container {
        z-index: 1;
        position: relative;
        color: #FFF;
    }

    &:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: rgba(44, 43, 94, 0.9);
    }

`