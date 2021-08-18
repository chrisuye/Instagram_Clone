import React from 'react';
import Logo from '../images/logo.svg'
import Home from '../images/home.svg'
import Message from '../images/message.svg'
import Add from '../images/add.svg'
import NavSVG from '../images/nav.svg'
import Heart from '../images/heart.svg'
import { useHistory } from 'react-router-dom';
import DefaultProfile from '../images/defaultProfile.png'

const Nav = (props) => {

    let history = useHistory()

    const navigateTo = (location) => {
        history.push(location)
    }

    return ( 
        <nav className='nav'>
                <ul>
                    <li><img className='navBar' alt='Instagram logo' src={Logo} width='150px' height='50px'/></li>
                    <li><input className='navBar' placeholder='search' type='text'></input></li>
                    <li><button className='navBar' onClick={() => navigateTo('/homepage')} ><img alt='Home' src={Home} width='35px' height='35px'/></button></li>
                    <li><button className='navBar'><img alt='Message' src={Message} width='35px' height='35px'/></button></li>
                    <li><button className='navBar' onClick={() => props.setAdd(true)}><img alt='Add' src={Add} width='35px' height='35px'/></button></li>
                    <li><button className='navBar' onClick={() => navigateTo('/explore')}><img alt='Nav' src={NavSVG} width='35px' height='35px'/></button></li>
                    <li><button className='navBar'><img alt='Heart' src={Heart} width='35px' height='35px'/></button></li>
                    <li><button className='navBarProfile'><img alt='Profile' src={DefaultProfile} width='35px' height='35px'/></button></li>
                </ul>
            </nav>
     );
}
 
export default Nav;