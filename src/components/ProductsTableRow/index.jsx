import React from 'react'

const index = ({ id, name, price, totalAmount, date }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>
            <td>{date}</td>
        </tr>
    )
}

export default index