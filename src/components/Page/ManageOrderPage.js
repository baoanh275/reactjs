import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ManageOrder from '../section/ManageOrder';

function ManageOrderPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    );
}

export default ManageOrderPage;