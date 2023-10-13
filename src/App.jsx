import React from 'react';
import Header from './commonPage/Header';
import { Outlet } from 'react-router-dom';
import Footer from './commonPage/Footer';

const App = () => {
  return (
    <div >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;