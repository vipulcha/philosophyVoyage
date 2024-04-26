import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route , Routes} from "react-router-dom";
import HomeCard from './pages/HomeCard';
import SpecPhil from './pages/SpecPhil';
function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCard/>}/>
          <Route path="/philosopher/:id" element= {<SpecPhil/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
