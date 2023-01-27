import React from 'react'

const index = ({ id, image, name, price, totalAmount }) => {

    return (
        <div>
            <span>ID: {id}</span>
            <img src={image} alt="imagem do produto" srcset="" />
            <span>Nome: {name}</span>
            <span>Preço: {price}</span>
            <span>Quantidade: {totalAmount}</span>
        </div>
    )
}

export default index