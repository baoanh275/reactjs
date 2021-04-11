import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink,Switch } from 'react-router-dom';
import HeaderTop from './Component/HeaderTop/HeaderTop'
import FooterBottom from './Component/FooterBottom/FooterBottom'
import Content from './Component/IndexContent/IndexContent'
import DetailContent from './Component/DetailContent/DetailContent'
import CartContent from './Component/CartContent/CartContent'
import RegisterContent from './Component/RegisterContent/RegisterContent'
import HeaderRegister from './Component/RegisterContent/HeaderRegister'
import LoginContent from './Component/LoginContent/LoginContent'
import HeaderLogin from './Component/LoginContent/HeaderLogin'

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=> <Content/>
    },
    {
        path : '/detail',
        exact : true,
        main : ()=> <DetailContent/>
    },
    {
        path : '/register',
        exact : true,
        main : ()=> <RegisterContent/>
    }
]


/* class routes extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
} */

export default routes;