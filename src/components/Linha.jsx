import React from 'react'
import { HeartIcon as Desfavoritar, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { HeartIcon as Favoritar } from '@heroicons/react/24/outline'
import { useFavoritoContext } from '../contexts/Favorito'

const Linha = ({id, name, price}) => {
  const {favorito, adicionarFavorito} = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id)
  const icone = !ehFavorito ? <Favoritar className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => {adicionarFavorito({id, name, price})}}/> : <Desfavoritar className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => {adicionarFavorito({id, name, price})}}/>;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </th>
                <td className="px-6 py-4">
                    {price}
                </td>
                <td className="flex gap-3 px-6 py-4">
                {icone}
                <PencilSquareIcon className="h-6 w-6 text-black-500 cursor-pointer" />
                <TrashIcon className="h-6 w-6 text-trash-500 cursor-pointer" />
                </td>
    </tr>
  )
}

export default Linha