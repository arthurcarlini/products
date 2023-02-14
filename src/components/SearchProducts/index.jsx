import './Search.css'

const index = ({ searchProducts, setSearchedProduct }) => {

    function handleInput(e) {
        setSearchedProduct(e.target.value.toLowerCase())
    }

    return (
        <div className="search">
            <input
                type="input"
                placeholder='Procurar...'
                value={searchProducts}
                onChange={handleInput} />
        </div>
    )
}

export default index