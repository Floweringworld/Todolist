import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClick = () => {
    const newTodo = {
      title,
      description,
      id: new Date().getTime(),
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onDeleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const onChangeTodoState = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodos(updateTodos);
  };
  return (
    <div>
      <header className="header">
        <span>My Todo List</span>
        <p>React</p>
      </header>
      <div className="input-window">
        <div className="title-text">
          <label htmlFor="title">제목</label>
          <input id="title" onChange={onChangeTitle} />
          <label htmlFor="description">내용</label>
          <input id="description" onChange={onChangeDescription} />
        </div>
        <button type="button" className="title-btn" onClick={onClick}>
          출력하기
        </button>
      </div>
      <div className="todo-list">
        <h1 className="working">Working</h1>
        <ul className="todos">
          {todos.map((todo) => {
            if (todo.isDone) {
              return;
            }
            return (
              <li className="list-cad" key={todo.id}>
                <strong> {todo.title} </strong>
                <p>{todo.description}</p>
                <div className="list-btn">
                  <button
                    className="delete"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="complete"
                    onClick={() => onChangeTodoState(todo.id)}
                  >
                    완료
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="todo-list">
        <h1 className="working">Done</h1>
        <ul className="todos">
          {...todos.map((todo) => {
            if (!todo.isDone) {
              return;
            }

            return (
              <li className="list-cad">
                <strong></strong>
                <p></p>
                <div className="list-btn">
                  <button
                    type="button"
                    className="delete"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    type="button"
                    className="complete"
                    onClick={() => onChangeTodoState(todo.id)}
                  >
                    취소
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
