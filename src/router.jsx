import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProducts from './pages/ListProducts'
import InsertProduct from './components/InsertProduct'
import Erro from './pages/Erro'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import FavoritosProvider from './contexts/Favorito'

function AppRouter() {
  return (
    <BrowserRouter>
    <FavoritosProvider>
        <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<ListProducts />} ></Route>
                <Route path='insert' element={<InsertProduct />}></Route>
                <Route path='favoritos' element={<Favoritos />}></Route>
                <Route path='*' element={<Erro />}></Route>
            </Route>
        </Routes>
    </FavoritosProvider>
    </BrowserRouter>
  )
}

export default AppRouter