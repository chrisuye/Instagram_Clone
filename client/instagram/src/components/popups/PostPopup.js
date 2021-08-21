import React from 'react';
import './Popup.css'

const PostPopup = ({ trigger, image, comments, setTrigger}) => {

    return ( trigger ) ? (
    <div className='postpopup'>
        <button className='post-close-btn' onClick={() => setTrigger(false)}>Close</button>
        <div className='postpopup-inner'>
            <h3>Comments</h3>
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