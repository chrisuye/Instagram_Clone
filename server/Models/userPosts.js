import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    userName: String,
    image: String,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const UserPosts = mongoose.model("UserPosts", postSchema)

export default UserPosts

