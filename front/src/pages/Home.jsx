import Header from "../components/Header";
import FormIndex from "../components/Home Components/FormIndex";
import TableIndex from "../components/Home Components/TableIndex";
import TotalTaxIndex from "../components/Home Components/TaxTotalIndex";
import FinishPurchase from "../components/Home Components/FinishPurchase";

const Home = () => {
  return(
    
    <div className="component-app">
      <Header />
      <FormIndex />
      <TableIndex />
      <TotalTaxIndex/>
      <FinishPurchase />
    </div>
    
  )
};

export default Home;
