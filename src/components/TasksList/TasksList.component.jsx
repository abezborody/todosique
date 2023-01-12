import { TASKS_DATA } from "../../tasks";

import TaskItem from "../TaskItem/TaskItem.component";

const TasksList = () => {
  const { title, items } = TASKS_DATA;

  return (
    <div>
      <h2>{title}</h2>
      {items.length
        ? items.map((task) => <TaskItem key={task.id} taskData={task} />)
        : "Sorry, there is no tasks. Try add some!"}
    </div>
  );
};

export default TasksList;
