import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (userSignUp = {status: false, message: "default message"}, action) => {
    switch (action.type) {
        case actions.SIGNUP:
            return action.payload
        default:
            return userSignUp
    }
}