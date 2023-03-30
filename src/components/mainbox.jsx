import React, { useState, useEffect } from "react";
import "../styles/mainbox.css";
import eliminar from "../img/icons8-eliminar-25.png";

const Mainbox = ({ tasks, settasks, isDarkmode, tasksLeft, settasksLeft }) => {
  const [showAllTasks, setshowAllTasks] = useState(true);
  const [allTasks, setallTasks] = useState(tasks);

  const substractLeftTask = () => {
    settasksLeft((tasksLeft) => tasksLeft - 1);
  };

  const addLeftTask = () => {
    settasksLeft((tasksLeft) => tasksLeft + 1);
  };

  const deleteTask = (index) => {
    let copy = [...tasks];
    if (!tasks[index].completed) {
      substractLeftTask();
    }
    copy.splice(index, 1);
    settasks(copy);
  };

  const changeState = (index) => {
    let copy = [...tasks];
    copy[index].completed = !copy[index].completed;
    settasks(copy);
  };

  const deleteAllComplete = () => {
    let copy = [...tasks];
    for (let i = copy.length - 1; i >= 0; i--) {
      if (copy[i].completed) {
        copy.splice(i, 1);
      }
    }
    settasks(copy);
  };

  const showCompleted = () => {
    setshowAllTasks(false)
    let copy = allTasks.filter((task)=> task.completed)
    settasks(copy)
  };

  const showActives = () => {
    setshowAllTasks(false)
    let copy = allTasks.filter((task)=> !task.completed)
    settasks(copy)
  };

  const showAll = () => {
    setshowAllTasks(true)
    settasks(allTasks)
  };

  useEffect(() => {
    if (showAllTasks) {
      setallTasks(tasks)
    }
  }, [showAllTasks, tasks]);

  return (
    <div
      className="main-box"
      style={
        isDarkmode
          ? { backgroundColor: "rgb(31, 34, 40)" }
          : { backgroundColor: "white" }
      }
    >
      <table
        style={
          isDarkmode
            ? { backgroundColor: "rgb(20, 18, 50)", color: "white" }
            : { backgroundColor: "rgb(207, 198, 207", color: "black" }
        }
      >
        <thead>
          <tr>
            <th>
              <h6>{tasksLeft} task / s left</h6>
              <h6 onClick={deleteAllComplete} style={{ cursor: "pointer" }}>
                Clear Completed
              </h6>
              <h6 onClick={showCompleted} style={{ cursor: "pointer" }}>Completed</h6>
              <h6 onClick={showActives} style={{ cursor: "pointer" }}>Active</h6>
              <h6 onClick={showAll} style={{ cursor: "pointer" }}>All</h6>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  style={{
                    border: isDarkmode ? "solid 1px white" : "solid 1px grey",
                  }}
                  className="radio-btn"
                  type="checkbox"
                  checked={tasks[index].completed || false}
                  onClick={
                    !tasks[index].completed ? substractLeftTask : addLeftTask
                  }
                  onChange={() => changeState(index)}
                />
                <span
                  className={
                    tasks[index].completed ? "task-text checked" : "task-text"
                  }
                >
                  {item.tasks}
                </span>
                <img
                  style={{ cursor: "pointer", width: "18px" }}
                  src={eliminar}
                  alt=""
                  onClick={() => deleteTask(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mainbox;
