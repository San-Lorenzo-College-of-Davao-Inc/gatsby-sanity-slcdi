import styled from 'styled-components';

export const Wrapper = styled.div`
    & .nav-link {
        color: #fff!important;
        display: inline-block;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 158px;
        padding: 0 15px!important;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s ease 0s;
        &:hover {
            color: #EC1C23!important; 
        }
    }

    & .navbar {
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 99;
        background: transparent none repeat scroll 0 0;
        padding: 30px 0;
        & .nav-link {
            line-height: 150px;
        }
    }

    &.sticky .navbar {
        transition: all 0.6s ease 0s;
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.04);
        left: 0;
        padding: 10px 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        & .nav-link {
            line-height: inherit;
        }
    }
    &.sticky.small {
        min-height: 79px;
    }
`;