import * as api from '../api/api'
import * as actions from '../constants/actions'

export const fetchUsers = () => async(dispatch) => {
    try {
        const { data } = await api.fetchUsers()

        dispatch({
            type: actions.FETCHUSERS,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateUser = (id, user) => async(dispatch) => {
    try {
        const { data } = await api.updateUser(id, user)

        dispatch({
            type: actions.UPDATEUSER,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
        await api.deleteUser(id)

        dispatch({
            type: actions.DELETEUSER,
            payload: id
        })
    } catch (error) {
        console.log(error.message)
    }
}