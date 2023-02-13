import { useEffect, useState } from 'react'
import './Home.css'

import api from '../../api'
import Navbar from '../../components/Navbar'
import Products from '../../components/Products'

const Home = () => {

  // get products
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    api.get()
      .then((response) => setData(response.data))
      .catch(err => console.error(err))
  }, [])


  // open modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <header>
        <Navbar />
      </header>

      {isOpen && <AddProdModal setIsOpen={setIsOpen} />}

      <hr />

      <h1>Produtos</h1>
      <Products products={data} />
    </div>
  )
}

export default Home