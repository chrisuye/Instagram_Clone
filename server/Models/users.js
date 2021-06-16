import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    fullName: String,
    image: String,
    bio: String,
    friends: [String],
    likedImages: [String]
})

const Users = mongoose.model("Users", userSchema)

export default Users