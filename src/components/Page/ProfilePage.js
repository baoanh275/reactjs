import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Profile from '../section/Profile';

function ProfilePage(props) {
    return (
        <React.Fragment>
            <Header/>
            <Profile/>
            <Footer/>
        </React.Fragment>
    );
}

export default ProfilePage;