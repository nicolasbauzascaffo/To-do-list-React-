import React, { useState } from "react";
import Header from "../components/header";
import Mainbox from "../components/mainbox";
import "../styles/home.css";

const Home = () => {
  const [tasks, settasks] = useState([]);
  const [isDarkmode, setisDarkmode] = useState(false);
  const [tasksLeft, settasksLeft] = useState(0);

  return (
    <div className="home">
      <Header
        tasks={tasks}
        settasks={settasks}
        isDarkmode={isDarkmode}
        setisDarkmode={setisDarkmode}
        tasksLeft={tasksLeft}
        settasksLeft={settasksLeft}
        className="header"
      />
      <Mainbox
        tasks={tasks}
        settasks={settasks}
        isDarkmode={isDarkmode}
        setisDarkmode={setisDarkmode}
        tasksLeft={tasksLeft}
        settasksLeft={settasksLeft}
        className="main-box"
      />
    </div>
  );
};

export default Home;
