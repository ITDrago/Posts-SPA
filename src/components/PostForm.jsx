import React from 'react'
import { useState } from 'react';
import {createRef } from 'react';
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost ={
            ...post, id:Date.now(), createRef:createRef(null)
        }
        create(newPost) 
        setPost({title:'', body:''})
    }

    

  return (
    <form>
        <MyInput 
          value = {post.title}
          onChange = {e => setPost({...post, title:e.target.value})}
          type='text' placeholder='Post name'
        />

        <MyInput 
          value = {post.body}
          onChange = {e => setPost({...post, body:e.target.value})}
          type='text' placeholder='Post description'
        />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  )
}

export default PostForm