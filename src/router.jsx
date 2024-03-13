import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProducts from './pages/ListProducts'
import InsertProduct from './components/InsertProduct'
import Erro from './pages/Erro'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<ListProducts />} ></Route>
                <Route path='insert' element={<InsertProduct />}></Route>
                <Route path='favoritos' element={<Favoritos />}></Route>
                <Route path='*' element={<Erro />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter