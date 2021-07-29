import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


function RegisterBuyer(props) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');
    const [phone,setPhone] = useState('');
    const navigate = useNavigate()


    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form className="needs-validation form-register"  noValidate>
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
                        <span >Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về 
                           
                        </span>
                          
                        <span 
                            style={
                                {
                                    color : '#d80c24',
                                    marginLeft : '4px'
                                }
                            }
                        >Điều khoản dịch vụ &amp; chính sách bảo mật</span>
                    </div>
                    <div className="form-group d-flex justify-content-end">
                        <button
                            className="btn1 btn--highlight btn-register" 
                            type="button" data-dismiss="modal"
                            onClick = {() => {
                                navigate('/')
                            }}
                        >Trở lại</button>
                        <button
                            type="button"   
                            className="btn1 btn--primary btn-register"
                            onClick={() =>onHandleSubmit()}
                        >Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>

    );

    function onHandleSubmit(){
        if(password===repassword){
            const formData = new FormData();
            formData.append('phone', phone);
            formData.append('username', username);
            formData.append('password', password);
            
            async function postt(){

                await axios.post(`http://localhost:3001/api/buyers/store`,{
                 
                 data : {
                     'username' : username,
                     'password' : password,
                     'confirmpassword' : repassword,
                     'phone' : phone
                 }
             }).then(res =>{
                      console.log(res);
                      if(res) alert(res.data.message)
                      navigate('/login/buyer')
                 }).catch(err => {             
                     if(err) alert('Email đã tồn tại')
                 })
             }
             postt()
        }
        else{
            alert('Mật khẩu không khớp')
        }
    }
}

export default RegisterBuyer;