import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type Task = {
  id: string;
  content: string;
};
type Column = {
  title: string;
  tasks: Task[];
};
type BroadData = {
  [key: string]: Column;
};

const initialData: BroadData = {
  todo: {
    title: "To Do",
    tasks: [
      { id: "1", content: "Learn React" },
      { id: "2", content: "Setup Project" },
    ],
  },
  inProgress: {
    title: "In Progress",
    tasks: [{ id: "3", content: "Write Code" }],
  },
  done: {
    title: "Done",
    tasks: [{ id: "4", content: "Project Idea" }],
  },
};

const arrayedData = Object.entries(initialData);

console.log(arrayedData);
console.log(arrayedData.map(([itm]) => [itm]));

function App() {
  // const [columns, setcolumns] = useState(second)
  return (
    <>
      <div className="kanban-container">
        {arrayedData.map(([columnIdx, column]) => (
          <div className="kanban-column" key={columnIdx}>
            <h3>{column.title}</h3>
            <div className="kanban-tasks">
              {column.tasks.map((task) => (
                <div className="kanban-task" key={task.id}>
                  {task.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
