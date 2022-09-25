import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRouter {
  Home: React.FC
}

const Router: React.FC<IRouter> = ({ Home }: IRouter) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
