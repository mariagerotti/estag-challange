import '../HomeComponents/TaxTotalIndex.css';
import { useSelector } from 'react-redux';
import { selectProductsTotalPrice, selectProductsTotalTax } from '../../redux/cart/cartSelectors';

const TotalTaxIndex = () => {
  const total = useSelector(selectProductsTotalPrice);
  const tax = useSelector(selectProductsTotalTax);

  return (
    <div className='row'>
      <div>
        <label>Tax:</label>
        <input disabled type='number' name='tax' id='final-tax' placeholder={tax} />
      </div>

      <div>
        <label>Total:</label>
        <input disabled type='number' name='total' id='total' placeholder={total} />
      </div>
    </div>
  );
};
export default TotalTaxIndex;
