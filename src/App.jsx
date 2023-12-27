import React from 'react';
import Header from './commonPage/Header';
import { Outlet } from 'react-router-dom';
import Footer from './commonPage/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster   toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
    </div>
  );
};

export default App;