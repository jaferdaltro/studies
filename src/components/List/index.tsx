import "./styles.scss"

function ulst() {
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
    <div className="taskList">
      {tasks.map((item, index: number) => (
        <ul key={index}>
          <li>
            <h2>{item.task}</h2>
            <span>{item.time}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ulst;
