import styles from "../List.module.scss"

export default function Item({ task, time }: { task: string, time: string }) {
  return (
    <li className={styles.item}>
      <h2>{task}</h2>
      <span>{time}</span>
    </li>
  );
}
