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
import Home from "./home.js";

import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



function Main() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user logged in 
        dispatch(login({
                   email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoURL:userAuth.photoURL
        }));
      }
      else{
        // user logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    
    <div className="main">
       
      {/*app body */}
      
        {!user ? ( <Login /> ) : (
            <>
            <Header />
            <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </>
      )}

    </div>
  );
}

export default Main;
