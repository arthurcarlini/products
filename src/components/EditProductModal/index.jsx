import { useState } from 'react'

import './EditProductModal.css'
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
                    <span className='formTitle'>Adicionar produto</span>
                    <form className='form' onSubmit={handleInput}>
                        <label className='editLabel'>
                            Imagem:
                            <input className='formInput'
                                name="productImage"
                                type="url"
                                value={productImage}
                                onChange={handleProdImage} />
                        </label>

                        <label className='editLabel'>
                            Nome do produto:
                            <input className='formInput'
                                name="productName"
                                type="text"
                                value={productName}
                                onChange={handleProdName} />
                        </label>

                        <label className='editLabel'>
                            Preço:
                            <input className='formInput'
                                name="productPrice"
                                type="number"
                                value={productPrice}
                                onChange={handleProdPrice} />
                        </label>

                        <label className='editLabel'>
                            Data de entrada:
                            <input className='formInput'
                                name="productDate"
                                type="date"
                                value={productEntryDate}
                                onChange={handleProdEntryDate} />
                        </label>

                        <label className='editLabel'>
                            Quantidade:
                            <input className='formInput'
                                name="totalAmount"
                                type="number"
                                value={totalAmount}
                                onChange={handleTotalAmount} />
                        </label>

                        <input className='formsButtons' type="submit" value="Adicionar"/>
                    </form>
                    <button className='formsButtons' onClick={() => setIsOpen(false)}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default index