import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { EditTask} from "../Actions/Actions";
import editBtn from "../assets/img_386644.png";
const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#c5d0dd ",
  },
};



const EditForm = ({ oldTodo, EditTask }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(oldTodo.text);
  }, [show, oldTodo.text]);

  const toggleModal = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...oldTodo, text: text };
    EditTask(newTask);
    toggleModal();
  };

  return (
    <Fragment>
          <img
          style={{ width: "50px" }}
          onClick={toggleModal}
          src={editBtn}
          alt=".."
        ></img>
  
      <Modal isOpen={show} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
          <button onClick={toggleModal}>Cancel</button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { EditTask })(EditForm);
