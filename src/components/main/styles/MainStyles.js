import styled from "styled-components/macro";
import bg from '../../../assets/Background.png'
import "@fontsource/permanent-marker";
import "@fontsource/open-sans";

export const MainBox = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-position:center;
    background-repeat:no-repeat;
    @media(max-width:1200px){
        height:auto;
}
`;

export const MainContainer = styled.div`
    max-width:1170px;
    margin:0 auto;
    width: 90%;
    display: flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width:1200px){
        flex-direction:column;
}
`;

export const TextBox = styled.div`
    max-width:450px;
`;

export const Text = styled.p`
    font-size: 24px;
    line-height: 22px;
    color: #ffffff;
    font-weight: 400;
    font-family: "Permanent Marker";
    text-align: left;
`;

export const Title = styled.h1`
    font-size: 80px;
    line-height: 60px;
    color: #ffffff;
    font-weight: 400;
    font-family: "Permanent Marker";
`;

export const Button = styled.a`
    font-size: 14px;
    line-height: 28px;
    color: #000000;
    font-weight: 700;
    font-family: "Open Sans";
    border-radius: 3px;
    background-color: #ff5722;
    padding:20px 30px;
    text-transform:uppercase;
`;