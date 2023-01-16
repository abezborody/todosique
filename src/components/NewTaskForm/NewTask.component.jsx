import { useContext } from "react";

import NewTaskAddButton from "./NewTaskAddButton.component";
import NewTaskForm from "./NewTaskForm.component";

import { TasksContext } from "../../context/tasks.context";

import "./NewTaskForm.styles.scss";

const NewTask = () => {
  const { isFormOpen } = useContext(TasksContext);

  return (
    <>
      {!isFormOpen && <NewTaskAddButton />}
      {isFormOpen && <NewTaskForm />}
    </>
  );
};

export default NewTask;
