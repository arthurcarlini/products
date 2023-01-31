import { useState } from 'react'

const index = ({ products }) => {

    const [search, setSearch] = useState('')
    const results = products.filter(products => products.productName.toLowerCase().indexOf(search) !== -1)

    function handleInput(e) {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <div>
            <input
                type="search"
                placeholder='Procurar...'
                value={search}
                onChange={handleInput} />
        </div>
    )
}

export default index