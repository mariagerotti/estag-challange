import Header from "../components/Header";
import FormIndex from "../components/HomeComponents/FormIndex";
import TableIndex from "../components/HomeComponents/TableIndex";
import TotalTaxIndex from "../components/HomeComponents/TaxTotalIndex";
import FinishPurchase from "../components/HomeComponents/FinishPurchase";

const Home = () => {
  return (
    <div className="component-app">
      <Header />
      <div className="div-flex">
        <FormIndex />
        <div className="div-align ">
          <TableIndex />
          <TotalTaxIndex />
          <FinishPurchase />
        </div>
      </div>
    </div>
  );
};

export default Home;
