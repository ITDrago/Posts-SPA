import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../components/hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'

const PostIdPage = () => {
  const params = useParams()
  const [post,setPost] = useState({})
  const [comment, setComment] = useState([])
  const [fetchPostById , isLoading, error] = useFetching(async() =>{
    
    const response = await PostService.getById(params.id)
    setPost(response.data)
    
  })
  
  const [fetchCommentById , isLoadingComment, commError] = useFetching(async() =>{
    
    const responseComment = await  PostService.getComments(params.id)
    setComment(responseComment.data)

    
  })  

  useEffect(()=> {
    fetchPostById()
    fetchCommentById()
  },[])

  return (
    <div>
        <h1>You open post page with ID {params.id}</h1>
        <hr style={{margin:10}}/>
        {isLoading
            ? <Loader/>
            : <div>
                <h1>Comments on "{post.title}"</h1>
              </div>
        }
        {isLoadingComment
                 
              ? <Loader/>
              : <div>{comment.map(comm =>
                <div style={{margin:15, fontSize:20}}>
                    <h4>{comm.email}</h4>
                    <div>{comm.body}</div>
                </div>
                )}
            </div>
        }

     </div>
    
  )
}

export default PostIdPage