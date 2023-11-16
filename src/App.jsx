import React,{useMemo, useState} from "react";
import  './App.css'
import MyInput from "./FormElement/MyInput/MyInput";
import MyButton from "./FormElement/MyButton/MyButton";
import AddList from "./components/AddList";

const App=()=>{
  const [post,setPost]=useState([])
  const [title,setTitle]=useState('')  



const AddNewPost=(e)=>{
e.preventDefault()
const newBlank={
  id:(post.length)+1,
  title,
}
setPost([...post,newBlank])
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
    <MyInput 
     type="text" 
     value={title} 
     onChange={(e)=>setTitle(e.target.value)} 
     placeholder='введите задание на сегодня' />
     <MyButton onClick={AddNewPost}>добавить</MyButton>
    </div>

   <div>
   <AddList remove={remove} elem={post}   />
   </div>

   </div>
  )
}

export default App
