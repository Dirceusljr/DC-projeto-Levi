import React from 'react'
import Linha from '../components/Linha';
import { useFavoritoContext } from '../contexts/Favorito';

function Favoritos() {
    const {favorito} = useFavoritoContext();
  return (
    <>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome do produto
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
        {favorito.map((item) => {
              return (
                <Linha key={item.id} {...item} />
              );
            })}
        </tbody>
      </table>
    </div>
  </>
    )
}

export default Favoritos