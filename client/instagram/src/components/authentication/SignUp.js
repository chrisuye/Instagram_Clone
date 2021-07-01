import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../actions/userAuto';

const SignUp = (props) => {
    let history = useHistory()
    let dispatch = useDispatch()

    const [newUser, setNewUser] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
        image: '',
        bio: ''
    })

    let { status } = useSelector((state) => state.userSignUp)
    console.log(status)

    function handleSignUp(e) {
        e.preventDefault()
        dispatch(signUp(newUser))
    }

    if (status) {
        sessionStorage.setItem('user', newUser.userName)
        history.push('/homepage')
    }

    return ( 
        <form>
            <h1 className='form'>Instagram</h1>
            <h3 className='form'>Sign up to see photos and videos from your friends.</h3>
            <input className='form' placeholder='Username' type='text' onChange={(e) => setNewUser({...newUser, userName: e.target.value})}/>
            <input className='form' placeholder='Password' type='password' onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
            <input className='form' placeholder='Email' type='email' onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>
            <input className='form' placeholder='Fullname' type='text' onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}/>
            <button className='form' onClick={handleSignUp}>Sign up</button>
        </form>
     );
}
 
export default SignUp;