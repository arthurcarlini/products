import { useEffect, useState } from 'react'
import './Home.css'

import api from '../../api'
import Navbar from '../../components/Navbar'
import RenderProducts from '../../components/RenderProducts'

const Home = () => {

  // pega os produtos
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    api.get()
      .then((response) => setData(response.data))
      .catch(err => console.error(err))
  }, [])


  // abre o modal
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <div>
      <header>
        <Navbar />
      </header>

      {isOpen && <AddProdModal setIsOpen={setIsOpen} />}

      <hr />

      <div id='content'>
        <h1>Produtos</h1>
        <input
          type="text"
          placeholder='Procurar produto'
        />
      </div>
      
      <RenderProducts products={data} />
    </div>
  )
}

export default Home