import { useState } from 'react'
import Todo from './components/Todo';
import "./App.css";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "work",
      iscompleted: false,
    },
    {
      id: 2,
      text: "Criar funcionalidade y no sistema",
      category: "Pessoal",
      iscompleted: false,
    },
    {
      id: 3,
      text: "Criar funcionalidade z no sistema",
      category: "Estudos",
      iscompleted: false,
    },
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo todo={todo}/>  /* A props Todo   vai ter o valor {todo} que é um objeto*/
      ))}
    </div>
    <TodoForm />
  </div>;
}

export default App
