import React from "react";
import Todolist from "./Todolist";

const List = (props) => {
  return props.tasklist.map((listtask, idx) => {
    return (
      <Todolist
        listtask={listtask}
        key={idx}
        idx={idx}
        deleteItem={props.deleteItem}
        doneTask={props.toggleTaskDone}
        updateTask={props.updateTask}
      />
    );
  });
};

export default List;
