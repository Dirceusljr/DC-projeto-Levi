import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProducts from './pages/ListProducts'

import Erro from './pages/Erro'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import FavoritosProvider from './contexts/Favorito'
import UpdateProduct from './pages/UpdateProduct'
import InsertProduct from './pages/InsertProduct'
import SelecionadoProvider from './contexts/ProdutoSelecionado'

function AppRouter() {
  return (
    <BrowserRouter>
    <FavoritosProvider>
      <SelecionadoProvider>
        <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<ListProducts />} ></Route>
                <Route path='insert' element={<InsertProduct />} ></Route>
                <Route path='update' element={<UpdateProduct />}></Route>
                <Route path='favoritos' element={<Favoritos />}></Route>
                <Route path='*' element={<Erro />}></Route>
            </Route>
        </Routes>
      </SelecionadoProvider>
    </FavoritosProvider>
    </BrowserRouter>
  )
}

export default AppRouter