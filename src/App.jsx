import "./styles/App.scss";

import TasksList from "./components/TasksList/TasksList.component";
import NewTask from "./components/NewTaskForm/NewTask.component";
import AuthModal from "./components/AuthModal/AuthModal.component";

function App() {
  return (
    <div className="app">
      <AuthModal />
      <div className="app__title">.todosique</div>
      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
