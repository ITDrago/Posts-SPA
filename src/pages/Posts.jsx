import { useEffect, useState } from 'react';
import { usePosts } from '../components/hooks/usePost';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { getPageCount, getPushArray } from '../utils/pages';
import { useFetching } from '../components/hooks/useFetching';
function Posts() {
  const [posts,setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'' , query:''})
  const [modal, setModal] = useState()
  const [totalPage, setTotalPage] = useState(0)
  const [limit,setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = getPushArray(totalPage)
 
  const [fetchPost, isPostLoading, postError] = useFetching( async() => {
    const response = await  PostService.getAll(limit,page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount,limit))
  })
  
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query)
  

  const createNewPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    console.log(post)
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() =>{
    fetchPost()
  },[page])



  return (
    <div className="App">
      <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visiblle={modal} setVisible={setModal}><PostForm create={createNewPost}/></MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Error ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
            <Loader/>
          </div>
        : <PostList remove={removePost} posts = {sortedAndSearchedPosts} title={'Post List'}/>  
        
      }
      <div className='page__wrapper'>
        {pagesArray.map(p => 
        <span 
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}>
          {p}
        </span>)}
      </div>
    </div>  
  );
}

export default Posts;