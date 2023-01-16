import "./DoneButton.styles.scss";

import { ReactComponent as CheckboxBlank } from "../../assets/check_box_outline_blank.svg";
import { ReactComponent as Checkbox } from "../../assets/check_box.svg";

import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

const DoneButton = (taskData) => {
  const { task } = taskData;
  const { setTaskDone } = useContext(TasksContext);

  const doneTaskHandler = () => {
    setTaskDone(task);
  };

  return (
    <div className="done-button__container" onClick={doneTaskHandler}>
      {task.isDone ? (
        <Checkbox className="done-button__icon" />
      ) : (
        <CheckboxBlank className="done-button__icon" />
      )}
    </div>
  );
};

export default DoneButton;
