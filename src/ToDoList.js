import React from "react";

export default function ToDoList({ tasks, deleteTask }) {
    return(
        <div>
        {tasks.map( task => {
          return(
            <div key={task.id}>{task.value} <button className="button-19" onClick={() => deleteTask(task.id)}>X</button></div>
          )
        })}
      </div>
    )
}