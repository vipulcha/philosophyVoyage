import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route , Routes} from "react-router-dom";
import HomeCard from './pages/HomeCard';
function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
