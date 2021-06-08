import React from 'react'
import {Nav,Menu,Logo,NavMenu,NavItem,NavLink} from './Navbar.elements';

function Navbar() {
    return (
        <Nav>
            <Menu>
                <Logo></Logo>
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
    )
}

export default Navbar
