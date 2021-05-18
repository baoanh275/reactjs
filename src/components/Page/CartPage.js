import React from 'react';
import Cart from '../carts/Cart';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function CartPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <Cart/>
            <Footer/>
        </React.Fragment>
    );
}

export default CartPage;