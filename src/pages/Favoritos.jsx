import React from 'react'
import Linha from '../components/Linha';

function Favoritos() {
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
          <Linha key={'1'} name={'teste'} price={'2000'} />
        </tbody>
      </table>
    </div>
  </>
    )
}

export default Favoritos