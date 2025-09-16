import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// //1.useState hook- 
// function App() {
  
//   //single variable
//   const [name,setname]=useState('blue')
//   const changename = () => {
//     setname("red");
//   }
 
//   //multiple variables
//   const [car, setcar] = useState({
//     brand: "ferrari",
//     model: "Roma",
//     year: "2023",
//     color: "red"
//   })

//   const changecolor = () => {
//     setcar((prev) => {
//       return {...prev,color:"blue"}
//     })
//   }
  
//   return (
//     <>
//       {/* <p>hii my name is {name} !</p>
//       <button onClick={changename}>red</button> */}
       
//       <h1>my {car.brand}</h1>
//       <p>it is {car.color} {car.model} from { car.year}</p>
//       <button onClick={changecolor}>blue</button>
//     </>
//   )
// }

// //2. useEffect hook- allow us to perform side effect in
//components
//1.fectching data from api
//2.directly updating the dom
//3.timers like settimout and setintervals

// function App() {

//   //Example 1.-->whenever we are usinf useffect without any dependencies
//   //             it execute function whenever state change in that component.

//   // const [count, setcount] = useState(0);
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setcount((count) => count + 1);
//   //   }, (2000));
//   // })
//   // return (
//   //   <>
//   //     <h1>i have rendered {count} times</h1>
//   //   </>
//   // )

//   //Example 2--> we have given empty array now function only execute once

//   // const [count, setcount] = useState(0);
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setcount((count) => count + 1);
//   //   }, (2000));
//   // },[])
//   // return (
//   //   <>
//   //     <h1>i have rendered {count} times</h1>
//   //   </>
//   // )

//   //Example 3-->given a dependecy non empty array--> now function execute everytime when count changes

//   const [count, setcount] = useState(0);
//   const [name,setname]=useState('prince')
//   useEffect(() => {
//     setTimeout(() => {
//       setcount((count) => count + 1);
//     }, (2000));
//   },[count,name])
//   return (
//     <>
//       <h1>i have rendered {count} times</h1>
//     </>
//   )
// }


//  //3.useRef hook-- it allow us to create mutable variables
//which will not re-render the component.help in accessing dom elements


function App() {
  //Example 1.


  // const [value, setvalue] = useState(0);
  // //const [count, setcount] = useState(0);

  // // useEffect(() => {
  // //   setcount(prev => prev + 1);
  // // },[count]) // this will run in infinite loop bcz-->
  // // whenever component rendered count value inc by 1
  // // so whenever count value inc by 1 again it will render
  // //means whenever count change it will render again and again


  // //useRef does not re-render component when it change
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // })

  // return (
  //   <>
  //     <button onClick={() => {
  //       setvalue(prev=>prev-1)
  //     }}>-1</button>
  //     <h1>{ value}</h1>
  //     <button onClick={() => {
  //       setvalue(prev=>prev+1)
  //     }}>+1</button>

  //     <h1>Render count: { count.current}</h1>
  //   </>
  // )


  //Example 2.--using dom element

    const inputelement = useRef();

    const btnclicked = () => {
      console.log(inputelement.current)
      inputelement.current.innerHTML="blue"
    }
    return (
      <>
        <input type="text" ref={inputelement} />
        <button onClick={btnclicked}>Click here</button>
      </>
    )
  }


export default App
