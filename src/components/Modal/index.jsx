import React from 'react'
import './Modal.css'

const index = ({ setIsOpen }) => {
    return (
        <div>
            <div className='modal'>
                <div className='content'>
                    <form>
                        <p>Adicionar produto</p>

                        <label>Nome do produto:</label>
                        <input
                            type="text"
                        />

                        <label>Expiration Date</label>
                        <input
                            type="date"
                        />

                        <button
                            type='button'
                        >
                            Adicionar
                        </button>
                    </form>
                    <button onClick={() => setIsOpen(false)}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default index