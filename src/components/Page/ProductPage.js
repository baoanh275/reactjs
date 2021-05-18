import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Products from '../section/Products';

function ProductPage(props) {
    return (
       <React.Fragment>
           <Header/>
           <Products/>
           <Footer/>
       </React.Fragment>
    );
}

export default ProductPage;