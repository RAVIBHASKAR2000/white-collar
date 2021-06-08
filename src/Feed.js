import React,{useState,useEffect} from 'react';
import "./Feed.css";
import InputOptions from "./InputOptions.js";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import Post from "./Post.js"
import {db} from "./firebase.js";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const user= useSelector(selectUser);
    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState('');
    useEffect(() => {
       db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
         setPosts(snapshot.docs.map((doc) => (
             {
                 id : doc.id,
                 data: doc.data(),
             }
         ))  
       ));
    }, []);
    
    const sendPost = (e) => {
        e.preventDefault();
       db.collection('posts').add({
           name: user.displayName,
           description:user.email,
           message: input,
           photoUrl:user.photoURL || " ",
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),

       });
       setInput("");
    };
   
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
               
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon}  title ="Photo" color ="#7085f9"/>
                    <InputOptions Icon={SubscriptionsIcon}  title ="Video" color ="#E7A33E"/>
                    <InputOptions Icon={EventNoteIcon}  title ="Events" color ="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDayIcon}  title ="Write Article" color ="#7FC15E"/>

                </div>
            </div>

            {/*posts */}
            <FlipMove>
            {posts.map(({id, data: {name,description,message,photoUrl }}) => (
                <Post key={id} 
                    name ={name}
                    description ={description}
                    message={message}
                    photoUrl={photoUrl}
                    />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
