import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "prince",
    age:21
  }
  let myarr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-green-400 text-white p-10 rounded-xl mb-4'>tailwind css</h1>
      <Card username={myobj.username} someobj={myarr} />
      <Card/>
    </>
  )
}

export default App
