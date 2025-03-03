import { ITask } from "../../../types/task";
import styles from "../List.module.scss"

interface Props extends ITask{
  selectTask: (selectedTask: ITask) => void
}

export default function Item({ task, time, selected, completed, id }: Props) {
  console.log("current item: ", { task, time, selected, completed, id })
  return (
    <li className={styles.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
