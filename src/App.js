import React, {useState} from 'react';
import PostItem from "./components/PostItem";
import s from "./App.module.css"

function App() {

  const [postName,setPostName]=useState("")
  const [postDescription,setPostDescription]=useState("")
  const [posts,setPosts] =useState([
      {id:1,postName:"JavaScript",postDescription:"lorem ipsum"},
  ])
    function addNewPost(event){
      event.preventDefault();
      const newPost ={id:Date.now(),postName,postDescription};
      setPosts([...posts,newPost])
    }

  return (<div>
            <div className={s.container}>
              <div className={s.inputContainer}>
                <input className={s.inputs} type="text" onChange={(event)=>setPostName(event.target.value)} placeholder="Название поста"/>
                <input className={s.inputs} type="text" onChange={(event)=>setPostDescription(event.target.value)} placeholder="Описание поста"/>
              </div>
              <button className={s.inputBtn}  onClick={addNewPost}>Создать пост</button>
            </div>
            <br/>
          <h1>Посты</h1>
            <div className={s.postList}>
                {posts.map((item)=><PostItem {...item}/>)}
            </div>


      </div>
  );
}

export default App;

