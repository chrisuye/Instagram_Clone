import Users from "../Models/users.js";
import UserPosts from "../Models/userPosts.js";
import UserComments from "../Models/userComments.js";
import mongoose from "mongoose";

export const signUpUser = async (req, res) => {
    const user = req.body

    const newUser = new Users(user)

    try {
        await newUser.save()

        res.status(201).json(newUser)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const signInuser = async (req, res) => {
    
}

export const getUsers = async (req, res) => {

    try {
        const users = await Users.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    const {id: _id} = req.params
    console.log(_id)

    const user = req.body
    console.log(user)

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Id is invalid'})

    const updatedUser = await Users.findByIdAndUpdate(_id, {...user, _id}, {new: true})
    res.json(updatedUser)
}

export const postImage = async (req, res) => {
    const post = req.body
    
    const newPost = new UserPosts(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getImages = async (req, res) => {
    try {
        const images = await UserPosts.find()

        res.status(200).json(images)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateImage = async (req, res) => {
    const {id: _id} = req.params
    const image = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Id is Invalid'})

    const updatedImage = await UserPosts.findByIdAndUpdate(_id, {...image, _id}, {new: true})
    res.json(updatedImage)
}

export const postComment = async (req, res) => {
    const comment = req.body

    const newComment = new UserComments(comment)

    try {
        await newComment.save()

        res.status(201).json(newComment)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await UserComments.find()

        res.status(200).json(comments)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateComment = async (req, res) => {
    const {id: _id} = req.params
    const comment = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Id is invalid'})

    const updatedComment = await UserComments.findByIdAndUpdate(_id, {...comment, _id}, {new: true})
    res.json(updatedComment)
}
