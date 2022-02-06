import React,{useState} from 'react';
import logo from '../../assets/halloween.png';
import {Head,Container,Logo,Nav,Link,Menu} from './styles/HaderStyles';
import { AiFillGooglePlusCircle,AiOutlineTwitter } from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';

function Header() {

    const [open,setOpen] = useState(false);

  return(
    <Head>
        <Container>
            <Logo>
                <img src={logo} alt={Logo}/>
            </Logo>
            <Nav open={open} >
                <Link>about</Link>
                <Link>artists</Link>
                <Link>events</Link>
                <Link>news</Link>
                <Link>tikets</Link>
                <Link>contacts</Link>
                <Link><AiOutlineTwitter/></Link>
                <Link><AiFillGooglePlusCircle/></Link>
            </Nav>
            <Menu open={open} onClick={() => setOpen(!open)}>
                <FaBars/>
            </Menu>
        </Container>
    </Head>
  );
}

export default Header;
