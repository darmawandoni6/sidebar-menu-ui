import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sample from './Sample'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
