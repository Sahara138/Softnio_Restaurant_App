import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Booking from './pages/Booking'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/contact" element={<Booking />}/>
      </Routes>
    </>
  )
}

export default App
