import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import Login from "./Login.js";
import { auth } from './firebase';

import {useDispatch} from "react-redux";
import {login } from "./features/userSlice";
import Widgets from "./Widgets.js";

import Profile from "./profile.js";

import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";


function home() {
    return (
       
        <div className="app__main">
           
            <div className="app__body">
                <Sidebar/>
                <Feed />
                <Widgets />
            </div>
        </div>
      
    )
}

export default home
