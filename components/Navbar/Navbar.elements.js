import styled from 'styled-components';

export const Nav = styled.nav`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
`

export const Menu = styled.div`
    max-width: 1160px;
    padding: 40px 0px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
` 

export const NavMenu = styled.ul`
    margin-top: 30px;
    display: inline-block;
    align-items: center;
    padding:0px;
`

export const NavItem = styled.li`
    display: inline-block;
    align-items: center;
`

export const NavLink = styled.a`
    cursor: pointer;
    margin: 0px 15px;
    font-size: 23px;
    line-height: 22px;
    color: #808080;

    font-weight: 400;
    font-family: "Bree Serif";

    &:hover{
        color: #ff5722;
    }
`