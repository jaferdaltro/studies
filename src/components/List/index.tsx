import Item from "./Item";
import styles from "./List.module.scss";
import { ITask } from "../../types/task";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <div className={styles.taskList}>
      <h2>Study of the day</h2>
      <ul>
        {tasks.map((item, index: number) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
