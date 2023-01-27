import React from 'react'

import ProductCard from '../ProductsCard'

const index = (products) => {

    function renderProducts(products) {
        return data.products.map(products => <ProductCard
            id={id}
            image={productImage}
            name={productName}
            price={productPrice}
            totalAmount={totalAmount} />)
    }
    return (
        <div>{renderProducts}</div>
    )
}

export default index