import styled from 'styled-components';
import img from '../../assets/Background.png';
export const InfoSec = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    color: #fff;
    position: relative;

    
    @media (max-width:1260px){
        height: auto;
    }
`
export const InfoBox = styled.div`
    max-width: 1160px;
    margin:0 auto;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;

    @media (max-width:1250px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        
    }
`
export const BoxText = styled.div`
    margin-top: 10%;
    max-width: 550px;
    @media (max-width:1250px){
        max-width: 100%;
        margin-top: 0%;
    }
`

export const Slider = styled.div`
    max-width: 550px;
    @media (max-width:1250px){
        max-width: 100%;
        margin-top: 5%;
    }
`
export const SubTitle = styled.p`
    font-size: 24px;
    line-height: 22px;
    color: #ffffff;
    font-weight: 400;
    font-family: "Permanent Marker";
    text-transform: uppercase;
    margin:0px;
`

export const Title = styled.h1`
    font-size: 80px;
    text-transform: uppercase;
    line-height: 60px;
    color: #ffffff;
    font-weight: 400;
    font-family: "Permanent Marker";
`

export const Button = styled.a`
    font-size: 14px;
    line-height: 28px;
    color: #000000;
    font-weight: 700;
    font-family: "Open Sans";
    text-transform: uppercase;
    border-radius: 3px;
    background-color: #ff5722;
    padding: 20px 25px;
    cursor: pointer;
`