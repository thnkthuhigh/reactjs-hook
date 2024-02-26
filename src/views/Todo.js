const Todo = (props) => {
  const { Todos, title, Delete } = props;

  const handleOnDeletes = (id) => {
    Delete(id);
  };
  return (
    <div className="todos-container">
      <div>{title}</div>
      {Todos.map((item) => {
        return (
          <li key={item.id}>
            {" "}
            {item.title} &nbsp;{" "}
            <span onClick={() => handleOnDeletes(item.id)}>x</span>
          </li>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
