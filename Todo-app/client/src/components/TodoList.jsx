import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import * as todosService from '../services/todosService';

export default function TodoList() {

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    todosService.getAll()
    .then(res => setTodos(res))
  },[])

  const onChangeStatusHandler = (id) =>{
    setTodos(todos => todos.map(todo => todo._id == id ? {...todo, isCompleted: !todo.isCompleted} : todo))
  }

  return (
    <main className="main">
      <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <TodoItem key={todo._id}
                          todo={todo}
                          onChangeStatusHandler={onChangeStatusHandler}/>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
