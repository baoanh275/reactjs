import React,{useState,useContext} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { DataContext} from './../DataProvider'
import axios from "axios";

function RegisterBuyer(props) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');
    const [phone,setPhone] = useState('');


    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form className="needs-validation form-register" method="POST" action="/buyer/store" noValidate>
                    <div className="form-group modal-form-title d-flex justify-content-center">
                        <div className="title-register">Đăng ký</div>
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
                            id="password"
                             name="password" 
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
                        <label htmlFor="rePassword">Nhập lại mật khẩu</label>
                        <input 
                            type="password" 
                            className="form-control modal-input" 
                            id="confirmpassword" 
                            name="confirmpassword" 
                            placeholder="Nhập lại mật khẩu" required
                            value = {repassword}
                            onChange = {e => setRepassword(e.target.value)}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập lại mật khẩu
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Số điện thoại</label>
                        <input 
                            type="number" 
                            className="form-control modal-input" 
                            id="phonenumber" 
                            placeholder="Nhập số điện thoại của bạn" required
                            value = {phone}
                            onChange = {e => setPhone(e.target.value)}
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập số điện thoại
                        </div>
                    </div>
                    <div className="form-group form-group-label">
                        <p className>Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về
                        <a href="#" className style={{ color: 'var(--primary-color)' }}>Điều khoản dịch vụ &amp; chính sách bảo mật</a>
                        </p>
                    </div>
                    <div className="form-group d-flex justify-content-end">
                        <button className="btn1 btn--highlight" type="button" data-dismiss="modal">Trở lại</button>
                        <button
                            type="button" 
                            className="btn1 btn--primary"
                            onClick={onHandleSubmit}
                        >Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>

    );

    function onHandleSubmit(){
        if(password===repassword){
            
        }
    }
}

export default RegisterBuyer;