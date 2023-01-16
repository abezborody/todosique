import { useContext } from "react";

import { TasksContext } from "../../context/tasks.context";

const NewTaskAddButton = () => {
  const { setIsFormOpen } = useContext(TasksContext);

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="new-task-form__container">
      <div className="new-task__button" onClick={openFormHandler}>
        <span className="new-task__plus-icon">+</span>
        <span>Add new task</span>
      </div>
    </div>
  );
};

export default NewTaskAddButton;
