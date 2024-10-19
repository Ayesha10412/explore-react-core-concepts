import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
     <Person></Person>
     <Student></Student>
     <Developer></Developer>
    </>
  )
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

function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Age:</p>
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
