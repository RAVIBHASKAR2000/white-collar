import React from 'react'
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user =useSelector(selectUser);


    const recentItems = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p> {topic} </p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                    <img src="./images/image1.jpg" alt="" />
                    <Avatar src={user.photoURL}  className="siebar__avatar">{user.email[0]}</Avatar>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
            </div>  
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">250</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">250</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programing')}
                {recentItems('Softwareengineering')}
                {recentItems('design')}
            </div>

        </div> 
    )
}


export default Sidebar
