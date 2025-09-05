import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//variable and datatype props----------

// let x = [1996, 1997, 1998, 2000];
// let y = {
//   username: "prince",
//   age: 21,
//   height:196
// }


//object props
// function Car(props) {
//   return(
//     <h2>hi im {props.carInfo.color} {props.carInfo.name} {props.carInfo.model} built in year {props.carInfo.year} </h2>
//   )
// }
// const carinfo = {
//   name: "fort",
//   model: "mustang",
//   color: "red",
//   year:1996
// }

//array props-access using indexes
// function Car(props) {
//   return (
//     <h2>my car is a{props.carInfo[0]}, {props.carInfo[1]}</h2>
//   )
// }
// let carinfo = ["ford", "mustang"];

//pass props from component to component

function Car(props) {
  return (
    <h2>i am a { props.brand}</h2>
  )
}
function Grage() {
  return (
    <>
    <h2>who is living in my grage</h2>
    <Car brand="fort" />
    </>
   )
}

createRoot(document.getElementById('root')).render(
  
  //<App years={x} info={y} />
  //<Car carInfo={ carinfo} />
  //<Car carInfo={ carinfo} />
  <Grage/>
)
