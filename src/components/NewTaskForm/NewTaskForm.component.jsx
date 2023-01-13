import { useContext, useState } from "react";

import { TasksContext } from "../../context/tasks.context";

import "./NewTaskForm.styles.scss";

const NewTaskForm = () => {
  const { setIsFormOpen } = useContext(TasksContext);
  const defaultFormFields = {
    title: "",
    description: "",
    project: "",
    priority: "",
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

  const onFormSubmitHandler = () => {
    console.log(formFields);
    resetForm();
  };

  const closeFormHandle = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <h2>Add new task:</h2>
      <form className="new-task__form" onSubmit={onFormSubmitHandler}>
        <select
          onChange={onChangeHandler}
          className="new-task__select"
          name="project"
          value={project}
        >
          <option value="inbox">Inbox</option>
          <option value="work">Work</option>
          <option value="home">Home</option>
        </select>
        <input
          className="new-task__input"
          label="Title"
          placeholder="Title"
          type="text"
          required
          name="title"
          value={title}
          onChange={onChangeHandler}
        />
        <input
          label="Description"
          placeholder="Description"
          type="text"
          required
          name="description"
          value={description}
          onChange={onChangeHandler}
        />
        <select onChange={onChangeHandler} name="priority" value={priority}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <button>Create task</button>
      </form>
      <button onClick={closeFormHandle}>Cancel</button>
    </div>
  );
};

export default NewTaskForm;

// {
//   id: 1,
//   title: "Task title 1",
//   description: 'Task description about task',
//   project: 'inbox',
//   date: new Date(1231123),
//   priority: 'HIGH',
//   labels: [tasks, todo, plans]
// },
