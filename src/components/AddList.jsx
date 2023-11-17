import React from "react";
import ToDoList from "./ToDoList";

const AddList=({elem,remove,numbers})=>{

    return(
        <div >
    {

   elem.map((items)=>
    
      <ToDoList remove={remove} text={items} number={numbers}  key={items.id}  />
   )
            }
        </div>
    )
}

export default AddList
