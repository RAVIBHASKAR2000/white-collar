import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOptions({ avatar,Icon,title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOptions">
           {Icon && <Icon className="headerOptions__icons"/>}
            {avatar && (
                <Avatar  className="headerOptions__icons" src={user?.photoURL}> 
                    {user?.email[0]}
                </Avatar> 
            )}
           <h3 className="headerOptions__title">{title}</h3>
        </div>
    );
}

export default HeaderOptions
