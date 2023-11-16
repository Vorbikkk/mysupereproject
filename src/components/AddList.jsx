import React from "react";
import ToDoList from "./ToDoList";

const AddList=({elem,remove})=>{

    return(
        <div >
    {

   elem.map((items,index)=>
    
      <ToDoList remove={remove} text={items}  key={items.id}  />
   )
            }
        </div>
    )
}

export default AddList
