import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);//for length
  const [numberAllowed, setnumberAllowed] = useState(false);//num
  const [charAllowed, setcharAllowed] = useState(false);//char
  const [password, setPassword] = useState("")
  
  //useRef
  const passref = useRef(null);
  //useCallback hook
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*_+";
    }

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
    
  } , [length,numberAllowed,charAllowed,setPassword])
  
  //to copy password
  const copypasstoclipboard = useCallback(() => {
    passref.current?.select()//to make coopied text colored
    
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  //useEffect hook
  useEffect(() => {
    passwordgenerator()
    
  }, [length, numberAllowed, charAllowed, passwordgenerator])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange bg-gray-600'>
        <h1 className='text-white text-center'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white '
            placeholder='password'
            readOnly
            ref={passref}
          />
          <button
            onClick={copypasstoclipboard}
            className='bg-blue-900 text-white p-3 shrink-0 '>copy</button>

        </div>
        <div className='flex tesxt-sm gap-x-2'>
          <div className='flex item-center  gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>length:{ length}</label>
          </div>
          <div className='flex item-center  gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
          
              onChange={()=>{setnumberAllowed((prev)=>!prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex item-center  gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
          
              onChange={()=>{setcharAllowed((prev)=>!prev)}}//getting acces of prev value
            />
            <label>Character</label>
          </div> 

        </div>
      </div>
    </>
  )
}

export default App


//usecallback:

//The useCallback hook in React is used to memoize() a callback 
// function so that it is not recreated on every render unless
//  its dependencies change. This can improve performance by 
// preventing unnecessary re-renders or re-creation of 
// functions, especially when passing callbacks to child 
// components or using them in dependency arrays.

//memoize->Memoization is an optimization technique in 
// JavaScript (and other programming languages) that improves 
// performance by caching the results of expensive function calls
//When the same inputs are provided again, the cached result is 
// returned instead of recomputing it.

//useEffect:
//The useEffect hook in React is a powerful tool for managing 
// side effects in functional components. Side effects include 
// tasks like fetching data, updating the DOM, setting up 
// subscriptions, or manually changing the state of the 
// application.

//useref:
//The useRef Hook allows you to persist values between renders.

//It can be used to store a mutable value that does not cause 
// a re-render when updated.

//It can be used to access a DOM element directly.
