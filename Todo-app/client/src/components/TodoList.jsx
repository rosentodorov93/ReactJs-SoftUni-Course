export default function TodoList() {

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
            
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
