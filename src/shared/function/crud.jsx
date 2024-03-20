import Linha from "../../components/Linha";

export function listarProdutos(produtos) {
  return (
    produtos.map((item) => {
      return <Linha key={item.id} {...item} />
    }))
  }

export function cadastrarProduto(event) {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;

  let dados = {
    name: name,
    price: price
  }

fetch('http://localhost:3000/products', {
  method: 'POST',
  headers : { "content-type" : "application/json; charset=UTF-8" },
  body: JSON.stringify(dados)
})
.then(res=>res.json())
.then(json=>console.log(json))

event.target.elements.name.value = ''
event.target.elements.price.value = ''
}

export function deletarProduto(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE'})
    .then(res => res.json())
    .then(json => console.log(json))
}

export function atualizarProduto(event, id) {
  event.preventDefault()
  const name = event.target.elements.name.value;
  const price = event.target.elements.price.value;

let dados = {
  name: name,
  price: price
}

fetch(`http://localhost:3000/products/${id}`, {
method: 'PUT',
headers : { "content-type" : "application/json; charset=UTF-8" },
body: JSON.stringify(dados)
})
.then(res=>res.json())
.then(json=>console.log(json))

event.target.elements.name.value = ''
event.target.elements.price.value = ''
}
