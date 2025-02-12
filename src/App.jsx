import { Box } from '@chakra-ui/react'
import { Home } from './views'
import { Dashboard } from './views'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/repos/*" element={<Home/>} />
    </Routes>
    </>
    
  )
}

export default App
