import React, { useState } from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux'
import Option from '../images/option.svg'
import Like from '../images/like.svg'
import Liked from '../images/liked.svg'
import CommentSvg from '../images/comment.svg'
import Send from '../images/send.svg'
import Save from '../images/save.svg'
import Face from '../images/face.svg'
import DefaultProfile from '../images/defaultProfile.png'
import { postComment } from '../actions/comments'
import { updateUser } from '../actions/users'
import { updateImage } from '../actions/images'
import PostPopup from './popups/PostPopup';

const Card = ({ image, likes }) => {
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()
    const [comment, setComment] = useState({
        imageId: image._id,
        userName: sessionStorage.getItem('user'),
        comment: ''
    })
    const [post, setPost] = useState(false)
    const [liked, setLiked] = useState(likes.includes(image._id))
    let count = 0

    let id = sessionStorage.getItem('id')
    
    return ( 
        <div className='card'>
            <div className='cardHeader'>
                <button className='cardHeader' ><img className='cardHeader' alt='Profile' src={DefaultProfile} width='30px' height='30px'/></button>
                <p className='cardHeader' >{image.userName}</p>
                <button className='cardHeaderOption'><img alt='Options' src={Option} width='30px' height='30px' /></button>
            </div>
            <img alt='Post' src={image.image} width='600px' height='500px'/>
            <div className='cardButtons'>
                <button className='cardButtons'><img alt='Like' src={liked ? Liked : Like} width='30px' height='30px' onClick={() => {
                    setLiked(!liked)
                    dispatch(updateUser(id, {
                        likedImages: [image._id]
                    }))
                    if (liked) {
                        dispatch(updateImage(image._id, {
                            likes: image.likes - 1
                        }))
                    } else {
                        dispatch(updateImage(image._id, {
                            likes: image.likes + 1
                        }))
                    }
                    }}/></button>
                <button className='cardButtons'><img alt='Comment' src={CommentSvg} width='30px' height='30px' /></button>
                <button className='cardButtons'><img alt='Send' src={Send} width='30px' height='30px' /></button>
                <button className='cardButtonsSave'><img alt='Save' src={Save} width='30px' height='30px' /></button>
            </div>
            <p>{image.likes} Likes</p>
            <p className='cardButtonsViewMore' onClick={() => {setPost(true)}}> View More </p>
            { comments.map(comment => {
                if (comment.imageId === image._id && count < 3) {
                    count++
                    return <Comment comment={comment}/>
                }
                return null
            })}

            <div className='CommentWrite'>
                <button className='CommentWriteFace'><img alt='Face' src={Face} width='30px' height='30px' /></button>
                <input className='CommentWrite' placeholder='Add a Comment...' type='text' onChange={(e) => setComment({...comment, comment: e.target.value})}/>
                <button className='CommentWritePost' onClick={() => {
                    dispatch(postComment(comment))
                }
                }>Post</button>
            </div>

            <PostPopup 
            trigger = {post}
            setTrigger={setPost}
            image = {image}
            comments = {comments}/>
        </div>
     );
}
 
export default Card;