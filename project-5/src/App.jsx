import { useState } from "react"

const arr = ["play cricket" , " play video game" , " read book"]
function App() {

  const [arrcopy,setarr] = useState(arr)
  const [show,setshow] = useState(false)
  const [disable,setdisable] = useState([])

  const handleClick = (itemindex) => {
   let newarr=arrcopy;
  const filter= newarr.filter((ele,i)=>{
    return i!== itemindex
   })

   setarr(filter)
  }

  const showHanler = (value,itemindex) => {
    setshow(!show)
  }

  return (
    <>
    <div>
      {
        arrcopy.map((item, index) => (
          <div key={index} >
              <input  onChange={(e,i)=>{
               showHanler(e.target.value)
              console.log( setdisable(i))
              }} type="checkbox" />
              <li>{item}</li>
              {show === disable &&  <button   onClick={()=>handleClick(index)}>❌</button> }
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
