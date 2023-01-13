import { useContext } from "react";

import NewTaskAddButton from "./NewTaskAddButton.component";
import NewTaskForm from "./NewTaskForm.component";

import { TasksContext } from "../../context/tasks.context";

import "./NewTaskForm.styles.scss";

const NewTask = () => {
  const { isFormOpen, setIsFormOpen } = useContext(TasksContext);

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="new-task-form__container" onClick={openFormHandler}>
      {!isFormOpen ? <NewTaskAddButton /> : <NewTaskForm />}
    </div>
  );
};

export default NewTask;
