import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {putApi,postApi,getApi,deleteApi} from './../utils/apiCaller'
import Paypal from './../Paypal'
import {DataContext} from './../DataProvider';


function HandleOrder(props) {

    const [name,setName] = useState('');
    const [address,setAdress] = useState('');
    const [addressPay,setAdressPay] = useState('');
    const [phone,setPhone] = useState('');
    const [cartid,setCartid] = useState([]);
    const [total,setTotal] = useState(0);
    const value = useContext(DataContext);
    const [payorders,setPayorders] = value.payorders;

    const [orders,setOrders] = useState([]);
    const [checkout, setCheckOut] = useState(false);

    useEffect(()=>{
        
        async function setOrdersss(){
             var order = await JSON.parse(localStorage.getItem('order'));
            await setOrders(order);
           
        }
        
        setOrdersss()
       
        
        
        
    },[])
    useEffect(()=> {
        getCartID()
        
    },[orders])
    
    return (
        <div className="grid">
            <div className="container">
                <div className="mt-5 mb-5">
                    <div className="d-flex justify-content-center">
                        <h3 
                            className="form-title"
                           
                        >ĐƠN ĐẶT HÀNG</h3>
                    </div>
                    <form method="POST" action="/order/storemany" className="form-create-now">
                        <div className="form-group">
                            <label htmlFor="name" class="label-form">Họ tên người nhận</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" id="name" name="name" required 
                                value = {name}
                                onChange = {e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" class="label-form">Địa chỉ nhận hàng</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" id="address" name="address" required 
                                value = {address}
                                onChange = {e => setAdress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addresspm" class="label-form">Địa chỉ thanh toán</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" id="addresspm" name="addresspm" required 
                                value = {addressPay}
                                onChange = {e => setAdressPay(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" class="label-form">Số điện thoại</label>
                            <input 
                                type="number" 
                                className="form-control form-control-lg" id="phone" name="phone" required 
                                value = {phone}
                                onChange = {e => setPhone(e.target.value)}
                            />
                        </div>
                       {/*  <div className="form-group">
                            <label htmlFor="productname" class="label-form">Sản phẩm</label>
                            <input type="text" className="form-control form-control-lg" defaultValue="" id="productnames" name="productnames" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity" class="label-form">Số lượng</label>
                            <input type="text" className="form-control form-control-lg" defaultValue="" id="quantity" name="quantity" />
                        </div> */}
                       
                        {showCartID()}

                        <div className="d-flex justify-content-center">
                        {checkout ? (
                                <Paypal />
                            ) : (
                                <button 
                                type="button" 
                                className="btn1 btn--primary btn-create-now"
                                onClick = {() => onHandleOrder()}
                                 >Thanh toán bằng Paypal</button>
                            )}
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
    function showCartID(){
        var result=null;
        if(orders.length > 0){
            result = orders.map((product,index) => {
                return  <div className="form-group">
                            <label htmlFor="cartID" class="label-form">Cart ID</label>
                            <input 
                                type="text" 
                                disabled={true} 
                                value={product._id}
                                className="form-control form-control-lg" defaultValue=""  name="cartIds" 
                            />
                        </div>
            })
        }
        return result;
    }
    function getCartID(){
        var result=[];

        if(orders.length > 0){
            result = orders.map((product,index) => {
                return (product._id)
            })
            
        }

        const getTotal = () => {
            const res = orders.reduce((prev,item) => {
                return prev + (item.price * item.quantity)
            },0)
            setTotal(res);
        }
        getTotal();
        
       async function setCartIDDD(){
            await setCartid(result)
        }
        
        setCartIDDD()
        
        
        
        return result
    }

    function onHandleOrder(){
        const data = {
            name : name,    
            address : address,
            phone : phone,
            addresspm : addressPay,
            cartIds : cartid,
            total : total
        }
        console.log(data)
        setPayorders(data)
        setCheckOut(true)
       

    }
   
}

export default HandleOrder;