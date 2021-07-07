import React from 'react';
import Logo from '../images/logo.svg'
import Home from '../images/home.svg'
import Message from '../images/message.svg'
import Add from '../images/add.svg'
import NavSVG from '../images/nav.svg'
import Heart from '../images/heart.svg'

const Nav = (props) => {
    return ( 
        <nav className='nav'>
                <ul>
                    <li><img className='navBar' alt='Instagram logo' src={Logo} width='150px' height='50px'/></li>
                    <li><input className='navBar' placeholder='search' type='text'></input></li>
                    <li><button className='navBar'><img alt='Home' src={Home} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Message' src={Message} width='30px' height='30px'/></button></li>
                    <li><button className='navBar' onClick={() => props.setAdd(true)}><img alt='Add' src={Add} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Nav' src={NavSVG} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Heart' src={Heart} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'>Profile</button></li>
                </ul>
            </nav>
     );
}
 
export default Nav;