import { useState } from 'react'

import ProductCard from '../ProductsCard'
import ProductTable from '../ProductsTable'

const index = ({ products }) => {

    const [isCard, setIsCard] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsCard(true)}>Card
            </button>
            <button
                onClick={() => setIsCard(false)}>Tabela
            </button>
            {!isCard && products.map(prod => <ProductTable
                key={prod.id}
                name={prod.productName}
                price={prod.productPrice}
                totalAmount={prod.totalAmount}
                date={prod.productDate}
            />)}

            {isCard && products.map(prod => <ProductCard
                key={prod.id}
                image={prod.productImage}
                name={prod.productName}
                price={prod.productPrice}
                totalAmount={prod.totalAmount}
            />)}
        </div>
    )
}

export default index