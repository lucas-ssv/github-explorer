import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { MakeHome } from '../factories/pages/home/home-factory'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}
