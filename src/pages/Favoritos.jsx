import React, { useEffect } from "react";
import { useFavoritoContext } from "../contexts/Favorito";
import Linha from "../components/Linha";

function Favoritos() {
  const { favorito, atualizarFavorito } = useFavoritoContext();

  useEffect(() => {
    const carregarDados = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      let novoFavorito = [];
      novoFavorito = data.filter((fav) =>
        favorito.some((item) => item.id == fav.id)
      );
      return atualizarFavorito(novoFavorito);
    };

    carregarDados(favorito);
  });

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
              return <Linha key={item.id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Favoritos;
