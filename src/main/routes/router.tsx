import { MakeHome } from '@/main/factories/pages'
import { User } from '@/presentation/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}
