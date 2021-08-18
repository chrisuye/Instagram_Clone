import React from 'react';

const Comment = ({ comment, imageId }) => {
    return ( 
        <div className='Commment'>
            <div className='Comments'>
                <p> <strong>{comment.userName}</strong> {comment.comment}</p>
            </div>
        </div>
     );
}
 
export default Comment;