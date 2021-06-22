import { combineReducers } from 'redux'

import userAuto from './userAuto'
import users from './users'
import comments from './comments'
import images from './images'

export default combineReducers({ userAuto, users, comments, images })