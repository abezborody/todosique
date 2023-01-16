import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

import "./TaskTotals.styles.scss";

const TasksTotals = () => {
  const { totalTasks, totalDoneTasks } = useContext(TasksContext);

  return (
    <div className="task-totals__container">
      <div className="task-totals__counter">
        Total tasks: <span className="task-totals__count">{totalTasks}</span>
      </div>
      <div className="task-totals__counter done">
        Done tasks: <span className="task-totals__count">{totalDoneTasks}</span>{" "}
      </div>
    </div>
  );
};

export default TasksTotals;
