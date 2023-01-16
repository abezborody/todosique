import { createContext, useEffect, useState } from "react";

import { TASKS_DATA } from "../tasks";

const addTask = (tasksArr, taskToAdd) => {
  return [{ ...taskToAdd }, ...tasksArr];
};

const removeTask = (tasksArr, taskToDelete) => {
  return tasksArr.filter((task) => task.id !== taskToDelete.id);
};

const setDone = (tasksArr, taskToDone) => {
  return tasksArr.map((task) =>
    task.id === taskToDone.id ? { ...task, isDone: !task.isDone } : task
  );
};

export const TasksContext = createContext({
  tasks: [],
  addNewTask: () => {},
  deleteTask: () => {},
  totalTasks: 0,
  setTaskDone: () => {},
  totalDoneTasks: 0,
  isFormOpen: false,
  setIsFormOpen: () => {},
});

export const TasksProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalDoneTasks, setTotalDoneTasks] = useState(0);

  // init tasks
  useEffect(() => {
    setTasks(TASKS_DATA.items);
  }, []);

  // addTask
  const addNewTask = (taskToAdd) => {
    setTasks(addTask(tasks, taskToAdd));
  };

  // setTaskDone
  const setTaskDone = (taskToDone) => {
    setTasks(setDone(tasks, taskToDone));
  };

  // deleteTask
  const deleteTask = (taskToDetele) => {
    setTasks(removeTask(tasks, taskToDetele));
  };

  // totalTasks
  useEffect(() => {
    const newTotalTasksCount = tasks.reduce((total) => total + 1, 0);
    setTotalTasks(newTotalTasksCount);
  }, [tasks]);

  // Done tasks
  useEffect(() => {
    const totalDoneTasks = tasks.reduce(
      (total, task) => (task.isDone ? total + 1 : total),
      0
    );
    setTotalDoneTasks(totalDoneTasks);
  }, [tasks]);

  const value = {
    tasks,
    addNewTask,
    deleteTask,
    totalTasks,
    setTaskDone,
    totalDoneTasks,
    isFormOpen,
    setIsFormOpen,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
