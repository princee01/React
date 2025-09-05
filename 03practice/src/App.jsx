import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(prop1) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        years:{prop1.years[0]}
        <br />
        my name is:{prop1.info.username}
        <br />
        im {prop1.info.age} year old
      </h1>
    </>
  )
}

export default App
