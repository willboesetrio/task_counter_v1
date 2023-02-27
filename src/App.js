import { useState, useRef } from 'react';
import './App.css';
import ExistingTasks from './ExistingTasks';
import ToDoList from "./ToDoList";

function App() {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const values = ["", "Daily stand up", "Requirement planning", "Testing", "Coding", "Environment setup", "Training modules", "Deployment", "Lunch break"]

  function addTask() {
    if(newTask !== "") {
      const task = {
        id: Math.floor(Math.random() * 10000),
        value: newTask
      };

      setTasks(oldArray => [...oldArray, task]);
      setNewTask("");
    }
  }

  function addExisting(id) {
    if (tasks.filter(task => task.id == id).length == 0){
      const standUp = {
        id: id,
        value: values[id]
      }
      setTasks(oldArray => [...oldArray, standUp]);
    }
  }

function deleteTask(id) {

  const newArray = tasks.filter(task => task.id !== id);
  setTasks(newArray);

}

  return(
    <div className='App'>
      <h1>Task Tracker v1
      </h1>
      <ExistingTasks addExisting={addExisting} values={values}/>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button className="button-19" onClick={() => addTask()}>ADD</button>
      <ToDoList tasks={tasks}deleteTask={deleteTask}/>
      <button className="button-19" onClick={() => setTasks([])}>CLEAR ALL</button>
    </div>

  )
}

export default App;
