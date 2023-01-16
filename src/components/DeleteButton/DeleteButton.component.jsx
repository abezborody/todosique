import "./DeleteButton.styles.scss";

import { ReactComponent as DeleteIcon } from "../../assets/backspaceIcon.svg";

import { useContext } from "react";
import { TasksContext } from "../../context/tasks.context";

const DeleteButton = (taskData) => {
  const { task } = taskData;
  const { deleteTask } = useContext(TasksContext);

  const deleteTaskHandler = () => {
    deleteTask(task);
  };

  return (
    <div className="delete-button__container" onClick={deleteTaskHandler}>
      <DeleteIcon className="delete-button__icon" />
    </div>
  );
};

export default DeleteButton;
