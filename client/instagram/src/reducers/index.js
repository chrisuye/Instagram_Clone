import { combineReducers } from 'redux'

import userSignIn from './userSignIn'
import userSignUp from './userSignUp'
import users from './users'
import comments from './comments'
import images from './images'

export default combineReducers({ userSignIn, userSignUp, users, comments, images })