import logo from './logo.svg';
import './App.css';
import { signUp, signInUser } from './actions/users'
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
