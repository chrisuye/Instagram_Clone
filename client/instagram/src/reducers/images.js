import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (images=[], action) => {
    
    switch (action.type) {
        case actions.POSTIMAGE:
            return [...images, action.payload]
        
        case actions.FETCHIMAGES:
            return action.payload
        
        case actions.UPDATEIMAGE:
            return images.map(image => image._id === action.payload._id ? action.payload : image)

        case actions.DELETEIMAGE:
            return images.filter(image => image._id !== action.payload)

        default:
            return images
    }
}