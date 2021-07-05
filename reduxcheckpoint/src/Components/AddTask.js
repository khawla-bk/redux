import {Component} from 'react'
import AddBtn from '../assets/add.jpg'
import {connect} from 'react-redux'
import {AddTask} from '../Actions/Actions'

class Addtask extends Component {

    state ={
newtext:''
}

handleClick=()=>{this.props.addtask({text:this.state.newtext,id:Date.now(), isDone:false} , this.setState({newtext:''})) }


    render (){
        return (
<form className='todoInput' onSubmit={(e)=>e.preventDefault() }>
     <input className='input'placeholder="Add a task" type='text'  value={this.state.newtext} onChange={(event)=> this.setState({newtext:event.target.value})
    } />
     <img onClick={this.handleClick}src={AddBtn} style={{width:'57px'}} alt='..' />
     
   </form>
        )}
    
}
const mapDispatchtoProps=(Dispatch)=>{
    return {addtask : task => Dispatch(AddTask(task)) }
}
export default connect(null, mapDispatchtoProps) (Addtask) 
