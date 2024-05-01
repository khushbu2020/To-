import React,{useState} from 'react';

const Headpart = (props) => {
    const [tasklist, settasklist] = useState("");
  return (
    <div>
        <div className=" container text-center">
      <h1>To Do List</h1>
      <hr />
      <div className="input-group mb-3 d-flex justify-content-center">
  <input
    aria-describedby="button-addon2"
    // aria-label="Recipient's username"
    // className="form-control"
    className=" border-1 w-50 rounded ps-3"
    placeholder="Enter your task"
    type="text"
    onChange={(e)=>{
      settasklist(e.target.value)
    }}
    value={tasklist}
   
  />
  <button
    className="btn btn-outline-secondary rounded text-dark"
    style={{backgroundColor:"#FFF7FC"}} 
    id="button-addon2"
    type="button"
    onClick={(e)=>{
      e.preventDefault();
      if (tasklist === "") {
        alert("Please enter a task!");
    }else{
      props.addTask(tasklist);
      settasklist("");
    }
   
   
    }}
  >
    Add Task
  </button>
</div>

<h3 className=''>Task List:</h3>
</div>
    </div>
  );
}

export default Headpart;
