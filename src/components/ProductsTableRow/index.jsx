import { useState } from 'react'

import EditProductModal from '../EditProductModal'

const index = ({ id, name, price, totalAmount, date }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>
            <td>{date}</td>
            <td><button onClick={() => setIsOpen(true)}>edit</button></td>
            {isOpen && <EditProductModal setIsOpen={setIsOpen} id={id} />}
        </tr>
    )
}

export default index