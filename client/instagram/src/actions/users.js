import * as api from '../api/api'
import * as actions from '../constants/actions'

export const signUp = (user) => async(dispatch) => {
    try {
        const { data } = await api.signUpUser(user)
        
        dispatch({
            type: actions.SIGNUP,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const signInUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.signIn(user)
        dispatch({
            type: actions.SIGNINUSER,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}