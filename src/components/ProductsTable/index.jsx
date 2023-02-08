import React from 'react'

import './ProductsTable.css'
import ProductsTableRow from '../ProductsTableRow'


const index = ({ products }) => {
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
                    />)}
                </tbody>
            </table>
        </div >
    )
}

export default index