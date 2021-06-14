import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    userName: String,
    image: String,
    description: String,
    tags: [String]
})

const UserPosts = mongoose.model("UserPosts", UserPosts)

export default UserPosts

