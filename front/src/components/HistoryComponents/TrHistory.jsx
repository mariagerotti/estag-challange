import ButtonDetails from "../ButtonDetails";


const TrHistory = ({code, tax, total}) => {
return (
    <tr>
        <td>{code}</td>
        <td>{tax}</td>
        <td>{total}</td>
        <td><ButtonDetails code={code}/></td>
       
    </tr>
)
}

export default TrHistory;