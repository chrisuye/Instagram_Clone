import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (userSignIn = {status: false, message: "default message"}, action) => {
    switch (action.type) {
        case actions.SIGNINUSER:
            return action.payload
        default:
            return userSignIn
    }
}