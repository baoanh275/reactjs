import React,{useState,useContext} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { DataContext} from './../DataProvider'
import {DataCookie} from './../utils/HandleCookie'
import {setHeaderDefault,getApi, callApi} from './../utils/apiCaller'
import axios from "axios";
import Cookies from 'universal-cookie';

function LoginBuyer() {

    const value = useContext(DataContext);
    const value2 = useContext(DataCookie);
    const [cart] = value.cart;
    const [userinfo,setUserinfo] = value.userinfo;
    let navigate = useNavigate();
    const cookies = new Cookies();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    

    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form className="needs-validation form-register" method="POST" action="/buyer/verifyaccount" noValidate>
                    <div className="form-group modal-form-title d-flex justify-content-center">
                        <div className="title-register">Đăng nhập</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input 
                            type="email" 
                            className="form-control modal-input" 
                            id="username" 
                            name="username" 
                            placeholder="Nhập email của bạn" required 
                            value = {username}
                            onChange = {e => setUsername(e.target.value)}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập email
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input 
                            type="password" 
                            className="form-control modal-input" 
                            id="password" name="password" 
                            placeholder="Nhập mật khẩu của bạn" required 
                            value = {password}
                            onChange = {e => setPassword(e.target.value)}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập mật khẩu
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Quên mật khẩu?</label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn1 btn--highlight " type="button" data-dismiss="modal">Trở lại</button>
                        <button 
                            type="button" 
                            className="btn1 btn--primary form-btn-submit"
                            onClick={handleLogin}
                        >Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>

    );

    function handleLogin(){
   
        axios({
            url: '/buyers/verifyaccount',
            method : 'post',
            baseURL : 'http://localhost:3001/api',
            headers: 
            {
                'X-Requested-With': 'XMLHttpRequest',
               
            },
            data : {
                username : username,
                password : password
            }

        }).then(response => {
          
            console.log(response);

            if(response.request.status == "200" || response.request.status == "202" ){

                localStorage.setItem('buyer',JSON.stringify(response.data.cookie))  
               
                
            }

            setHeaderDefault(response.data.cookie);
            async function getUserInfo(){

               await getApi('api/buyers/info').then(res =>{
                    console.log(res);
                    /* const userInfo = res.data; */
                    /* localStorage.setItem('userinfo',JSON.stringify(userInfo)) */
                    setUserinfo(res.data);
                    
    
                }).catch(err => {
                    console.log(err)
                })
            }

            getUserInfo();
           
            
            /* setCookie('userId',response.data.cookie,{
                maxAge : 360000,
                path : '/'
            })    */
            

            cookies.set('userId', response.data.cookie, { path: '/' });
           
            navigate("/");
                    
           /*  window.location.reload(); */

        }).catch(err => {
      
            console.log(err)
        })

        
        
    }
}

export default LoginBuyer;