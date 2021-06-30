import './App.css';
import { fetchUsers, updateUser, deleteUser } from './actions/users'
import { postComment, fetchComments, updateComment, deleteComment } from './actions/comments'
import { postImage, fetchImages, updateImage, deleteImage } from './actions/images'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import HomePage from './components/HomePage';

const App = () => {
  // const [userName, setUserName] = useState(null)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(signInUser({
  //     userName: "kalo",
  //     password: "chris1996"
  //   }))
  // }, [userName, dispatch])
  
  // const user =  useSelector((state) => state.userAuto)
  // console.log(user)
  // console.log("check")

  

  // const [user, setUser] = useState(null)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [user, dispatch])

  // const users = useSelector(state => state.users)
  // console.log(users)

  // const [comment, setcomment] = useState(null)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchComments())
  // }, [comment, dispatch])

  // const comments = useSelector(state => state.comments)
  // console.log(comments)

  // const [image, setImage] = useState(null)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchImages())
  // }, [image, dispatch])

  // const images = useSelector(state => state.images)
  // console.log(images)

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/homepage' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
