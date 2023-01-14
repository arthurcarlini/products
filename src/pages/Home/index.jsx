import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'

import Card from '../../components/Card'

const Home = () => {

  const url = "http://localhost:3000/products"

  // Modal functions
  const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if (actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else modal.style.display = 'block'
  }

  window.onclick = function (event) {
    const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal()
    }
  }

  // Dias restantes até o vencimento do produto
  function daysRemaining() { // possivel bug
    const actualDate = new Date()
    let diff = new Date(prodDate) - actualDate.getTime()
    let formatedDate = diff / 8.64e+7
    return Math.round(formatedDate)
  }

  // Form
  const [prodName, setProdName] = useState('')
  const [prodDate, setProdDate] = useState('')

  // Cria e adiciona o produto
  function handleAddProduct() {
    axios.post(url, {
      prodName,
      prodDate,
      prodDays: daysRemaining()
    })
      .then(res => console.log(res))
      .catch(error => console.error(error))

    setProdName('')
    setProdDate('')
  }

  ///////////////////////

  function editProduct(id) {
    axios.put(`${url}/${id}`, {
      prodName,
      prodDate,
      prodDays: daysRemaining()
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  ///////////////////////

  function deleteProd(id) {
    axios.delete(`${url}/${id}`)
      .then(res => console.log(res))
  }

  // Get dos produtos
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((res => setData(res.data)))
      .catch((err) => console.error(err))
  }, [prodName])

  // Buscar produto
  const [searchInput, setSearchInput] = useState('')
  const result = data.filter(products => products.prodName.includes(searchInput))

  function renderProducts() {
    if (!searchInput) {
      return data.map(prod => <Card
        key={prod.id} id={prod.id}
        name={prod.prodName}
        date={prod.prodDate}
        days={prod.prodDays}
        edit={() => editProduct(prod.id)}
        deleteProd={() => deleteProd(prod.id)}
      />)
    }
    return result.map(prod => <Card key={prod.id} name={prod.prodName} date={prod.prodDate} days={prod.prodDays} />)
  }

  return (
    <div>
      {/* Modal */}
      <div className='modal'>
        <div className='content'>
          <form>
            <p>Adicionar produto</p>

            <label>Nome do produto:</label>
            <input
              type="text"
              onChange={e => setProdName(e.target.value)}
              value={prodName}
            />

            <label>Expiration Date</label>
            <input
              type="date"
              onChange={e => setProdDate(e.target.value)}
              value={prodDate}
            />

            <button
              type='button'
              onClick={handleAddProduct}>
              Adicionar
            </button>
          </form>
        </div>
      </div>

      <header>
        <nav><button onClick={switchModal}>New</button></nav>
      </header>

      <hr />

      <div id='content'>
        <h1>Produtos</h1>
        <input
          type="text"
          placeholder='Procurar produto'
          onChange={e => setSearchInput(e.target.value)}
        />
      </div>

      <div id='display_products'>
        {renderProducts()}
      </div>
    </div>
  )
}

export default Home