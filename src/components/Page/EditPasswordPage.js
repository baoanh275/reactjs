import React from 'react';
import EditPassword from '../section/EditPassword';
import Header from './../header/Header'
import Footer from './../footer/Footer'

function EditPasswordPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <EditPassword/>
            <Footer/>
        </React.Fragment>
    );
}

export default EditPasswordPage;