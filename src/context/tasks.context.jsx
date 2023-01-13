import { createContext, useReducer } from "react";

import { createAction } from "./createAction.utils";

export const TasksContext = createContext({
  tasks: [],
  totalTasks: 0,
  totalDoneTasks: 0,
  isFormOpen: false,
  setIsFormOpen: () => {},
  addNewTask: () => {},
  setTaskDone: () => {},
  deleteTask: () => {},
});

const INITIAL_STATE = {
  tasks: [],
  totalTasks: 0,
  totalDoneTasks: 0,
  isFormOpen: false,
};

const TASKS_ACTION_TYPES = {
  SET_IS_FORM_OPEN: "SET_IS_FORM_OPEN",
};

const tasksReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASKS_ACTION_TYPES.SET_IS_FORM_OPEN:
      return {
        ...state,
        isFormOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const TasksProvider = ({ children }) => {
  const [{ tasks, totalTasks, totalDoneTasks, isFormOpen }, dispatch] =
    useReducer(tasksReducer, INITIAL_STATE);

  // addTask
  const addNewTask = () => {};

  // totalTasks

  // Done tasks

  // isFormOpen
  const setIsFormOpen = (bool) => {
    dispatch(createAction(TASKS_ACTION_TYPES.SET_IS_FORM_OPEN, bool));
  };

  const value = {
    tasks,
    totalTasks,
    totalDoneTasks,
    isFormOpen,
    addNewTask,
    setIsFormOpen,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
