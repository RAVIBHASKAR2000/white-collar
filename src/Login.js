import React, { useState } from 'react'
import "./Login.css";
import {auth } from "./firebase";
import {useDispatch} from "react-redux";
import {login } from "./features/userSlice";

function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name , setName] = useState("");
   
    const dispatch = useDispatch();



    const register = () =>{
        if(!name){
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName :name,
                
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,   // xxxxxxxxxxx
                    uid: userAuth.user.uid,       //xxxxxxxxxxxxx
                    displayName: name,
                   
                }));
            });
        })
        .catch((error)=> alert(error));
        };
    
    
    
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login ({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL:userAuth.user.photoURL
            }))
        })
        .catch((error) => alert(error));
    };

    return (
        <div className="login" style={{ 
            backgroundImage: `url("./images/loginpage.jpg")`,
            backgroundRepeat: "no-repeat",
            width:"100%",
            height:"100%",
            backgroundPosition:"center",
            backgroundSize:"cover" 
          }}>
            <img src="./images/logo1.png " alt="Login" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)}  placeholder="Full Name" type ="text" />
              
                <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}> Sign In </button>
            </form>
            <p>Not a Member ? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
