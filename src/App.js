import logo from './logo.svg';
import './App.css';
import React from 'react';
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
import routes from './routes';

const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
  return (
    <Route path = {to} exact={activeOnlyWhenExact} children ={(match)=>{
      var active = match ? 'active abc' : '';
      return (
        <li ClassName={`my-li ${active}`}>
            <NavLink to={to} className="my-link">
              {label}
            </NavLink>
        </li>
      )
    }}/>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
       {/*  <HeaderTop /> */}

        {/*  <Content/> */}
        {/*  <DetailContent/> */}
        {/*  <CartContent/> */}
        <Switch>
            {/* <Route path="/" exact component={Content}>
                <Route component={HeaderTop}></Route>
                <Route component={Content}></Route>
            </Route>
            
            <Route path="/detail" exact component={DetailContent} >
                <Route component={HeaderTop}></Route>
                <Route component={DetailContent}></Route>
            </Route>
            
            <Route path="/register" exact component={RegisterContent} >
                <Route component={HeaderRegister}></Route>
                <Route component={RegisterContent}></Route>    
            </Route>
            
            <Route path="/login" exact component={LoginContent} >
                <Route component={HeaderLogin}></Route>
                <Route component={LoginContent}></Route>    
            </Route> */}
            <Route path="/" exact component={Content}>
                <Route component={HeaderTop}></Route>
                <Route component={Content}></Route>
            </Route>
            {this.showContentMenus(routes)}
        </Switch>


      <FooterBottom />
      </div>
    </Router>

  );

 
}

showContentMenus = (routes) =>{
  var result = null;
  if(routes.length > 0){
      result = routes.map((route,index) => {
        return{
           
        };

      });
  }
 

}


export default App;
