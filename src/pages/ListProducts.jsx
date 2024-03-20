import { useState } from "react";
import { listarProdutos } from "../shared/function/crud";

const ListProducts = () => {

  let [produtos, setProdutos] = useState([])
  fetch('http://localhost:3000/products')
  .then((res) => res.json())
  .then((data) => setProdutos(data))
  
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
            {listarProdutos(produtos)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListProducts;
