import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="kanban-container">
        <div className="kanban-column">
          <h3>To Do</h3>
          <div className="kanban-tasks">
            <div className="kanban-task">Learn React</div>
          </div>
        </div>
        <div className="kanban-column">
          <h3>In Progress</h3>
          <div className="kanban-tasks">
            <div className="kanban-task">Write Code</div>
          </div>
        </div>
        <div className="kanban-column">
          <h3>Done</h3>
          <div className="kanban-tasks">
            <div className="kanban-task">Project Idea</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
