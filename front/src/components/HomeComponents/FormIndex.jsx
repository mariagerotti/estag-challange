import axios from '../../lib/axios';
// import PayPurchase from './PayPurchase';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/cart/actions';
import '../HomeComponents/FormIndex.css';

const FormIndex = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [tax, setTax] = useState('');
  const [name, setName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [price, setPrice] = useState('');

  const clearFormAftwerSubmit = () => {
    setProduct('');
    setAmount('');
    setTax('');
    setName('');
    setCategoryName('');
    setPrice('');
  };

  async function changeTaxPrice() {
    const teste = products.find((prod) => prod.code == product);
    if (teste) {
      console.log(teste);
      setTax(teste.tax);
      setPrice(teste.price);
      setName(teste.name);
      setCategoryName(teste.categoryname);
    }
  }
  useEffect(() => {
    changeTaxPrice();
  }, [product]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('/routes/products.php');
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const dispatch = useDispatch();
  const handleProductClick = () => {
    dispatch(
      addProductToCart({
        code: product,
        name: name,
        amount: amount,
        tax: tax,
        price: price,
        categoryName: categoryName
      })
    );
  };
  const executa2func = (e) => {
    e.preventDefault();
    handleProductClick();
  };
  return (
    <div className='main main-index' id='mainIndex'>
      <div className='half add-products' id='addProduct'>
        <form
          className='amount-tax-price'
          id='formIndex'
          required
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   postarProd(e);
          // }}
        >
          <select
            id='productName'
            name='name'
            data-index='new'
            required
            onChange={(e) => {
              setProduct(e.target.value);
            }}>
            <option hidden>Select a Product</option>
            {products?.map((prod) => (
              <option key={prod.code} value={prod.code}>
                {prod.name}
              </option>
            ))}
          </select>

          <input
            required
            placeholder='Amount'
            type='number'
            name='amount'
            id='amount'
            min='1'
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <input
            disabled
            placeholder='Tax'
            type='number'
            name='tax'
            id='tax'
            value={tax}
            onChange={(e) => {
              setTax(e.target.value);
            }}
          />

          <input
            disabled
            placeholder='Price'
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            className='secundary-button'
            id='buttonCreateProduct'
            type='submit'
            value='Add Product'
            onClick={executa2func}></input>
        </form>
        {/* <PayPurchase /> */}
      </div>
    </div>
  );
};

export default FormIndex;
