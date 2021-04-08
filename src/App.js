import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderTop from './Component/HeaderTop/HeaderTop'
import FooterBottom from './Component/FooterBottom/FooterBottom'
import Content from './Component/IndexContent/IndexContent'
import DetailContent from './Component/DetailContent/DetailContent'
import CartContent from './Component/CartContent/CartContent'
function App() {
  return (
    <div className="App">
      <HeaderTop/>

      <Content/>
     {/*  <DetailContent/> */}
{/*      <CartContent/> */}




      <FooterBottom/>
    </div>
    
  );
}

export default App;
