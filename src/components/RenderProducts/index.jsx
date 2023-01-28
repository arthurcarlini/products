import React from 'react'

import ProductCard from '../ProductsCard'

const index = ({products}) => {

    return (
        <div>
            {products.map(prod => <ProductCard
                key={prod.id}
                image={prod.productImage}
                name={prod.productName}
                price={prod.productPrice}
                totalAmount={prod.totalAmount} />)}
        </div>
    )
}

export default index