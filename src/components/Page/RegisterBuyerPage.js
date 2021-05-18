import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import RegisterBuyer from './../register/RegisterBuyer'

function RegisterBuyerPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <RegisterBuyer/>
            <Footer/>
            
        </React.Fragment>
    );
}

export default RegisterBuyerPage;