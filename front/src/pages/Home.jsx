import Header from "../components/Header";
import FormIndex from "../components/HomeComponents/FormIndex";
import TableIndex from "../components/HomeComponents/TableIndex";
import TotalTaxIndex from "../components/HomeComponents/TaxTotalIndex";
import FinishPurchase from "../components/HomeComponents/FinishPurchase";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  return (
    <div className="component-app">
      <Header />
      <div className="div-flex">
        <FormIndex setCart={setCart} cart={cart} products={products}/>
        <div className="div-align ">
          <TableIndex setCart={setCart} cart={cart} />
          <TotalTaxIndex />
          <FinishPurchase />
        </div>
      </div>
    </div>
  );
};

export default Home;
