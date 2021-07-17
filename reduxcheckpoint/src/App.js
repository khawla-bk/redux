import "./App.css";
import AddTask from "./Components/AddTask";
import ToDoList from "./Components/ToDoList";

import Filter from "./Components/Filter";

function App() {
  return (
    <div className="App">
      <h2> My ToDoList </h2>
      <AddTask />
      <Filter />
      <ToDoList />
    </div>
  );
}

export default App;
