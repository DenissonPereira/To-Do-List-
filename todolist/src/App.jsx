import { useState } from 'react'
import "./App.css";

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
        <div className='todo'>
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>
              ({todo.category})
            </p>
          </div>
          <div>
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App
