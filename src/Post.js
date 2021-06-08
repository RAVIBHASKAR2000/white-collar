import React ,{forwardRef} from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl},ref) => {
    console.log(photoUrl);
    return (
        <div ref={ref} className="post"> 
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p> {description}</p>

                </div>
            </div>
            <div className="post__body"> 
                <h4>{message}</h4> 
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
                
            </div>

        </div>
    )
})

export default Post
