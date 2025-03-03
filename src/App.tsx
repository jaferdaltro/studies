import { useState } from "react";
import Style from "./App.module.scss";
import Chronometer from "./components/Chronometer";
import Form from "./components/Form";
import List from "./components/List";
import { ITask } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask){
    setSelected(selectedTask);
  }
  return (
    <div className={Style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer />
    </div>
  );
}

export default App;
