import { createContext, useContext, useState } from "react";


export const SelecionadoContext = createContext();
SelecionadoContext.displayName = 'Prod_Selecionado';

export default function SelecionadoProvider ({children}) {
    const [selecionado, setSelecionado] = useState([]);

    return(
        <SelecionadoContext.Provider value={{selecionado, setSelecionado}}>
            {children}
        </SelecionadoContext.Provider>
    )
}

export function useSelecionadoContext() {
    const {selecionado, setSelecionado} = useContext(SelecionadoContext);

    function buscarSelecionado(id) {
    fetch(`http://localhost:3000/products/${id}`, {
    method: 'GET'})
    .then(res => res.json())
    .then(json => setSelecionado(json))

    return selecionado
    }

    function limparSelecionado() {
        return setSelecionado([]);
    }

    return {
        selecionado,
        buscarSelecionado,
        limparSelecionado
    }
}