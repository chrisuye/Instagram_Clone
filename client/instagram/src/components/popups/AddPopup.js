import React, { useState } from 'react';
import './Popup.css'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { postImage } from '../../actions/images';

const AddPopup = (props) => {
    const dispatch = useDispatch()
    const currentUser = sessionStorage.getItem('user')
    const [post, setPost] = useState({
        userName: currentUser,
        image: '',
        description: ''
    })

    return ( props.trigger ) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h3>New Post</h3>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            <FileBase 
                type='file'
                multiple={false}
                onDone = {({ base64 }) => setPost({...post, image: base64})}
            />

            <button onClick={() => {
                dispatch(postImage(post))
                props.setTrigger(false)
            }}>Share</button>
        </div>
    </div>
    ): "";
}
 
export default AddPopup;