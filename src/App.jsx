import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {


  return (
    <>
    <h1>Vite+React</h1>
    <Device name="Laptop" price="55000"></Device>
    <Device name="mobile" ></Device>

     <Person></Person>
     <Student  name="Bristi"  ></Student>
     <Student name="Bristi" age="22"></Student>

     <Developer></Developer>
     <Todo task="Learn React" 
     isDone={true}></Todo>
     
     <Todo task="Explore React"
      isDone={false}></Todo>

     <Todo task="Try JSX" 
     isDone={true}></Todo>

    </>
  )
}

function Device(props){
  console.log(props)
  return <h2>This device: {props.name}</h2>
}

function Person(){
  const age =22;
  const person ={name:'ayesha', salary:10000}
  return (
 <div>
   <h1>I am a Person with age: {age}</h1>
   <h2>I am {person.name} and my salary is{person.salary}</h2>
 </div>
  )
}

// function Student(props){
//   return(
//     <div className='student'>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age} </p>
//     </div>
//   )
// }
function Student({name,age="34"}){
  return(
    <div className='student'>
      <p>Name: {name}</p>
      <p>Age: {age} </p>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return(

    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>

  )
}

export default App
