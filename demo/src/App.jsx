import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sample from './Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
