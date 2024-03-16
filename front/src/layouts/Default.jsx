import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import './Default.css';

export default function Default() {
  return (
    <div className='main__container'>
      <Header />

      <main className='main__content'>
        <Outlet />
      </main>
    </div>
  );
}
