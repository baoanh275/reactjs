import React,{useState,useContext,useEffect} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {setHeaderDefault,getApi, callApi} from './../utils/apiCaller'
import {DataContext} from './../DataProvider'
import {isCheckBuyer} from './../routes//IsCheckAuth'
import axios from "axios";
import {useCookies} from 'react-cookie'

export default function Header(){
    const value = useContext(DataContext);
    const [cart,setCart] = value.cart;
    const [userinfo,setUserinfo] = value.userinfo;
    var navigate = useNavigate();
    const [cookie,setCookie,removeCookie] = useCookies('userId');


   

    function showUserInfo(userinfo){        
        if(Object.keys(userinfo).length === 0) {
       return <React.Fragment>
            <li className="header__navbar-item list-item ">
                <div className="header__navbar-item-link header__navbar-item-link--strong header__navbar-item--separate has-hover">Đăng kí</div>
                <ul className="list-item-register">
                    <li className>
                        <Link to="/register/seller" className="item-register">Đăng kí cho người bán</Link>
                    </li>
                    <li className>
                        <Link to="/register/buyer" className="item-register">Đăng kí cho người mua</Link>
                    </li>
                </ul>
            </li>
            <li className="header__navbar-item list-item">
                <div className="header__navbar-item-link item-link-login header__navbar-item-link--strong has-hover">Đăng nhập</div>
                <ul className="list-item-register">
                    <li className>
                        <Link to="/login/seller" className="item-register">Đăng nhập cho người bán</Link>
                    </li>
                    <li className>
                        <Link to="/login/buyer" className="item-register">Đăng nhập cho người mua</Link>
                    </li>
                </ul>
            </li>
        </React.Fragment>

        }
        else {
           
        return  <React.Fragment>

            <li className="header__navbar-item list-item">
            <img style={{width: '22px', height : '22px', borderRadius: '50%', marginRight : '5px'}} 
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/08/avatar-pikachu-de-thuong.jpg" 
                alt="avatar"
            />
                <div className="header__navbar-item-link item-link-login header__navbar-item-link--strong has-hover">{userinfo.username}</div>
                <ul className="list-item-register">
                    <li className >
                        <Link to="/buyer/info" className="item-register">Thông tin tài khoản</Link>
                    </li>
                    <li className>
                        <Link to="/buyer/info" className="item-register">Đơn hàng</Link>
                    </li>
                    <li className onClick={onHandleLogout}>
                        <div  className="item-register">Đăng xuất</div>
                    </li>
                </ul>
            </li>


                </React.Fragment>
        }
    }
  
    return (
        <React.Fragment>
            <div>
                <div className="container-fluid header1">
                    <header>
                        <div className="grid1">
                            <nav className="header__navbar">
                                <ul className="header__navbar-list">
                                    Vào cửa hàng sách giá rẻ
                                        <div className="header__qr">
                                        <img src="./asset/img/QRcode.png" alt="QR CODE" className="header__qr-img" />
                                        <div className="header__qr-apps">
                                            <Link to="/" className>
                                                <img src="./asset/img/googlePlay.png" alt="header" className="header__qr-download-img" />
                                            </Link>
                                            <Link to="/" className>
                                                <img src="./asset/img/appStore.png" alt="header" className="header__qr-download-img" /></Link>
                                        </div>
                                    </div>
                                    <li className="header__navbar-item">
                                        <span className="header__navbar-title--no-pointer ">Kết nối</span>
                                        <Link to="/" className="header__navbar-icon-link has-hover"><i className="header__navbar-icon face fab fa-facebook " /></Link>
                                        <Link to="/" className="header__navbar-icon-link has-hover"><i className="header__navbar-icon instagram fab fa-instagram " /></Link>
                                    </li>
                                </ul>
                                <ul className="header__navbar-list">
                                    <li className="header__navbar-icon header__navbar-item has-notify">
                                        <div 
                                            to="/books" 
                                            className="header__navbar-item-link "
                                            
                                        >
                                            <i className="header__navbar-icon far fa-bell" />
                                            Thông báo
                                        </div>
                                    </li>
                                    <li className="header__navbar-item">
                                        <Link to="/" className="header__navbar-item-link  has-hover">
                                            <i className="far fa-question-circle" />
                                        Trợ giúp
                                        </Link>
                                    </li>
                                    {showUserInfo(userinfo)}

                                  
                                </ul>
                            </nav>
                            {/* Header with Search */}
                            <div className="header-with-search">
                                <div className="header__logo">
                                    <Link to="/">
                                     
                                        <img src="../img/logo-da-nang.png" alt="header" className="header__logo-img" />
                                    </Link>
                                </div>
                                <div className="header__search">
                                    <div className="header__search-input--wrap">
                                        {/* Input-Search */}
                                        <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm" />
                                        {/* Search History */}
                                        <div className="header__search-history">
                                            <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                            <ul className="header__search-history-list">
                                                <li className="header__search-history-item">
                                                    <Link to>Sách đắc nhân tâm</Link>
                                                </li>
                                                <li className="header__search-history-item">
                                                    <Link to>Sách làm giàu từ chứng khoán</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <button className="header__search-btn">
                                        <i className="header__search-btn-icon fas fa-search" />
                                    </button>
                                </div>
                                {/* Cart Layout */}
                                <div className="header__cart">
                                    <Link to="/buyer/cart" className="header__cart-wrap">
                                        <div className="header__cart-notice">{cart.length}</div>
                                        <i className="header__cart-icon fas fa-shopping-cart" />
                                        {/* No Cart: header__cart-list--no-cart  */}
                                        <div className="header__cart-list ">
                                            <img src="./asset/img/no_cart.png" alt="header" className="header__cart-list--no-cart-img" />
                                            <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm trong giỏ hàng </span>
                                            <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                            <ul className="header__cart-list-item">
                                                {/* Cart Item */}
                                                {/* Thêm vô giỏ hàng thì thêm cái hết cái thẻ li này vào, xong đổi tên, giá, phân loại hàng */}
                                                <li className="header__cart-item">
                                                    <img src="https://cf.shopee.vn/file/49dfc42ce8dbeafe26d6a2b41caa4e26" alt="header" className="header__cart-img" />
                                                    <div className="header__cart-item-info">
                                                        <div className="header__cart-item-head">
                                                            {/* Tên */}
                                                            <h5 className="header__cart-item-name"> Sách - Thiết Kế Cuộc Đời Thịnh Vượng - Design a Prosperous Life</h5>
                                                            <div className="header__cart-item-price-wrap">
                                                                {/* Giá */}
                                                                <span className="header__cart-item-price">199.000đ</span>
                                                                <span className="header__cart-item-multiply">x</span>
                                                                <span className="header__cart-item-quantity">1</span>
                                                            </div>
                                                        </div>
                                                        <div className="header__cart-item-body">
                                                            {/* Phân loại hàng */}
                                                            <span className="header__cart-item-description">Phân loại hàng: Văn Học</span>
                                                            <span className="header__cart-item-remove">Xoá</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="header__cart-item-btn">
                                                <Link to="/" className="btn btn--primary">Xem giỏ hàng</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* Modal */}
              
               
            </div>


        </React.Fragment>
    );
    
    function reloadPage(){
        window.location.reload();
    }

    function onHandleLogout(){
       localStorage.removeItem('buyer');
       removeCookie('userId',{path : '/'});
       setCart('');
       setUserinfo('');
        navigate('/login/buyer')
       
       
      
    }

    function onHandleClickInfo(){
        navigate('/buyer/info')
    }
}

