import express from "express"
import { signUpUser, postImage, postComment, getUsers, getImages, getComments, updateUser, updateImage, updateComment } from "../controllers/posts.js"

const router = express.Router()

router.post('/', signUpUser)
router.get('/', getUsers)
router.patch('/:id', updateUser)

router.post('/image', postImage)
router.get('/image', getImages)
router.patch('/image/:id', updateImage)

router.post('/comment', postComment)
router.get('/comment', getComments)
router.patch('/comment/:id', updateComment)

export default router