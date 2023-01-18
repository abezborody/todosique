import { useContext, useState } from "react";
import { guid } from "../../context/idGenerator";

import { TasksContext } from "../../context/tasks.context";

import Button from "../Button/Button.compnent";
import "./NewTaskForm.styles.scss";

// {
//   id: 1,
//   title: "Task title 1",
//   description: 'Task description about task',
//   project: 'inbox',
//   date: new Date(1231123),
//   priority: 'HIGH',
//   labels: [tasks, todo, plans],
// isDone: false,
// },

const NewTaskForm = () => {
  const { setIsFormOpen, addNewTask } = useContext(TasksContext);

  const defaultFormFields = {
    id: guid(),
    title: "",
    description: "",
    project: "",
    date: new Date(),
    priority: "",
    labels: [],
    isDone: false,
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, project, priority } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    addNewTask(formFields);
    resetForm();
    setIsFormOpen(false);
  };

  const closeFormHandle = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <div className="new-task-form__container">
      <div className="new-task__title">Add new task:</div>
      <form className="new-task__form" onSubmit={onFormSubmitHandler}>
        <select
          onChange={onChangeHandler}
          className="new-task__field new-task__select"
          name="project"
          value={project}
        >
          <option value="">Select project</option>
          <option value="inbox">Inbox</option>
          <option value="work">Work</option>
          <option value="home">Home</option>
        </select>
        <input
          className="new-task__field new-task__input"
          label="Title"
          placeholder="Title"
          type="text"
          required
          name="title"
          value={title}
          onChange={onChangeHandler}
        />
        <input
          className="new-task__field"
          label="Description"
          placeholder="Description"
          type="text"
          required
          name="description"
          value={description}
          onChange={onChangeHandler}
        />
        <select
          className="new-task__field"
          onChange={onChangeHandler}
          name="priority"
          value={priority}
        >
          <option value="">Select priority</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <div className="new-task__buttons-container">
          <Button onClick={closeFormHandle}>Cancel</Button>
          <Button buttonType={"done"} onSubmit={onFormSubmitHandler}>
            Create task
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
