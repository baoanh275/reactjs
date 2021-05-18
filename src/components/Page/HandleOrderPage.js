import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HandleOrder from '../section/HandleOrder';

function HandleOrderPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <HandleOrder/>
            <Footer/>
        </React.Fragment>
    );
}

export default HandleOrderPage;