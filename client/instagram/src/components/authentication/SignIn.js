import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../actions/userAuto';
import './SignIn.css'



const SignIn = () => {
    let history = useHistory()
    let dispatch = useDispatch()

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    let { status, message } =  useSelector((state) => state.userSignIn)

    const handleLogIn = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(signInUser(user))
    }

    const handleSignUp = (e) => {
        history.push('/signup')
    }

    if (status) {
        sessionStorage.setItem('id', message)
        sessionStorage.setItem('user', user.userName)
         history.push('/homepage')
    }

    return ( 
        <form>
            <h1 className='form'>Instagram</h1>
            <input className='form' type='text' placeholder='Username' onChange={(e) => setUser({...user, userName: e.target.value})}/>
            <input className='form' type='password' placeholder='Password' onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button className='form' onClick={handleLogIn}>Log In</button>
            <button className='form' onClick={handleSignUp}>Sign up</button>
        </form>
     );
}
 
export default SignIn;