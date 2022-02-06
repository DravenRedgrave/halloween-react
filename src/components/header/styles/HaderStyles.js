import styled from "styled-components/macro";
import "@fontsource/bree-serif";

export const Head = styled.div`
    width:100%;
    height:15vh;
    background-color:rgb(0%, 0%, 0%, 0.5);
    display: flex;
    justify-content:center;
`;

export const Container = styled.div`
    max-width:1170px;
    margin: 0 auto;
    width: 90%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    text-align:center;
`;

export const Nav = styled.nav`
    position:relative;

    @media(max-width:968px){
        display: flex;
        flex-direction:column;
        background-color: #fdfdfdfa;
        transform: ${(props) => props.open ? 'translate(0)' : 'translate(-500%)'};
        transition: transform 0.3s ease-in-out;
        z-index: 999;
        position: absolute;
        top:15%;
        background-color:rgb(0%, 0%, 0%, 1);
        width: 100%;
        left: 0;
    }
`;

export const Link = styled.a`
    font-size: 20px;
    line-height: 22px;
    color: #808080;
    font-weight: 400;
    font-family: "Bree Serif";
    margin:0px 15px;
    align-items: center;
    text-align:center;

    @media(max-width:968px){
        padding: 15px 0px;
        margin: 0px;
        margin-bottom:5px;
        border: 2px solid rgba(128,128,128,0.2);
    }

    &:hover{
        color: #ff5722;
    }

    svg:nth-child(1){
        color: #5ea9dd;
        font-size:20px;
    }
    svg:nth-child(2){
        color: #dd4b39;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    text-align:center;
`;

export const Menu = styled.div`
    display: none;
    svg{
        color:#fff;
        font-size:25px;
        cursor: pointer;
    }
    @media(max-width:968px){
        display: block;
    }
`;

