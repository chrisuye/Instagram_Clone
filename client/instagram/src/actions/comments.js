import * as api from '../api/api'
import * as actions from '../constants/actions'

export const postComment = (comment) => async(dispatch) => {
    try {
        const { data } = await api.postComment(comment)

        dispatch({
            type: actions.POSTCOMMENT,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchComments = () => async(dispatch) => {
    try {
        const { data } = await api.fetchComments()

        dispatch({
            type: actions.FETCHCOMMENTS,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateComment = (id, comment) => async(dispatch) => {
    try {
        const { data } = await api.updateComment(id, comment)

        dispatch({
            type: actions.UPDATECOMMENT,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteComment = (id) => async(dispatch) => {
    try {
        await api.deleteComment(id)

        dispatch({
            type: actions.DELETECOMMENT,
            payload: id
        })
    } catch (error) {
        console.log(error.message)
    }
}