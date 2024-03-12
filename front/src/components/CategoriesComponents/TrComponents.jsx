const Tr = ({code, name, tax}) => {
    return(
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{tax}</td>

        </tr>
    )
}

export default Tr