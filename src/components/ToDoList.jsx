import React,{useState} from "react";
import cl from './ToDoList.module.css'

const ToDoList=(props)=>{
    
   const [state,setState]=useState(0)

    return(
      
        <div>
             {
              state>0 ?
              <div className={cl.itemColor} >
              <div>
              <strong style={{marginTop:-15}}>{props.text.id}.</strong>
            <p className={cl.text}>{props.text.title}</p>
              </div>
              <div className={cl.right}>
               <div onClick={()=>props.remove(props.text)} className={cl.delete}>удалить</div>
              </div>
           </div> :  <div className={cl.item} >
           <div>
           <strong style={{marginTop:-15}}>{props.text.id}.</strong>
         <p className={cl.text}>{props.text.title}</p>
           </div>
           <div className={cl.right}>
            <div onClick={()=>{setState(1)}} className={cl.done}>выполнено</div>
            <div onClick={()=>props.remove(props.text)} className={cl.delete}>удалить</div>
           </div>
        </div>
             }
        </div>
      
    )
}

export default ToDoList
