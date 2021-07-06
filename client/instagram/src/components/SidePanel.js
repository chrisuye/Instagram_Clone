import React from 'react';

const SidePanel = ({ user }) => {
    return ( 
        <div className='sidePanel'>
            <p className='sidePanel'>{user.image}</p>
            <p className='sidePanel'>{user.userName}</p>
            <button className='sidePanelFollow'>follow</button>
            <p className='sidePanelFollow'>followed by+</p>
        </div>
     );
}
 
export default SidePanel;