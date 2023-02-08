import { useState } from 'react'

import EditProductModal from '../EditProductModal'

const index = ({ id, image, name, price, totalAmount, entryDate }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>
            <td>{entryDate}</td>
            <td><button onClick={() => setIsOpen(true)}>edit</button></td>
            {isOpen && <EditProductModal
                setIsOpen={setIsOpen}
                id={id}
                image={image}
                name={name}
                price={price}
                amount={totalAmount}
                entryDate={entryDate} 
            />}
        </tr>
    )
}

export default index