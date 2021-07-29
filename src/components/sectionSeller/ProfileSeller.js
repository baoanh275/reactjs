
import React, { useContext, useEffect, useState } from 'react';
import {Link}  from 'react-router-dom'
import {DataContext} from '../DataProvider'
import {getApi} from '../utils/apiCaller'
import axios from 'axios'

function ProfileSeller() {
   
    const value = useContext(DataContext);
    const [userinfo,setUserinfo] = value.userinfo;

    const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [file, setFile] = useState('');


    useEffect(() =>{

         async function getUserInfo(){
            await getApi('api/sellers/info').then(res =>{
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
            console.log(userinfo)
            setName(userinfo.info.shopname);
            setPhone(userinfo.info.phone);
            setUsername(userinfo.info.username);
            setAddress(userinfo.info.address);
            setFile(userinfo.info.avatar);

        }

    },[userinfo])
    
    return (
        <div className="container-fluid app-content">
            <div className="row app-content0">
                <div className="col-2 col1 d-flex align-items-center">
                    <nav className="category1">
                        <div className="category__info">
                        <div className="info-image">
                                <img src={`data:image/jpeg;base64,${Object.keys(userinfo) !== 0 ? userinfo.imagePath : ''}`}  alt="avatar" />
                            </div>
                            <div className="info-name">
                                {name}
                            </div>
                        </div>
                        <h3 className="category__heading">
                            Tài khoản của tôi
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to="/seller/info" className="active1 category-item__link">Hồ sơ</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/editpassword" className="category-item__link">Đổi mật khẩu</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/all" className="category-item__link">Đơn mua</Link>
                            </li>
                        </ul>
                        
                        <h3 className="category__heading">
                            Quản lý đơn hàng
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/all" className="category-item__link">Tất cả đơn hàng</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/cancel" className="category-item__link">Đơn huỷ</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/refund" className="category-item__link">Trả hàng/Hoàn tiền</Link>
                            </li>
                        </ul>

                        <h3 className="category__heading">
                            Quản lý sản phẩm
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to="/seller/info/manageproduct/all" className="category-item__link">Tất cả sản phẩm</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageproduct/add" className="category-item__link">Thêm sản phẩm</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageproduct/active" className="category-item__link">Sản phẩm đang hoạt động</Link>
                            </li>
                        </ul>

                        <h3 className="category__heading">
                            Quản lý doanh thu
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to="/seller/info/managerevenue/willpay" className="category-item__link">Sẽ thanh toán</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/managerevenue/paid" className="category-item__link">Đã thanh toán</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="col">
                    <div className="container-fluid">
                        <div className="app-content-1">
                            <div className="d-flex-col profile-box1 ">
                                <div className="profile-label-title">
                                    Hồ Sơ Của Tôi
                                </div>
                                <div className="profile-label">
                                    Quản lí thông tin tài khoản để bảo mật tài khoản
                                </div>
                            </div>
                            <div className="profile-box2">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Tên shop</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="inputName3" 
                                                placeholder="Họ và tên"
                                                value = {name}
                                                onChange = {e => setName(e.target.value)}
                                             />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Số điện thoại</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                id="inputPhoneNumber3" 
                                                placeholder="Số điện thoại" 
                                                value = {phone}
                                                onChange = {e => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Địa chỉ</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="inputPhoneNumber3" 
                                                placeholder="Địa chỉ" 
                                                value = {address}
                                                onChange = {e => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="email" 
                                                className="form-control form-control-lg" 
                                                id="inputEmail3" 
                                                placeholder="Email" 
                                                value = {username}
                                                onChange = {e => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                  
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg">Ảnh đại diện</label>
                                        <div className="col-sm-7">
                                            <input 
                                                type="file" 
                                                 id="inputPasswordl3" 
                                                onChange = {(e) => {
                                                    setFile(e.target.files[0]);
                                                }}
                                                 />
                                        </div>
                                    </div>
                                    <div className="form-group row  d-flex justify-content-center">
                                        <div className="col-sm-7  d-flex justify-content-center">
                                            <button 
                                                type="button" 
                                                className="btn1 btn--primary"
                                                onClick = {()=>onHandleSubmit()}
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

        const formData = new FormData();
        formData.append('phone', phone);
        formData.append('avatar', file);
        formData.append('address', address);
        formData.append('shopname', name);
        formData.append('password', userinfo.info.password);
        formData.append('productsCount', userinfo.info.productsCount);
       
        async function putt(){

            await axios.put(`http://localhost:3001/api/sellers/${userinfo.info._id}`,formData,{
             withCredentials : true,
             headers: {
                 'Content-Type': 'multipart/form-data'
             }
         }).then(res =>{
                  console.log(res);
                  /* if(res) alert(res.data.message) */
             }).catch(err => {
                 console.log(err)
             })
         }
         putt()
    

      
    }
}

export default ProfileSeller;