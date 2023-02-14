import { useState } from 'react'
import './ProductCard.css'

import EditProductModal from '../EditProductModal'

const index = ({ id, image, name, price, totalAmount, entryDate }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id='card'>
            <span>ID: {id}</span>
            <img src={image} alt="imagem do produto" />
            <span>Nome: {name}</span>
            <span>Preço: {price}</span>
            <span>Quantidade: {totalAmount}</span>
            <button onClick={() => setIsOpen(true)}>editar</button>
            {isOpen && <EditProductModal
                setIsOpen={setIsOpen}
                id={id}
                image={image}
                name={name}
                price={price}
                amount={totalAmount}
                entryDate={entryDate}
            />}
        </div>
    )
}

export default index