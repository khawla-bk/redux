import React from 'react'
import {connect} from 'react-redux'
import TaskCard from './Card'

function filterTasks(todos, filter) {

  switch (filter) {
    case "done":
      return todos.filter((todo) => todo.isDone === true);
    case "undone":
      return todos.filter((todo) => todo.isDone === false);
    case "all":
    default:
      return todos;
  }
}
const ToDoList =({todos,filter})=>{
  const result = filterTasks(todos, filter);
    return (
    <div className='list'>{result.map(el=><TaskCard key ={el.id} task ={el}/>)}</div>
    );
    
}
const mapStatetoProps =(state)=>{
    return {
      todos: state.tasks ,
      filter: state.Filtered
    }}
export default connect(mapStatetoProps)(ToDoList)
