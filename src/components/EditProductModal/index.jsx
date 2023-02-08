import { useState } from 'react'

import api from '../../api'


const index = ({ setIsOpen, id }) => {
    const url = "http://localhost:3000/products"

    const [productImage, setProductImage] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productDate, setProductDate] = useState('')
    const [totalAmount, setTotalAmount] = useState(0)

    function handleProdImage(e) {
        setProductImage(e.target.value)
    }

    function handleProdName(e) {
        setProductName(e.target.value)
    }

    function handleProdPrice(e) {
        setProductPrice(e.target.value)
    }

    function handleProdDate(e) {
        setProductDate(e.target.value)
    }

    function handleTotalAmount(e) {
        setTotalAmount(e.target.value)
    }

    function handleInput(event) {
        event.preventDefault()

        api.put(`${url}/${id}`, { // terminar isso
            productImage,
            productName,
            productPrice,
            productDate,
            totalAmount
        })
            .then((response => console.log(response.data)))
            .catch(err => console.error(err))

        setProductImage('')
        setProductName('')
        setProductPrice(0)
        setProductDate('')
        setTotalAmount(0)
    }


    return (
        <div>
            <div className='modal'>
                <div className='content'>
                    <form onSubmit={handleInput}>
                        <h1>Adicionar produto</h1>

                        <label>
                            Imagem:
                            <input
                                name="productImage"
                                type="url"
                                value={productImage}
                                onChange={handleProdImage} />
                        </label>

                        <label>
                            Nome do produto:
                            <input
                                name="productName"
                                type="text"
                                value={productName}
                                onChange={handleProdName} />
                        </label>

                        <label>
                            Preço:
                            <input
                                name="productPrice"
                                type="number"
                                value={productPrice}
                                onChange={handleProdPrice} />
                        </label>

                        <label>
                            Expiration Date:
                            <input
                                name="productDate"
                                type="date"
                                value={productDate}
                                onChange={handleProdDate} />
                        </label>

                        <label>
                            Quantidade:
                            <input
                                name="totalAmount"
                                type="number"
                                value={totalAmount}
                                onChange={handleTotalAmount} />
                        </label>

                        <label>

                        </label>

                        <input type="submit" />
                    </form>
                    <button onClick={() => setIsOpen(false)}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default index