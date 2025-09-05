import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  ) 
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const anotherelement = (
  <a href="https://google.com" target='blank'>visit google</a>
)

const anotheruser="chai ayr react"
const reactelement = React.createElement(
  'a',//tag
  {//property
    href: 'https://google.com',
    target:'_blank'
  },
  'click me to visit google',//direct text
  anotheruser
)


//-----before----------/
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  //anotherelement
    reactelement
  //<MyApp/>
)
