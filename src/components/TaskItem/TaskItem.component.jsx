import DeleteButton from "../DeleteButton/DeleteButton.component";

import "./TaskItem.styles.scss";

const TaskItem = ({ taskData }) => {
  const { title, description, priority, project } = taskData;

  return (
    <div className="task-item">
      <div className={`task-item__priority ${priority.toLowerCase()}`}></div>
      <div className="task-item__title-container">
        <div className="task-item__project-container">
          <span className="task-item__project">{project}</span>
        </div>
        <span className="task-item__title">{title}</span>
        <DeleteButton className="task-item__delete-button" />
      </div>
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
