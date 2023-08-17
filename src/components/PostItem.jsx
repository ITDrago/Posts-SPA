import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";


const PostItem = (props) =>{

    const router = useNavigate()
    return (
        <div className = "post">
            <div className = "post__content"></div>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>  
        <div className = "post__btns"></div>
            <MyButton onClick={()=> router(`/post/${props.post.id}`)}>Open</MyButton>
            <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
        </div>   
    );  
};

export default PostItem;

