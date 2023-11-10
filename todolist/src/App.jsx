import { useState } from 'react'

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
    Olá
  </div>;
}

export default App
