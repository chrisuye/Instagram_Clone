import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signInUser } from '../../actions/userAuto';



const SignIn = () => {
    let history = useHistory()
    let dispatch = useDispatch()

    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    let { status } =  useSelector((state) => state.userSignIn)

    const handleLogIn = (e) => {
        e.preventDefault()
        console.log(user)
        dispatch(signInUser(user))
    }

    if (status) {
         history.push('/homepage')
    }

    return ( 
        <div>
            <input type='text' onChange={(e) => setUser({...user, userName: e.target.value})}/>
            <input type='password' onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button onClick={handleLogIn}>Log in</button>
            <Link to='/signup'>
                <button>Sign up</button>
            </Link>
        </div>
     );
}
 
export default SignIn;