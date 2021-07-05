import { ADDTASK, REMOVETASK, DONETASK, EDITTASK, FILTER } from "../Actions/ActionTypes";

const initialState ={
 
   tasks:[ ]
     
    }
export default function ToDoReducer (state=initialState, action){
switch (action.type){
    case ADDTASK: 
return { ...state, tasks: [action.payload, ...state.tasks] };
case REMOVETASK : return {
  ...state,
  tasks: state.tasks.filter((todo)=>todo.id!==action.payload),
};
case DONETASK: 
return {
  ...state,
  tasks: state.tasks.map((todo)=>todo.id===action.payload? {...todo, isDone : !todo.isDone}: todo
  ),
};
case EDITTASK: 
return {
  ...state,
  tasks: state.tasks.map((todo) =>
    todo.id === action.payload.id ? action.payload : todo
  ),
};   
case FILTER:
  return { ...state, Filtered: action.payload };

default: return state

}}
