import React, { useContext, useEffect, useState } from 'react';
import {Link}  from 'react-router-dom'
import {DataContext} from './../DataProvider'
import {getApi} from './../utils/apiCaller'
import axios from 'axios'

function EditPassword() {

    const value = useContext(DataContext);
    const [userinfo,setUserinfo] = value.userinfo;
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');


    useEffect(() =>{
        async function getUserInfo(){
             await getApi('api/buyers/info').then(res =>{
                 console.log(res);
                 const base64ImagePath = new Buffer.from(res.data.imagePath).toString("base64")
                 var data = {
                     info : res.data.userInfo,
                     imagePath : base64ImagePath
                 }
                 setUserinfo(data);
               
                 
 
             }).catch(err => {
                 console.log(err)
             })
         }

         getUserInfo();
        
    },[])

    useEffect(() =>{
        if(Object.values(userinfo).length !== 0)
        {
                
            setUsername(userinfo.info.username);

        }
        

    },[userinfo])

    return (
        <div className="container-fluid app-content">
            <div className="row app-content0">
                <div className="col-2 col1 d-flex align-items-center">
                    <nav className="category1">
                        <div className="category__info">
                            <div className="info-image">
                                <img src={`data:image/jpeg;base64,${Object.values(userinfo).length !== 0 ? userinfo.imagePath : ''}`}  alt="avatar" />
                            </div>
                            <div className="info-name">
                                {Object.values(userinfo).length !== 0 ? userinfo.info.buyername : ''}
                            </div>
                        </div>
                        <h3 className="category__heading">
                            Tải khoản của tôi
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to='/buyer/info' className="category-item__link">Hồ sơ</Link>
                            </li>
                            <li className="category-item">
                                <div className="category-item__link active1">Đổi mật khẩu</div>
                            </li>
                            <li className="category-item">
                                <Link to='' className="category-item__link">Đơn mua</Link>
                            </li>
                        </ul>
            
                        <h3 className="category__heading">
                            Quản lý đơn hàng
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to='/buyer/info/manageorder/all' className="category-item__link">Tất cả đơn hàng</Link>
                            </li>
                            <li className="category-item">
                                <Link to='/buyer/info/manageorder/cancel' className="category-item__link">Đơn huỷ</Link>
                            </li>
                            <li className="category-item">
                                <Link to='/buyer/info/manageorder/refund' className="category-item__link">Trả hàng/Hoàn tiền</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col">
                    <div className="container-fluid">
                        <div className="app-content-1">
                            <div className="d-flex-col profile-box1 ">
                                <div className="profile-label-title">
                                    Đổi mật khẩu
                                </div>
                                <div className="profile-label">
                                    Quản lí thông tin tài khoản để bảo mật tài khoản
                                </div>
                            </div>
                            <div className="profile-box2">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="email" 
                                                className="form-control form-control-lg" 
                                                id="inputEmail3" placeholder="Email"
                                                disabled={true}

                                                value={username}

                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg">Mật khẩu hiện tại</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="password" 
                                                className="form-control form-control-lg" 
                                                id="inputPasswordl3" placeholder="nhập mật khẩu mới" 
                                                value = {password}
                                                onChange = {e =>setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg">Mật khẩu mới</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="password" 
                                                className="form-control form-control-lg" 
                                                id="inputPasswordl3" placeholder="nhập lại mật khẩu mới"
                                                value={repassword}
                                                onChange={e =>setRepassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row  d-flex justify-content-center">
                                        <div className="col-sm-7 d-flex justify-content-center">
                                            <button 
                                                type="submit" 
                                                className="btn1 btn--primary"
                                                onClick = {onHandleSubmit}
                                            >Lưu</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


    function onHandleSubmit(){

        if(password === repassword)
        {

            const formData = new FormData();
            formData.append('phone', userinfo.info.phone);
            formData.append('avatar', userinfo.info.avatar);
            formData.append('address', userinfo.info.address);
            formData.append('buyername', userinfo.info.buyername);
            formData.append('password', password);
    
            async function putt(){
    
               await axios.put(`http://localhost:3001/api/buyers/${userinfo.info._id}`,formData,{
                withCredentials : true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res =>{
                     console.log(res);
                     if(res) alert(res.data.message)
                }).catch(err => {
                    console.log(err)
                })
            }
            putt()
        }
        else {
            alert('Mật khẩu không khớp')
        }
    

      
    }
}

export default EditPassword;