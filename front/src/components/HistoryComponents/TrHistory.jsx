const TrHistory = ({code, tax, total, details}) => {
return (
    <tr>
        <td>{code}</td>
        <td>{tax}</td>
        <td>{total}</td>
        <td>{details}</td>
    </tr>
)
}

export default TrHistory;