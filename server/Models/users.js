import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    userName: String,
    password: String
})

const Users = mongoose.model("Users", userSchema)

export default Users