import React, { useState } from "react";
import dark from "../img/bg-desktop-dark.jpg";
import light from "../img/bg-desktop-light.jpg";
import sun from "../img/icons8-sol-66.png";
import moon from "../img/icons8-luna-creciente-50 (1).png";
import "../styles/header.css";

const Header = ({
  tasks,
  settasks,
  isDarkmode,
  setisDarkmode,
  settasksLeft,
}) => {
  const [initial, setinitial] = useState({
    tasks: "Unknown",
  });

  const mode = () => {
    setisDarkmode(!isDarkmode);
  };

  const changeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setinitial({ ...initial, [inputName]: inputValue });
  };

  const sendForm = (e) => {
    e.preventDefault();
    setinitial({
      tasks:''
    })
    let newTask = {
      tasks: initial.tasks ? initial.tasks : 'Unknown'
    };
    settasks([...tasks, newTask]);
    e.target.reset();
  };

  const addTaskLeft = () => {
    settasksLeft((tasksLeft)=> tasksLeft + 1)
  }

  return (
    <div
      className="header"
      style={
        isDarkmode
          ? { backgroundImage: `url(${dark})` }
          : { backgroundImage: `url(${light})` }
      }
    >
      <section className="title-section">
        <h1 className="todo-title">TO DO</h1>
        {isDarkmode ? (
          <img
            onClick={mode}
            className="mode-icon"
            style={{ cursor: "pointer" }}
            src={sun}
            alt="sun"
          />
        ) : (
          <img
            onClick={mode}
            className="mode-icon"
            style={{ cursor: "pointer" }}
            src={moon}
            alt="moon"
          />
        )}
      </section>
      <form onSubmit={sendForm} autoComplete="off" className="form" action="">
        <input
          onChange={changeInput}
          name="tasks"
          className="input-form"
          type="text"
          placeholder="create a new to do"
          style={
            isDarkmode
              ? { backgroundColor: "rgb(31, 34, 40)", color: "white" }
              : { backgroundColor: "white", color: "black" }
          }
        />
        <button onClick={addTaskLeft} type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
};

export default Header;
