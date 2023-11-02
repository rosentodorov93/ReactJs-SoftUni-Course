export default function TodoItem({
  todo,
}) {
  return (
    <tr className={`todo${todo.isCompleted ? ' is-completed': ''}`}>
      <th>{todo.text}</th>
      <th>{todo.isCompleted ? "Completed" : "In Progres"}</th>
      <th className="todo-action">
          <button className="btn todo-btn">Change Status</button>
      </th>
    </tr>
  );
}
