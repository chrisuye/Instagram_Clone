import React from 'react';
import Face from '../images/face.svg'

const Comment = ({ comment, imageId }) => {
    return ( 
        <div className='Commment'>
            <div className='Comments'>
                <p> <strong>{comment.userName}</strong> {comment.comment} </p>
            </div>
            <div className='CommentWrite'>
                <button className='CommentWriteFace'><img alt='Face' src={Face} width='20px' height='20px' /></button>
                <input className='CommentWrite' placeholder='Add a Comment...' type='text'/>
                <button className='CommentWritePost'>Post</button>
            </div>
        </div>
     );
}
 
export default Comment;