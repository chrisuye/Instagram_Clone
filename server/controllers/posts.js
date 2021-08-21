import Users from "../Models/users.js";
import UserPosts from "../Models/userPosts.js";
import UserComments from "../Models/userComments.js";
import mongoose from "mongoose";

export const signUpUser = async (req, res) => {
    const user = req.body
    const { userName } = user

    const newUser = new Users(user)

    try {
        
        const checkUser = await Users.find({userName: userName})

        if (checkUser.length > 0) {
            res.status(200).json({
                status: false,
                message: 'userName already exists'
            })
        } else {
            await newUser.save()

            res.status(200).json({
                status: true,
                message: "Success"
            })
        }

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const signInuser = async (req, res) => {
    const { userName, password } = req.body

    try {
        const user = await Users.find({userName: userName})
        
        if (user.length > 0) {
            if (user[0].password === password) {
                console.log(user[0]._id)
                res.status(200).json({
                    status: true,
                    message: user[0]._id
                })
            } else {
                res.status(200).json({
                    status: false,
                    message: "Password does not match"
                })
            }
        } else res.status(200).json({
            status: false,
            message: "userName does not exist"
        })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
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

    const user = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')
    //console.log(user)
    const findUser = await Users.findOne({_id})
    if (findUser.likedImages.includes(user.likedImages)) {
        const update = findUser.likedImages.filter( image => image !== user.likedImages[0])
        console.log(update)
        const obj = {
            likedImages: update
        }
        const updatedUser = await Users.findByIdAndUpdate(_id, {...obj, _id}, {new: true})
        res.json(updatedUser)
    } else {
        const update = findUser.likedImages.concat(user.likedImages)
        const obj = {
            likedImages: update
        }
        const updatedUser = await Users.findByIdAndUpdate(_id, {...obj, _id}, {new: true})
        res.json(updatedUser)
    }
}

export const deleteUser = async (req, res) => {
    const {id: _id} = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')

    await Users.findByIdAndRemove(_id)
    res.json({message: `User with Id ${_id} has been deleted`})
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

        res.status(200).json(images.reverse())
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateImage = async (req, res) => {
    const {id: _id} = req.params
    const image = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')

    const updatedImage = await UserPosts.findByIdAndUpdate(_id, {...image, _id}, {new: true})
    res.json(updatedImage)
}

export const deleteImage = async (req, res) => {
    const {id: _id} = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')

    await UserPosts.findByIdAndRemove(_id)

    res.json({message: `Image with Id ${_id} has been deleted`})
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

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')

    const updatedComment = await UserComments.findByIdAndUpdate(_id, {...comment, _id}, {new: true})
    res.json(updatedComment)
}

export const deleteComment = async (req, res) => {
    const {id: _id} = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')

    await UserComments.findByIdAndRemove(_id)

    res.json({message: `Comment with Id ${_id} has been deleted`})
}
