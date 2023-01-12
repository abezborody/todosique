const TaskItem = ({ taskData }) => {
  const { title, descripton, priority } = taskData;

  return (
    <div>
      <h2>{title}</h2>
      <p>{descripton}</p>
      <span>{priority}</span>
    </div>
  );
};

export default TaskItem;

// {
//   id: 1,
//   title: "Task title 1",
//   description: 'Task description about task',
//   project: 'inbox',
//   date: new Date(1231123),
//   priority: 'HIGH',
//   labels: [tasks, todo, plans]
// },
