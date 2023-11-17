import React,{useMemo, useState} from "react";
import  './App.css'
import MyInput from "./FormElement/MyInput/MyInput";
import MyButton from "./FormElement/MyButton/MyButton";
import AddList from "./components/AddList";
import AddPostList from "./components/AddPostList";

const App=()=>{
  const [post,setPost]=useState([])
  const [title,setTitle]=useState('')  
  
  let createNumber=post.length === 0 ? 1 : (post[post.length-1].number)+1


const AddNewPost=(newPost)=>{
setPost([...post,newPost])
setTitle('')
 }




const remove=(p)=>{
      setPost(post.filter(elem=>
        elem.id!==p.id
        ))
}

  return(
   <div className='CenterList'>
     <h1 style={{margin:'50px'}}>Главная</h1>    
   <div>
   <AddPostList  numbers={createNumber} AddNewPost={AddNewPost} title={title} newTitle={setTitle}/>
   <AddList remove={remove} elem={post}    />
   </div>

   </div>
  )
}

export default App
