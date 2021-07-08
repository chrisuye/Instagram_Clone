import React from 'react';
import DefaultProfile from '../images/defaultProfile.png'

const SidePanel = ({ user }) => {
    return ( 
        <div className='sidePanel'>
            <p className='sidePanel'><img className='sidePanel' alt='Profile' src={DefaultProfile} width='25px' height='25px'/></p>
            <p className='sidePanel'>{user.userName}</p>
            <button className='sidePanelFollow'>follow</button>
            <p className='sidePanelFollow'>followed by+</p>
        </div>
     );
}
 
export default SidePanel;