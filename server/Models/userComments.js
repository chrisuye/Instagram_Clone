import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    imageId: String,
    userName: String,
    comment: String,
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const UserComments = mongoose.model("UserComments", commentSchema)

export default UserComments