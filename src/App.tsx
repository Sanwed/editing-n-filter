import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

function App() {
  return (
    <div className="page-wrapper">
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
