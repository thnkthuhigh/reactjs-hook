const Todo = (props) => {
  const Todos = props.Todos;
  return (
    <div className="todos-container">
      {Todos.map((item) => {
        return <li key={item.id}> {item.title} </li>;
      })}
    </div>
  );
};

export default Todo;
