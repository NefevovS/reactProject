import React, {useState} from 'react';
import PostItem from "./components/PostItem";
import s from "./App.module.css"
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {


const [posts,setPosts]=useState([{id:1,postName:"JavaScript",postDescription:"1122323"}])
const [post,setPost]=useState({postName:"",postDescription:""})

    function addNewPost(event){
      event.preventDefault();
      setPosts([...posts,{...post,id:Date.now()}])
      setPost({postName:"",postDescription:""})
    }

  return (<div>
            <div className={s.container}>
              <div className={s.inputContainer}>
                <MyInput
                       type="text"
                       onChange={(event)=>setPost({...post, postName:event.target.value})}
                       placeholder="Название поста"
                       value={post.postName}
                />
                <MyInput
                       type="text"
                       onChange={(event)=>setPost({...post,postDescription:event.target.value})}
                       placeholder="Описание поста"
                       value={post.postDescription}
                />
              </div>
              <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </div>
            <br/>
          <h1>Посты</h1>
            <div className={s.postList}>
                {posts.map((item,index)=><PostItem {...item} number={index+1}/>)}
            </div>


      </div>
  );
}

export default App;

