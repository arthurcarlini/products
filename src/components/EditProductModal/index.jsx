import { useState } from 'react'

import api from '../../api'


const index = ({ setIsOpen, id, image, name, price, entryDate, amount }) => {
    const url = "http://localhost:3000/products"

    const [productImage, setProductImage] = useState(image)
    const [productName, setProductName] = useState(name)
    const [productPrice, setProductPrice] = useState(price)
    const [productEntryDate, setProductEntryDate] = useState(entryDate)
    const [totalAmount, setTotalAmount] = useState(amount)

    function handleProdImage(e) {
        setProductImage(e.target.value)
    }

    function handleProdName(e) {
        setProductName(e.target.value)
    }

    function handleProdPrice(e) {
        setProductPrice(e.target.value)
    }

    function handleProdEntryDate(e) {
        setProductEntryDate(e.target.value)
    }

    function handleTotalAmount(e) {
        setTotalAmount(e.target.value)
    }

    function handleInput(event) {
        event.preventDefault()

        api.put(`${url}/${id}`, {
            productImage,
            productName,
            productPrice,
            productEntryDate,
            totalAmount
        })
            .then((response => console.log(response.data)))
            .catch(err => console.error(err))

        setProductImage('')
        setProductName('')
        setProductPrice(0)
        setProductEntryDate('')
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
                            Data de entrada:
                            <input
                                name="productDate"
                                type="date"
                                value={productEntryDate}
                                onChange={handleProdEntryDate} />
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