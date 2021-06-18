import axios from 'axios'

const url = 'http://localhost:5000/instagram'

export const signUpUser = (user) => axios.post(url, user)
export const signIn = (user) => axios.post(`${url}/signin`, user)
export const fetchUsers = () => axios.get(url)
export const updateUser = (id, user) => axios.patch(`${url}/${id}`, user)
export const deleteUser = (id) => axios.delete(`${url}/${id}`)

export const postImage = (image) => axios.post(`${url}/image`, image)
export const fetchImages = () => axios.get(`${url}/image`)
export const updateImage = (id, image) => axios.patch(`${url}/image/${id}`, image)
export const deleteImage = (id) => axios.delete(`${url}/image/${id}`)

export const postComment = (comment) => axios.post(`${url}/comment`, comment)
export const fetchComments = () => axios.get(`${url}/comment`)
export const updateComment = (id, comment) => axios.patch(`${url}/comment/${id}`, comment)
export const deleteComment = (id) => axios.delete(`${url}/comment/${id}`)