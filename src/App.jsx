import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("#5dd9c1")

  return (
    <>
      <div style={{backgroundColor: color,height:"90vh",width:"180vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button onClick={()=>{
          setColor("#ec0b43")
        }} style={{backgroundColor:"#F02D5E"}}>
          Red</button>
          <button onClick={()=>{
          setColor("#3f72ca")
        }} style={{backgroundColor: "#27B9B9"}}>
          Blue</button>
          <button onClick={()=>{
          setColor("#E941AE")
        }} style={{backgroundColor: "#E79DCD"}}>
          Pink</button>
          <button onClick={()=>{
          setColor("#82d173")
        }} style={{backgroundColor: "#abfaa9"}}>
          Green</button>
          <button onClick={()=>{
          setColor("#F9C658")
        }} style={{backgroundColor: "#E4E44D"}}>
          Yellow</button>
      </div>
    </>
  )
} 

export default App