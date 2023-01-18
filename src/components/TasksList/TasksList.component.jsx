import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";
import NoneTasksMessage from "../NoneTasksMessage.component.jsx/NoneTasksMessage.component";

import TaskItem from "../TaskItem/TaskItem.component";
import TasksTotals from "../TasksTotals/TasksTotals.component";

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => <TaskItem key={task.id} taskData={task} />)
      ) : (
        <NoneTasksMessage />
      )}
      <TasksTotals />
    </div>
  );
};

export default TasksList;
