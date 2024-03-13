import React from 'react'


const InsertProduct = () => {

  function onSubmitHandle(event) {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;

fetch('http://localhost:3000/products', {
  method: 'POST',
  body: JSON.stringify({
    id: 5,
    name: name,
    price: price
  })
})
.then(res=>res.json())
.then(data => console.log(data))

  }


  return (
   <>
   

   

<form className="max-w-sm mx-auto" onSubmit={(e) => onSubmitHandle(e)}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do produto</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Guitarra ibanez" required />
  </div>
  <div className="mb-5">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
    <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='R$:1000' required />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
</form>

   </>
  )
}

export default InsertProduct