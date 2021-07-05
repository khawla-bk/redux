import {ADDTASK,REMOVETASK, DONETASK,EDITTASK, FILTER} from './ActionTypes'
export const AddTask = newTask =>{
    return {
        type:ADDTASK,
        payload:newTask
    }
}
export const RemoveTask = (id) =>{
    return {
        type:REMOVETASK,
        payload:id
    }
}
export const DoneTask=(id)=>{
    return {
        type: DONETASK,
        payload:id
    }
}


export const EditTask = (editedTask) => ({
  
  
    type: EDITTASK,
    payload: editedTask,
 
  });
export const Filtered= str =>{
    return {
        type:FILTER,
        payload:str
    }
}
