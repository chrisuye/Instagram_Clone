import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (users=[], action) => {
    switch (action.type) {
        case actions.FETCHUSERS:
            return action.payload
        case actions.UPDATEUSER:
            return users.map((user) => user._id === action.payload._id ? action.payload : user)
        case actions.DELETEUSER:
            return users.filter((user) => user._id !== action.payload)
        default:
            return users
    }
}