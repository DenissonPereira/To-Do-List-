// diita rafce para extensao fazer o trabalho

import { useState } from 'react'

const Todo = ({todo}) => {
    const[value, setValue] = useState("");
    const[category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDeFault();
        console.log("Enviou form!")
    }

  return (
    <div className='todo'>
    <div className='content'>
      <p>{todo.text}</p>
      <p className='category'>
        ({todo.category})
      </p>
    </div>
    <div>
      <button className='complete'>Completar</button>
      <button className='remove'>x</button>
    </div>
  </div>
  )
}

export default Todo