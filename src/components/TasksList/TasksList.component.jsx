import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";
import NoneTasksMessage from "../NoneTasksMessage.component.jsx/NoneTasksMessage.component";

import { Reorder } from "framer-motion";

import TaskItem from "../TaskItem/TaskItem.component";
import TasksTotals from "../TasksTotals/TasksTotals.component";

import "../../styles/App.scss";

const TasksList = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  return (
    <Reorder.Group
      axis="y"
      onReorder={setTasks}
      values={tasks}
      // style={"list-style-type: none"}
    >
      {tasks.length ? (
        tasks.map((task) => <TaskItem key={task.id} taskData={task} />)
      ) : (
        <NoneTasksMessage />
      )}
      <TasksTotals />
    </Reorder.Group>
  );
};

export default TasksList;
