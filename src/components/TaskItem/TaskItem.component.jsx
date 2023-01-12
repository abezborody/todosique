import DeleteButton from "../DeleteButton/DeleteButton.component";
import Label from "../Label/Label.component";

import "./TaskItem.styles.scss";

const TaskItem = ({ taskData }) => {
  const { title, description, priority, labels } = taskData;

  return (
    <div className="task-item">
      <div className="task-item__title-container">
        <span>{priority}</span>
        <span className="task-item__title">{title}</span>
        <DeleteButton className="task-item__delete-button" />
      </div>
      {/* {labels.length
        ? labels.map((label) => <Label key={label} type={label} />)
        : ""} */}
      {/* <Label type={labels[0]} /> */}
      <span className="task-item__description">{description}</span>
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
