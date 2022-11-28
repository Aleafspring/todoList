import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  //<Todos를 업데이트 하는 핸들러>
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handelDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  const filtered = getFilteredItems(todos, filter);

  // 1. handleAdd : settodos를 배열을 풀어서 새로 업데이틑 되는것만 todo 에 넣어준다.
  // 2. handleUpdate:  update하는것만 update 되주고 update 된것이없으면 기존에 것을 그대로 남긴다.
  // 3. handelDelete: todos를 빙글빙글 돌면서 id가 삭제하고자 하는것과 아닌것만 settodos를 해둔다.

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handelDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
    //AppTodo의 새로운 자식 컴포넌트 생성
  );
}

function getFilteredItems(todos, filter) {
  if (filter == "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
