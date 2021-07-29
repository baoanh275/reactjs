import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ProfileSeller from '../sectionSeller/ProfileSeller';

function ProfilePageSeller(props) {
    return (
        <React.Fragment>
            <Header/>
            <ProfileSeller/>
            <Footer/>
        </React.Fragment>
    );
}

export default ProfilePageSeller;