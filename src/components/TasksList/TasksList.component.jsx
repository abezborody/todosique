/**
 * @todo: complete taskview
 * @todo: gap
 * @todo: add task form
 *
 */

import { TASKS_DATA } from "../../tasks";

import TaskItem from "../TaskItem/TaskItem.component";

const TasksList = () => {
  const { items } = TASKS_DATA;

  return (
    <div>
      {items.length
        ? items.map((task) => <TaskItem key={task.id} taskData={task} />)
        : "Sorry, there is no tasks. Try add some!"}
    </div>
  );
};

export default TasksList;
