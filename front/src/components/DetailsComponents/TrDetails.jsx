const TrDetails = ({code, product_code, amount, price, tax}) => {
    return(
        <tr>
            <td>{code}</td>
            <td>{product_code}</td>
            <td>{amount}</td>
            <td>{price}</td>
            <td>{tax}</td>
        </tr>
    )
}

export default TrDetails;