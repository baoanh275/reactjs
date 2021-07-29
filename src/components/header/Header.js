import React,{useContext, useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {DataContext} from './../DataProvider'
import {isCheckBuyer, isCheckSeller} from './../routes//IsCheckAuth'
import {useCookies} from 'react-cookie'
import {postApi,getApi} from './../utils/apiCaller'
import axios from 'axios'

export default function Header(){
    const value = useContext(DataContext);
    const [cart,setCart] = value.cart;
    const [infoUser,setInfoUser] = value.userinfo; 
    const [cookie,setCookie,removeCookie] = useCookies('userId');
    const [inputSearch,setInputSearch] = useState('')
    var navigate = useNavigate();
  
    const [products, setProducts] = value.products;
    const [imagePath, setImagePath] = value.imagePath;

    useEffect(()=>{
        if(isCheckBuyer())
        {

            axios.get('http://localhost:3001/api/carts/show',{
                    withCredentials: true
                }).then(res =>{
                    console.log(res);
                    if (res) setCart(res.data)
                   
    
                }).catch(err => {
                    console.log(err)
                })
        }
    },[])

    function showUserInfo(infoUser){        
        if(Object.keys(infoUser).length === 0) {
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
        if (isCheckBuyer())
        {

            return  <React.Fragment>

                <li className="header__navbar-item list-item">
                <img style={{width: '22px', height : '22px', borderRadius: '50%', marginRight : '5px'}} 
                    src={`data:image/jpeg;base64,${infoUser.imagePath}`} 
                    alt="avatar"
                />
                    <div className="header__navbar-item-link item-link-login header__navbar-item-link--strong has-hover">{infoUser.info.username}</div>
                    <ul className="list-item-register">
                        <li  >
                            <Link to="/buyer/info" className="item-register">Thông tin tài khoản</Link>
                        </li>
                        <li className>
                            <Link to="/buyer/info/manageorder/all" className="item-register">Đơn hàng</Link>
                        </li>
                        <li  onClick={onHandleLogout}>
                            <div  className="item-register">Đăng xuất</div>
                        </li>
                    </ul>
                </li>


                    </React.Fragment>
        }
        else if (isCheckSeller()){
            return  <React.Fragment>

            <li className="header__navbar-item list-item">
            <img style={{width: '22px', height : '22px', borderRadius: '50%', marginRight : '5px'}} 
                src={`data:image/jpeg;base64,${infoUser.imagePath}`} 
                alt="avatar"
                />
                <div className="header__navbar-item-link item-link-login header__navbar-item-link--strong has-hover">{infoUser.info.username}</div>
                <ul className="list-item-register">
                    <li  >
                        <Link to="/seller/info" className="item-register">Thông tin tài khoản</Link>
                    </li>
                    <li className>
                        <Link to="/seller/info/manageproduct/all" className="item-register">Quản lý sản phẩm</Link>
                    </li>
                    <li className>
                        <Link to="/seller/info/manageorder/all" className="item-register">Quản lý đơn hàng</Link>
                    </li>
                    <li className>
                        <Link to="/seller/info/managerevenue/paid" className="item-register">Quản lý thanh toán</Link>
                    </li>
                    <li  onClick={onHandleLogout}>
                        <div  className="item-register">Đăng xuất</div>
                    </li>
                </ul>
            </li>


                </React.Fragment>
        }
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
                                    {showUserInfo(infoUser)}

                                  
                                </ul>
                            </nav>
                            {/* Header with Search */}
                            <div className="header-with-search">
                                <div className="header__logo">
                                    <div onClick = {() => onReturnHome()}>
                                     
                                        <img src="https://w7.pngwing.com/pngs/225/361/png-transparent-black-book-logo-amazon-com-computer-icons-book-library-icon-study-s-miscellaneous-angle-reading.png" alt="header" className="header__logo-img" />
                                    </div>
                                </div>
                                <div className="header__search">
                                    <div className="header__search-input--wrap">
                                        {/* Input-Search */}
                                        <input 
                                            type="text"
                                             className="header__search-input" 
                                             placeholder="Nhập để tìm kiếm sản phẩm" 
                                             value = {inputSearch}
                                             onChange = {(e) => setInputSearch(e.target.value)}
                                        />
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
                                    
                                    <button
                                        className="header__search-btn"
                                        onClick = {() => onSearch()}
                                    >
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
                                            <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                            <ul className="header__cart-list-item">
                                                {/* Cart Item */}
                                                {/* Thêm vô giỏ hàng thì thêm cái hết cái thẻ li này vào, xong đổi tên, giá, phân loại hàng */}
                                                {showCartItem()}
                                            </ul>
                                            {
                                                cart.length > 0 ? <div className="header__cart-item-btn">
                                                                        <div 
                                                                            to="/buyer/cart" className="btn1 btn--highlight"
                                                                            onClick = {() => {
                                                                                navigate('/buyer/cart')
                                                                            }}
                                                                        >Xem giỏ hàng</div>
                                                                    </div>
                                                                    : ''
                                            }
                                            
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
    


    function onHandleLogout(){
       if(isCheckBuyer())
       {

            localStorage.removeItem('buyer');
            localStorage.removeItem('dataCart')
            removeCookie('userId',{path : '/'});
            setCart('');
            setInfoUser('');
            navigate('/login/buyer')
       } 
       else if(isCheckSeller()){
            localStorage.removeItem('seller');
            removeCookie('userId',{path : '/'});        
            setCart('');
            setInfoUser('');
            navigate('/login/seller')
       }
       
      
    }

    function onSearch(){
        async function getProducts(){           
            await postApi(`api/search/?search=${inputSearch}`).then( response => {
              
               setProducts(response.data)
               setInputSearch('')
               console.log(response.data)
           }).catch(err => {
               console.log(err)
           })
        }
        getProducts()
        navigate(`search?search=${inputSearch}`)
    }

    function onReturnHome(){
        async function getProducts(){           
            const reqURL = 'http://localhost:3001/api/';
            const respone = await fetch(reqURL);
            const responeJSON = await respone.json();
            var res = [];
            for(let i=0;i<responeJSON.length;i++){
                res.push(responeJSON[i].book);
                
            }
            console.log(res)
            setProducts(res);
        }
        getProducts()
        navigate('/')
    }

    function showCartItem(){
        if(cart.length === 0 ) return <img style={
            {
                height : '100%',
                width : '80%'
            }
        } src="https://thietbivesinhsonanh.com/Content/images/empty-cart.png"/>
        else
        {
            var result = null;

            result = cart.map((product,index) => {

                var imgPath = ''
                for(let i=0;i<imagePath.length;i++){
                    if(product.productID === imagePath[i].productID){
                      
                         imgPath = new Buffer.from(imagePath[i].imagePath).toString("base64")
                    }
                }
       
               
                return <li className="header__cart-item">
                        <img src={`data:image/jpeg;base64,${imgPath}`} alt="sản phẩm" className="header__cart-img" />
                        <div className="header__cart-item-info">
                            <div className="header__cart-item-head">
                                {/* Tên */}
                                <h5 className="header__cart-item-name"> {product.productname}</h5>
                                <div className="header__cart-item-price-wrap">
                                    {/* Giá */}
                                    <span className="header__cart-item-price">{product.price}$</span>
                                    <span className="header__cart-item-multiply">x</span>
                                    <span className="header__cart-item-quantity">{product.quantity}</span>
                                </div>
                            </div>
                   
                        </div>
                    </li>
            })

            return result
        }
    }
}

