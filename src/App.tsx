import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";
import FilterForm from "./components/FilterForm.tsx";

function App() {
  return (
    <div className="page-wrapper">
      <TaskForm/>
      <FilterForm/>
      <TaskList/>
    </div>
  )
}

export default App
