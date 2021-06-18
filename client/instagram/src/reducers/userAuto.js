import * as actions from '../constants/actions'
/* eslint-disable import/no-anonymous-default-export */

export default (userAuto = [], action) => {
    switch (action.type) {
        case actions.SIGNUP:
            return action.payload
        case actions.SIGNINUSER:
            return action.payload
        default:
            return userAuto
    }
}