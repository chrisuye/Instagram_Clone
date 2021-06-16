import express from "express"
import { 
    signUpUser,
    signInuser,
    postImage, 
    postComment, 
    getUsers, 
    getImages, 
    getComments, 
    updateUser, 
    updateImage, 
    updateComment,
    deleteUser,
    deleteImage,
    deleteComment
} from "../controllers/posts.js"

const router = express.Router()

router.post('/', signUpUser)
router.get('/signin', signInuser)
router.get('/', getUsers)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

router.post('/image', postImage)
router.get('/image', getImages)
router.patch('/image/:id', updateImage)
router.delete('/image/:id', deleteImage)

router.post('/comment', postComment)
router.get('/comment', getComments)
router.patch('/comment/:id', updateComment)
router.delete('/comment/:id', deleteComment)

export default router