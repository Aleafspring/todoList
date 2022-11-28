import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";
import { DarkModeProvider } from "./components/context/DarkMode";

const filters = ["all", "active", "completed"];
//프로그램에서 고정된 filter는 "all", "active", "completed" 이다.
function App() {
  const [filter, setfileter] = useState(filters[0]);
  //사용자 Ui에서 처음으로 시작하는 상태값은  filters[0]-> all 이다
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setfileter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
