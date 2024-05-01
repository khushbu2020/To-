import React, { useState } from 'react';

const Todolist = (props) => {
  const [newTask, setNewTask] = useState(props.listtask.task);
  const [isEditing, setIsEditing] = useState(false);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleUpdate = () => {
    
    setNewTask(props.listtask.task);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task before saving.");
      return; // Don't proceed if the input is empty
    }
    props.updateTask(props.idx, newTask);
    setIsEditing(false);
  };

  return (
    <div>
      <div className={"container w-75 p-5 border p-4 rounded my-3 d-flex gap-3 justify-content-between align-items-center"} style={{height:"3rem",backgroundColor:"#FFF7FC"}}>
        <div className={"" + (props.listtask.done ? " text-decoration-line-through" : "")}>
          {isEditing ? (
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          ) : (
            <h6>{props.listtask.task}</h6>
          )}
        </div>
        <div className="d-flex flex-column">
          <p className='text-end' style={{fontSize:".8rem"}}>{formatDate(props.listtask.Date)}</p>
          <div className='d-flex gap-3'>
            {isEditing ? (
              <>
                <button className="btn btn-outline-dark text-dark" style={{backgroundColor:"#EFFFFD"}} onClick={handleSave}><i className="fa-regular fa-paper-plane"></i></button>
                <button className="btn btn-outline-dark text-dark" style={{backgroundColor:"#EFFFFD"}} onClick={() => setIsEditing(false)}><i className="fa-solid fa-xmark"></i></button>
              </>
            ) : (
              <button className="btn btn-outline-dark text-dark" style={{backgroundColor:"#EFFFFD"}} onClick={handleUpdate}><i className="fa-solid fa-pen-to-square"></i></button>
            )}
            {!isEditing && (
              <>
                <button className="btn btn-outline-dark text-dark " style={{backgroundColor:"#EFFFFD"}} onClick={() => props.doneTask(props.idx)}><i className="fa-solid fa-check"></i></button>
                <button className="btn btn-outline-dark text-dark" style={{backgroundColor:"#EFFFFD"}} onClick={() => props.deleteItem(props.idx)}><i className="fa-solid fa-trash"></i></button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
