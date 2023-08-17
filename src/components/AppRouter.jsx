import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import PostIdPage from '../pages/PostIdPage';


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/post/:id' element={<PostIdPage/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter