import DeleteButton from "../DeleteButton/DeleteButton.component";
import DoneButton from "../DoneButton/DoneButton.component";

import { useMotionValue, Reorder } from "framer-motion";

import "./TaskItem.styles.scss";

const TaskItem = ({ taskData }) => {
  const { title, description, priority, project } = taskData;
  const y = useMotionValue(0);

  return (
    <Reorder.Item
      value={taskData}
      id={taskData}
      style={{ y }}
      className="task-item"
    >
      <div className={`task-item__priority ${priority.toLowerCase()}`}></div>
      <div className="task-item__title-container">
        {project && (
          <div className="task-item__project-container">
            <span className="task-item__project">{project}</span>
          </div>
        )}
        <span className="task-item__title">{title}</span>
        <DoneButton task={taskData} />
        <DeleteButton task={taskData} />
      </div>
      <span className="task-item__description">{description}</span>
    </Reorder.Item>
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
