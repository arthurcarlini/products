import { useState } from 'react'

import SearchProducts from '../SearchProducts'
import RenderProducts from '../RenderProducts'

const index = ({ products }) => {

    const [searchedProduct, setSearchedProduct] = useState('')

    const results = products.filter(products => products.productName.toLowerCase().indexOf(searchedProduct) !== -1)

    return (
        <div>
            <SearchProducts products={products} searchProducts={searchedProduct} setSearchedProduct={setSearchedProduct} />
            {!searchedProduct && <RenderProducts products={products} />}
            {searchedProduct && <RenderProducts products={results} />}
        </div>
    )
}

export default index