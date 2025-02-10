import Item from "./Item";
import styles from "./List.module.scss";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Vue",
      time: "01:00:00",
    },
    {
      task: "Rails",
      time: "04:00:00",
    },
  ];
  return (
    <div className={styles.taskList}>
      <h2> Study of the day </h2>
      <ul>
        {tasks.map((item, index: number) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
