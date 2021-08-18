import React, { useState } from 'react';
import './Popup.css'
import { useDispatch } from 'react-redux'

const PostPopup = ({ trigger, image, comments, setTrigger}) => {
    const dispatch = useDispatch()
    const currentUser = sessionStorage.getItem('user')

    return ( trigger ) ? (
    <div className='postpopup'>
        <div className='postpopup-inner'>
            <h3>Comments</h3>
            <button className='post-close-btn' onClick={() => setTrigger(false)}>Close</button>
            { comments.map(comment => {
                console.log(image._id === comment.imageId)
                if (comment.imageId === image._id) {
                    return <p><strong>{comment.userName}</strong> {comment.comment}</p>
                }
                return null
            })}
        </div>
    </div>
    ): "";
}
 
export default PostPopup;