import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (comments = [], action) => {
    switch (action.type) {
        case actions.POSTCOMMENT:
            return [...comments, action.payload]
        
        case actions.FETCHCOMMENTS:
            return action.payload
        
        case actions.UPDATECOMMENT:
            return comments.map(comment => comment._id === action.payload._id? action.payload : comment)
        
        case actions.DELETECOMMENT:
            return comments.filter(comment => comment._id !== action.payload)
        default:
            return comments
    }
}