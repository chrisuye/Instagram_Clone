import './homePage.css'
import React, { useState, useEffect }  from 'react';
import Card from './Card';
import SidePanel from './SidePanel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../actions/comments';
import { fetchUsers } from '../actions/users'
import { fetchImages } from '../actions/images'
import Nav from './Nav';
import AddPopup from './popups/AddPopup';
import { postImage } from '../api/api';

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

    const [addImage, setAddImage] = useState(false)
    

    return ( 
        <div className='homePage'>
            <Nav
            add={addImage}
            setAdd={setAddImage}
            />
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

            <AddPopup 
            trigger={addImage} 
            setTrigger={setAddImage}
            />
        </div>
     );
}
 
export default HomePage;