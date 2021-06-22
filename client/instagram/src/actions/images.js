import * as api from '../api/api'
import * as actions from '../constants/actions'

export const postImage = (image) => async(dispatch) => {
    try {
        const { data } = await api.postImage(image)

        dispatch({
            type: actions.POSTIMAGE,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchImages = () => async(dispatch) => {
    try {
        const { data } = await api.fetchImages()
        dispatch({
            type: actions.FETCHIMAGES,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateImage = (id, image) => async(dispatch) => {
    try {
        const { data } = await api.updateImage(id, image)

        dispatch({
            type: actions.UPDATEIMAGE,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteImage = (id) => async(dispatch) => {
    try {
        await api.deleteImage(id)

        dispatch({
            type: actions.DELETEIMAGE,
            payload: id
        })
    } catch (error) {
        console.log(error.message)
    }
}