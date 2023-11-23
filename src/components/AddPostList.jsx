import React from 'react'
import MyInput from '../FormElement/MyInput/MyInput';
import MyButton from "../FormElement/MyButton/MyButton";

const AddPostList=({numbers,AddNewPost,title,newTitle})=>{
     
    const time=new Date()
    const newTime=[ time.getHours(),time.getMinutes(),time.getSeconds()].map(num=>num<10 ? `0${num}` : num).join(':')
    const newData=[`${time.getFullYear()}.${time.getMonth()}.${time.getDay()}`]


    const newBlank={
        time:newTime,
        id:new Date(),
        number:numbers,
        title:title
      }
    
    const addPosts=(e)=>{
       e.preventDefault()
        if(title !== ''){
          AddNewPost(newBlank)
        }
         newTitle('')
    }      

     return (
        <div style={{textAlign:'center'}}>
        <MyInput 
         type="text" 
         value={title} 
         onChange={(e)=>newTitle(e.target.value)} 
         placeholder='введите задание на сегодня' />
         <MyButton onClick={addPosts}>добавить</MyButton>
        </div>
     )
    
}

export default AddPostList


