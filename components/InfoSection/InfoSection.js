import React , { Component }from 'react'
import {InfoSec,InfoBox,BoxText,SubTitle,Title,Button,Slider} from './InfoSection.elements'
import logo from '../../assets/halloween.png';
import witcher from '../../assets/pngwing.com.png';
import {Nav,Menu,Logo,NavMenu,NavItem,NavLink} from '../Navbar/Navbar.elements'

function InfoSection() {
    return (
        <InfoSec>
            <Nav>
            <Menu>
            <Logo><img src={logo} alt="logo" /></Logo>
            <NavMenu>
                    <NavItem>
                        <NavLink>about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>artists</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>news</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>tickets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>contacts</NavLink>
                    </NavItem>
                </NavMenu>
            </Menu>
            </Nav>
            <InfoBox>
                <BoxText>
                    <SubTitle>october 31, Melbourne</SubTitle>
                    <Title>halloween party</Title>
                    <Button>Sign up to party</Button>
                </BoxText>
                <Slider>
                <img src={witcher} alt="logo" />
                </Slider>
            </InfoBox>
        </InfoSec>
    )
}

export default InfoSection
