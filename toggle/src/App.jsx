import React from 'react'

const App = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
    toggle ? "light" : "dark";
  }

  return (
    <div>
        <h1>Toggle</h1> 
        <button
        onClick={toggleHandler}
        >
          Click me
        </button>
    </div>
  )
}

export default App;
