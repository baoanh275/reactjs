import Header from './components/header/Header'

import { Switch,Route,Routes,BrowserRouter as Router } from 'react-router-dom'

import Products from './components/section/Products'
import DataProvider from './components/DataProvider'
import DetailContent from './components/section/DetailContent'
import Cart from './components/carts/Cart'
import LoginBuyer from './components/login/LoginBuyer'
import LoginSeller from './components/login/LoginSeller'
import RegisterBuyer from './components/register/RegisterBuyer'
import RegisterSeller from './components/register/RegisterSeller'

import IsCheckAuth, { isCheckBuyer } from './components/routes/IsCheckAuth'
import PrivateRoute from './components/routes/PrivateRoute'
import { useRoutes } from 'react-router-dom';
import ProductPage from './components/Page/ProductPage'


function App() {
  
  return ( 
    <DataProvider>
      <Router>
        
       
      
       {/*  <Routes>
           
            <Route path="/" element={<ProductPage/>}/>
            <Route path="/books/:id" element={<DetailContent/>}/>
            <PrivateRoute path="/cart" redirectTo="/buyer/login" isAuth={isCheckBuyer} element={<Cart/>}/>
            <Route path="/buyer/login" element={<LoginBuyer/>}/>
            <Route path="/seller/login" element={<LoginSeller/>}/>
            <Route path="/seller/register" element={<RegisterSeller/>}/>
            <Route path="/buyer/register" element={<RegisterBuyer/>}/>
           
            
        </Routes>  */}

        <PrivateRoute/>
        
      </Router>
 

       
    </DataProvider>
   
  );
}

export default App;
