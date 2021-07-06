import React from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux'
import Option from '../images/option.svg'
import Like from '../images/like.svg'
import CommentSvg from '../images/comment.svg'
import Send from '../images/send.svg'
import Save from '../images/save.svg'

const Card = ({image}) => {
    console.log("check")
    console.log(image)
    const comments = useSelector(state => state.comments)
    console.log(comments)
    
    return ( 
        <div className='card'>
            <div className='cardHeader'>
                <button className='cardHeader' >Profile</button>
                <p className='cardHeader' >{image.userName}</p>
                <button className='cardHeader'><img alt='Options' src={Option} width='25px' height='25px' /></button>
            </div>
            <p>{image.image}</p>
            <div className='cardButtons'>
                <button className='cardButtons'><img alt='Like' src={Like} width='20px' height='20px' /></button>
                <button className='cardButtons'><img alt='Comment' src={CommentSvg} width='20px' height='20px' /></button>
                <button className='cardButtons'><img alt='Send' src={Send} width='20px' height='20px' /></button>
                <button className='cardButtonsSave'><img alt='Save' src={Save} width='20px' height='20px' /></button>
            </div>
            <p>{image.likes} Likes</p>
            { comments.map(comment => {
                console.log(image._id === comment.imageId)
                console.log(comment.imageId)
                if (comment.imageId === image._id) {
                    return <Comment comment={comment}/>
                }
                return null
            })}
        </div>
     );
}
 
export default Card;