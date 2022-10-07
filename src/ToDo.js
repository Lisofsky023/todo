function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
        <p className={todo.complete ? "item-text strike" : "item-text"}
          onClick={() => toggleTask(todo.id)}
        >
        {todo.task}
      </p>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  )
}

export default ToDo;