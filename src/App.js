import './styles/App.css';
import React, { useEffect, useState } from 'react'
// import Counter from './components/Counter'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {


const[posts, setPosts] = useState([]);
const[filter,setFilter] = useState({sort:'', query:''});
const[modal,setModal] = useState(false);

const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
const[fetchPosts,isPostsLoading,postError] = useFetching(async() => {
  const posts = await PostService.getAll();// получаем данные с сервера для заполнения постов
  setPosts(posts)
})

useEffect(() =>{
  fetchPosts()
}, [])

  // Создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])   
    setModal(false) 
  }

  // Удаление поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


    return (
    <div className='App'>

      <MyButton style={{marginTop:'25px'}} onClick={()=>setModal(true)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal} >
            <PostForm create = {createPost}/>
      </MyModal>
      
      {/* <Counter/> */}
             
      <hr style={{margin:'15px 0px'}}/>

        {/*Форма для фильтрации*/}
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1 style={{display:'flex',justifyContent:'center',marginTop:50}}>Error 404</h1>
      }
      {isPostsLoading === true
        
        ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
        :<PostList remove={removePost} posts={sortedAndSearchPosts} title={"Post List 1"}/>
      }
        
            
    </div>


    );
}


export default App;