import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

import TaskItem from "../TaskItem/TaskItem.component";
import TasksTotals from "../TasksTotals/TasksTotals.component";

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => <TaskItem key={task.id} taskData={task} />)
      ) : (
        <div className="no-tasks__message">
          Sorry, there is no tasks. Try add some!
        </div>
      )}
      <TasksTotals />
    </div>
  );
};

export default TasksList;
