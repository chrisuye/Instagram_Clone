import logo from './logo.svg';
import './App.css';
import { signUp, signInUser } from './actions/userAuto'
import { fetchUsers, updateUser, deleteUser } from './actions/users'
import { postComment, fetchComments, updateComment, deleteComment } from './actions/comments'
import { postImage, fetchImages, updateImage, deleteImage } from './actions/images'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
