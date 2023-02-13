import { useState } from 'react'

import './RenderProducts.css'

import ProductCard from '../ProductsCard'
import ProductsTable from '../ProductsTable'

const index = ({ products }) => {

    const [isCard, setIsCard] = useState(false)

    return (
        <div>
            <div className="buttons">
                <button className="cardButton"
                    onClick={() => setIsCard(true)}>Card
                </button>
                <button className="tableButton"
                    onClick={() => setIsCard(false)}>Tabela
                </button>
            </div>

            <div className="productsTable">
                {!isCard && <ProductsTable products={products} />}
            </div>

            <div className="productCard">
                {isCard && products.map(prod => <ProductCard
                    key={prod.id}
                    id={prod.id}
                    image={prod.productImage}
                    name={prod.productName}
                    price={prod.productPrice}
                    entryDate={prod.productEntryDate}
                    totalAmount={prod.totalAmount}
                />)}
            </div>
        </div>
    )
}

export default index