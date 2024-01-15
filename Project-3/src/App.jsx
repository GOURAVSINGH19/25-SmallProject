import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Page1 from './Component/Page1'
function App() {

  return (
    <>
      <div>
        <div>
          <Header/>
          <Page1/>
        </div>
       </div>
    </>
  )
}

export default App
