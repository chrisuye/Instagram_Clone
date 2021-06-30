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
        history.push('/homepage')
    }

    return ( 
        <div>
            <input type='text' onChange={(e) => setNewUser({...newUser, userName: e.target.value})}/>
            <input type='password' onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
            <input type='text' onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>
            <input type='text' onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}/>
            <button onClick={handleSignUp}>Sign up</button>
        </div>
     );
}
 
export default SignUp;