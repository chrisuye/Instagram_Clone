import React, { useState, useEffect }  from 'react';
import Card from './Card';
import SidePanel from './SidePanel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../actions/comments';
import { fetchUsers } from '../actions/users'
import { fetchImages } from '../actions/images'

const HomePage = (props) => {
    const dispatch = useDispatch()
    const currentUser = sessionStorage.getItem('user')
    console.log(currentUser)

    const [user, setUser] = useState(null)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [user, dispatch])

    const users = useSelector(state => state.users)
    console.log(users)

    const [comment, setComment] = useState(null)

    useEffect(() => {
        dispatch(fetchComments())
    }, [comment, dispatch])

    const comments = useSelector(state => state.comments)
    console.log(comments)

    const [image, setImage] = useState(null)

    useEffect(() => {
        dispatch(fetchImages())
    }, [image, dispatch])

    const images = useSelector(state => state.images)
    console.log(images)

    return ( 
        <div className='homePage'>
            <nav>
                <h3 className='navBar'> Instagram </h3>
                <input placeholder='search' type='text'></input>
                <button>Home</button>
                <button>Message</button>
                <button>Add</button>
                <button>Discover</button>
                <button>Likes</button>
                <button>Profile</button>
            </nav>
            <div className='homeLeft'>
                <Card setUser setComment setImage/>
            </div>
            <div className='homeRight'>
                <SidePanel/>
            </div>
        </div>
     );
}
 
export default HomePage;