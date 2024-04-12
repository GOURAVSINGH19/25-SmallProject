import { useState } from "react";

const options = ["cricket","football","hockey"];
const days = ["weekly","monthly"];

function App() {
  const [game,setgame] =useState("")
  const [day,setday] =useState("")

  return (
    <>
      <div>
        <h1>games</h1>
        {
          options.map((item, index) => (
            <div key={index}>
            <input type="radio" value={item} id="{item}" name="options" onChange={(e)=>{
             setgame(e.target.value)
            }} />
            {item}
            </div>
          ))
        }
        <h1>months</h1>
        <div>
        {
          days.map((item, index) => (
            <div  key={index}>
            <input type="radio" value={item}  id="{item}" name="months" onChange={(e)=>{
              setday(e.target.value)
            }} />
            {item}
            </div>
          ))
        }
        </div>
        <h1> {game} on {day}</h1>
      </div>
    </>
  )
}

export default App
