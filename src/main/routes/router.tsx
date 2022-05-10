import { MakeHome, MakeUser } from '@/main/factories/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="/:owner/:repo" element={<MakeUser />} />
      </Routes>
    </BrowserRouter>
  )
}
