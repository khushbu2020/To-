import React, { useState, useEffect } from 'react';
import './App.css';
import Headpart from './component/Headpart';
import List from './component/List';

function App() {
  const [tasklist, setTasklist] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    return storedTasks || []; 
  });

  useEffect(() => {
    const list = localStorage.getItem("task");
    if (list) {
      setTasklist(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasklist))
  }, [tasklist]);

  const deleteItem = (idx) => {
    const newTasklist = [...tasklist];
    newTasklist.splice(idx, 1);
    setTasklist(newTasklist);
    
  };

  const toggleTaskDone = (idx) => {
    const newTaskList = [...tasklist];
    newTaskList[idx].done = !newTaskList[idx].done;
    setTasklist(newTaskList);
  };

  const updateTask = (idx, newTask) => {
    const newTasklist = [...tasklist];
    newTasklist[idx].task = newTask;
    newTasklist[idx].Date = new Date();
    setTasklist(newTasklist);
  };

  const addTask = (task) => {
    const newTasklist = [...tasklist];
    newTasklist.push({
      task: task,
      Date: new Date()
    });
    setTasklist(newTasklist);
  };

  return (
    <>
      <Headpart addTask={addTask} />
      <List 
        tasklist={tasklist} 
        deleteItem={deleteItem} 
        toggleTaskDone={toggleTaskDone} 
        updateTask={updateTask} 
      />
    </>
  );
}

export default App;
