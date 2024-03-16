import FormIndex from '../components/HomeComponents/FormIndex';
import TableIndex from '../components/HomeComponents/TableIndex';
import TotalTaxIndex from '../components/HomeComponents/TaxTotalIndex';
import FinishPurchase from '../components/HomeComponents/FinishPurchase';

import { useState } from 'react';

const Home = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className='home__page '>
      <FormIndex setCart={setCart} cart={cart} />
      <div className='column'>
        <TableIndex setCart={setCart} cart={cart} />
        <TotalTaxIndex />
        <FinishPurchase />
      </div>
    </div>
  );
};

export default Home;
