import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'//responsible to use hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   // let counter = 15;
//   let [counter, setcounter] = useState(15);

//   const addvalue = () => {
//     //console.log("value added",Math.random());
//     counter = counter + 1;
//     //console.log("clicked", counter);
//     setcounter(counter)
//   }
//   const negvalue=() => {
//   setcounter(counter-1)
//   }
//   return (
//     <>
      
//       <h1>chai aur react</h1>
//       <h2>counter value: { counter}</h2>

//       <button onClick={addvalue}>Add value</button>
//       <br />
//       <button onClick={negvalue}>remove value</button>
//       <p>footer: { counter}</p>
//     </>
//   )
// }

// export default App


function App() {
  //let counter = 5;
  
  let [counter, setCounter] = useState(15);

  const addvalue = () => {
   
    setCounter(counter+1);
  }
  const negvalue = () => {
    
    setCounter(counter-1);
  }
  return (
    <>
      <h2>counter value: { counter}</h2>
      <button onClick={addvalue}>Add value { counter}</button>
      <br />
      <button onClick={negvalue}>Neg value{ counter}</button>
    </>
  )
}
export default App