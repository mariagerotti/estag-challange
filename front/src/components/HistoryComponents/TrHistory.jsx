import ButtonDetails from "../ButtonDetails";


const TrHistory = ({code, tax, total}) => {
return (
    <tr>
        <td>{code}</td>
        <td>{tax}</td>
        <td>{total}</td>
        <td><ButtonDetails orderCode={code}/></td>
       
    </tr>
)
}

export default TrHistory;