import React, { useState } from "react";
import './App.css';
import Input from './Components/Input';
import Task from "./Components/Task";

function App() {

  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  //dstructure
  const addTask = () => {
    setTaskList(task => [...task, { task: taskName, time: time }])
    setTaskName("");
    setTime("");
  }
  const handelChnage=(e)=>{
    setTaskName(e.target.value);
  }
  const handelsetTime = (e) => {
    setTime(e.target.value);
  }
  return (
    <div className='App'>
      <h2>TodoList</h2>
      <Input name="Task Name" type="text" id="task" action={handelChnage} placeholder="Write here"/>
      <Input name="Time:" type="text" id="time" action={handelsetTime} placeholder="Write here" />
     
      <button onClick={addTask}>Add</button>
      {taskList.map((task,indx ) => {
        return <Task key={indx} taskName={task.task}
          time={task.time} />
      })}



    </div>
  );
}

export default App;
