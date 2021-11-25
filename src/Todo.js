import logo from './logo.svg';
import './Todo.css';

function Todo() {
  return (
    <><div className="toDo" id="toDoDiv">
      <div className="toDoList" id="toDoList"></div>
      <p>Do a thing</p>
    </div>
    <div className="Todo">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Jina's ToDo App</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default Todo;
