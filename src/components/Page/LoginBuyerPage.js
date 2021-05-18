import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LoginBuyer from '../login/LoginBuyer';

function LoginBuyerPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <LoginBuyer/>
            <Footer/>
        </React.Fragment>
    );
}

export default LoginBuyerPage;