import React from 'react';
import Header from './../header/Header'
import Footer from './../footer/Footer'
import EditPasswordSeller from '../sectionSeller/EditPasswordSeller';

function EditPasswordSellerPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <EditPasswordSeller/>
            <Footer/>
        </React.Fragment>
    );
}

export default EditPasswordSellerPage;