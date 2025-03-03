import Item from "./Item";
import styles from "./List.module.scss";
import { ITask } from "../../types/task";

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
  return (
    <div className={styles.taskList}>
      <h2>Study of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
