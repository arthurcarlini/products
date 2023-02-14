const index = ({ id, name, price, totalAmount, entryDate, setIsOpen }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{totalAmount}</td>
            <td>{entryDate}</td>
            <td><button className="editButton" onClick={() => setIsOpen(true)}>editar</button></td>
        </tr>
    )
}

export default index