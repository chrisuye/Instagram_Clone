import React, { useState, useEffect }  from 'react';
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux'
import './Suggestion.css'
import { fetchUsers } from '../actions/users';
import DefaultProfile from '../images/defaultProfile.png'

const Suggestion = () => {
    let dispatch = useDispatch()

    const [user] = useState(null)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [user, dispatch])

    const users = useSelector(state => state.users)

    console.log(users)
    return ( 
        <div className='suggestion'>
            <Nav/>
            <div className='suggestions'>
                <h3>All Suggestions</h3>
                {users.map(user => {
                    return (
                        <div className='suggestionsInner'>
                            <button className='suggestionsFollow'>Follow</button>
                            <p className='suggestionsImageUser'> <img className='suggestionsImage' alt='Profile' src={DefaultProfile} width='30px' height='30px'/> {user.userName}</p>
                            <p className='suggestionsFollow'>Follwed by+</p>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Suggestion;