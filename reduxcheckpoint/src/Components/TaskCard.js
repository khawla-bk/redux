import doneBtn from "../assets/done.jpg";
import rmvBtn from "../assets/delete.jpg";
import { connect } from "react-redux";
import { RemoveTask, DoneTask } from "../Actions/Actions";
import EditForm from "./editForm";


const TaskCard = (props) => {
  return (
    <div className="card">
      <div className={props.task.isDone ? "isDone" : ""}>{props.task.text}</div>
      <div className="image">
        <img
          style={{ width: "50px", height: "30px" }}
          src={doneBtn}
          onClick={() => props.done(props.task.id)}
          alt=".."
        ></img>
        <img
          style={{ width: "30px", height: "30px" }}
          onClick={() => props.remove(props.task.id)}
          src={rmvBtn}
          alt="..."
        ></img>
        <EditForm oldTodo={props.task} />
      </div>
    </div>
  );
};
const mapDispatchtoProps = (Dispatch) => {
  return {
    remove: (id) => Dispatch(RemoveTask(id)),
    done: (id) => Dispatch(DoneTask(id))
  };
};

export default connect(null, mapDispatchtoProps)(TaskCard);
