import { useState } from 'react'

import './ProductsTable.css'

import ProductsTableRow from '../ProductsTableRow'
import EditProductModal from '../EditProductModal'

const index = ({ products }) => {

    // check if the modal is open
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ultima entrada</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => <ProductsTableRow
                        key={prod.id}
                        id={prod.id}
                        image={prod.productImage}
                        name={prod.productName}
                        price={prod.productPrice}
                        totalAmount={prod.totalAmount}
                        entryDate={prod.productEntryDate}
                        setIsOpen={setIsOpen}
                    />)}
                </tbody>
            </table>
            {isOpen && products.map(prod => <EditProductModal
                setIsOpen={setIsOpen}
                key={prod.id}
                id={prod.id}
                image={prod.productImage}
                name={prod.productName}
                price={prod.productPrice}
                amount={prod.totalAmount}
                entryDate={prod.productEntryDate}
            />)}
        </div >
    )
}

export default index