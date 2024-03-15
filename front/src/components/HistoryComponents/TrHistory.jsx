import ButtonDetails from "../ButtonDetails";


const TrHistory = ({code, tax, total, orderCode}) => {
return (
    <tr>
        <td>{code}</td>
        <td>{tax}</td>
        <td>{total}</td>
        <td><ButtonDetails onClick={orderCode}/></td>
       
    </tr>
)
}

export default TrHistory;