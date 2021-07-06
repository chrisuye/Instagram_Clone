import './homePage.css'
import React, { useState, useEffect }  from 'react';
import Card from './Card';
import SidePanel from './SidePanel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../actions/comments';
import { fetchUsers } from '../actions/users'
import { fetchImages } from '../actions/images'
import Logo from '../images/logo.svg'
import Home from '../images/home.svg'
import Message from '../images/message.svg'
import Add from '../images/add.svg'
import Nav from '../images/nav.svg'
import Heart from '../images/heart.svg'

const HomePage = (props) => {
    const dispatch = useDispatch()
    const currentUser = sessionStorage.getItem('user')
    console.log(currentUser)

    const [user, setUser] = useState(null)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [user, dispatch])

    const users = useSelector(state => state.users)

    const [comment, setComment] = useState(null)

    useEffect(() => {
        dispatch(fetchComments())
    }, [comment, dispatch])

    const [image, setImage] = useState(null)

    useEffect(() => {
        dispatch(fetchImages())
    }, [image, dispatch])

    const images = useSelector(state => state.images)
    

    return ( 
        <div className='homePage'>
            <nav className='nav'>
                <ul>
                    <li><img className='navBar' alt='Instagram logo' src={Logo} width='150px' height='50px'/></li>
                    <li><input className='navBar' placeholder='search' type='text'></input></li>
                    <li><button className='navBar'><img alt='Home' src={Home} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Message' src={Message} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Add' src={Add} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Nav' src={Nav} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'><img alt='Heart' src={Heart} width='30px' height='30px'/></button></li>
                    <li><button className='navBar'>Profile</button></li>
                </ul>
            </nav>
            <div className='homeLeft'>
                { images.map(image => <Card image={image}/>)}
    
            </div>
            <div className='homeRight'>
                <p className='homeRightImage'>user image </p>
                <p className='homeRightUser'>{currentUser}</p>
                <button className='homeRightSwitch'>Switch</button>
                <p className='homeRightName'>name</p>
                <p className='homeRightSug'>Suggestions For You</p>
                <button className='homeRightAll'>See All</button>
                { users.map(user => {
                    if(user.userName !== currentUser) {
                        return <SidePanel user={user}/>
                    }
                    return null
                })}
                
            </div>
        </div>
     );
}
 
export default HomePage;