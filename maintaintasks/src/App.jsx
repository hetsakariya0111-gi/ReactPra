import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState([]);       

  return (
    <div>
      <input type="text" 
      onChange={(e) => setTodo([...todo, e.target.value])} />
      <button onClick={() => console.log(todo)}>Add</button>
     {todo.map((item, index) => {
        return (
          <div key={index}>
            <li>{item}</li>
          </div>
        )
      })}
    </div>
  )
}

export default App
