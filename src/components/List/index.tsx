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
    <div>
      {tasks.map((item, index: number) => (
        <li key={index}>
          <h3>{item.task}</h3>
          <span>{item.time}</span>
        </li>
      ))}
    </div>
  );
}

export default List;
