import React from 'react';

const Card = ({setUser}) => {
    
    return ( 
        <div className='card'>
            <div className='cardHeader'>
                <button>Profile</button>
                <p>Username</p>
                <button>option</button>
            </div>
            <p>Image goes here</p>
            <div className='cardButtons'>
                <button>Like</button>
                <button>Comment</button>
                <button>Send</button>
                <button>Save</button>
            </div>
            <p>0 Likes</p>
            <div className='cardComments'>
                <p> <strong>Username</strong> comment </p>
            </div>
            <div className='cardWriteComment'>
                <button>Face</button>
                <input placeholder='Add a Comment...' type='text'/>
                <button>Post</button>
            </div>
        </div>
     );
}
 
export default Card;