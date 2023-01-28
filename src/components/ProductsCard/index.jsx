import React from 'react'
import './ProductCard.css'

const index = ({ id, image, name, price, totalAmount }) => {

    return (
        <div id='card'>
            <span>ID: {id}</span>
            <img src={image} alt="imagem do produto" />
            <span>Nome: {name}</span>
            <span>Preço: {price}</span>
            <span>Quantidade: {totalAmount}</span>
        </div>
    )
}

export default index