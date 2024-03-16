import Header from '../components/Header';
import FormIndex from '../components/HomeComponents/FormIndex';
import TableIndex from '../components/HomeComponents/TableIndex';
import TotalTaxIndex from '../components/HomeComponents/TaxTotalIndex';
import FinishPurchase from '../components/HomeComponents/FinishPurchase';
import { useState, useEffect } from 'react';
import axios from '../lib/axios';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const createOrder = async (order) => {
      try {
        const res = await axios.post('http://localhost/routes/order.php', order);
        const data = res.data;
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getOrder = async () => {
      try {
        const res = await axios.get('http://localhost/routes/order.php');
        const data = res.data;
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
    createOrder();
  }, []);

  return (
    <div className='component-app'>
      <Header />
      <div className='div-flex'>
        <FormIndex setCart={setCart} cart={cart} />
        <div className='div-align '>
          <TableIndex setCart={setCart} cart={cart} />
          <TotalTaxIndex setTax={setTax} tax={tax} setTotal={setTotal} total={total} />
          <FinishPurchase />
        </div>
      </div>
    </div>
  );
};

export default Home;
