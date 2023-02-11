const index = ({ id, name, price, totalAmount, entryDate, setIsOpen }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>
            <td>{entryDate}</td>
            <td><button onClick={() => setIsOpen(true)}>edit</button></td>
        </tr>
    )
}

export default index