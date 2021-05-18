import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import DetailContent from '../section/DetailContent';

function DetailPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <DetailContent/>
            <Footer/>
        </React.Fragment>
    );
}

export default DetailPage;