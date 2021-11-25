import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <><section id="myTodos">
        <div class="content">
        <div class="addBar">
            <div class="toDo" id="toDoName">My ToDo List</div>
            <div class="row" id="toDoNew">
                <button class="col" id="toDoButton">add</button>
            </div>
        </div>
        <div class="toDo" id="toDoDiv">
            <div class="toDoList" id="toDoList"></div>
        </div>
    </div>
    </section>
    <div className="App">
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

export default App;
