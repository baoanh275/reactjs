import React, { useState,useEffect,useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {getApi,postApi} from '../utils/apiCaller'
import {DataContext} from './../DataProvider'

function SellerManageOrder() {

    const [orders,setOrders] = useState([]);
    const value = useContext(DataContext);
    const [userinfo,setUserinfo] = value.userinfo;
    const [status,setStatus] = useState(false)
    const [inputSearch,setInputSearch] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getOrders(){

            await getApi('api/me/stored/orders/all').then(res =>{
                 console.log(res);
                 setOrders(res.data)
                 
 
             }).catch(err => {
                 console.log(err)
             })
         }

         getOrders();
    },[])

    return (
       <div className="container-fluid app-content">
            <div className="row app-content0">
                <div className="col-2 col1 d-flex">
                    <nav className="category1">
                        <div className="category__info">
                        <div className="info-image">
                            <img src={`data:image/jpeg;base64,${Object.values(userinfo).length !== 0 ? userinfo.imagePath : ''}`}  alt="avatar" />
                        </div>
                        <div className="info-name">
                            {Object.values(userinfo).length !== 0 ? userinfo.info.shopname : ''}
                        </div>
                        </div>
                        <h3 className="category__heading">
                            Tài khoản của tôi
                        </h3>
                        <ul className="category-list">
                            <li className="category-item">
                                <Link to="/seller/info" className="category-item__link">Hồ sơ</Link>
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
                                <Link to="/seller/info/manageorder/all" className="active1  category-item__link">Tất cả đơn hàng</Link>
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
                        <div className="app-content-2">
                        <div className="manage-product-tab">
                                <Link to="/seller/info/manageorder/all" className="btn1 btn-tab activeBtnManage ">
                                    Tất cả
                                </Link>
                                <Link to="/seller/info/manageorder/pending" className="btn1 btn-tab ">
                                    Chờ xác nhận
                                </Link>
                                <Link to="/seller/info/manageorder/waiting" className="btn1 btn-tab">
                                    Chờ lấy hàng
                                </Link>
                                <Link to="/seller/info/manageorder/shipping" className="btn1 btn-tab">
                                    Đang giao
                                </Link>
                                <Link to ="/seller/info/manageorder/delivered" className="btn1 btn-tab">
                                    Đã giao
                                </Link>
                                <Link to="/seller/info/manageorder/cancel" className="btn1 btn-tab">
                                    Đơn huỷ
                                </Link>
                                <Link to="/seller/info/manageorder/refund" className="btn1 btn-tab">
                                    Trả hàng/Hoàn tiền
                                </Link>
                            </div>
                        </div>
                        <div className="app-content-1">
                            <div className="app-content-3">
                                <div className="d-flex align-items-center justify-content-lg-between">
                                    <div className="p-2 flex-fill">
                                        <div className="manage-product-search__input" placeholder="Tìm đơn hàng" type="search">
                                            <div className="manage-product-search__input-1">
                                                <input 
                                                    className="form-control search-input" 
                                                    placeholder="Tìm sản phẩm"
                                                    type="text" 
                                                    value = {inputSearch}
                                                    onChange = {(e) => setInputSearch(e.target.value)}
                                                    
                                                />
                                            </div>
                                            <div 
                                                className="manage-product-search__input-2"
                                                onClick = {()=> onHandleSearch()}
                                            >
                                                <i className="fas fa-search manage-product-search__icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 flexx-fill d-flex align-items-center">
                                        <div className="manage-product-order  d-flex align-items-center ">
                                            <div className="p-2">
                                                <div className="manage-product-order__label">
                                                    Ngày đặt hàng
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <div className="manage-product-order__input">
                                                    <input className="form-control input-date" />
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <button className="btn1 manage-product-order__btn">
                                                    Xuất
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-content-4 d-flex align-items-center justify-content-between">
                                    <div className="orders-label">
                                        Đơn hàng
                                    </div>
                                    <div className="orders-btn">
                                        <button className="btn1 btn--primary">
                                            Giao hàng loạt
                                        </button>
                                    </div>
                                </div>
                                <div className="app-content-5">
                                    <table className="table-manage-product table-hover table-striped table-bordered text-center">
                                        <thead>
                                        </thead>
                                        <colgroup>
                                            <col width={20} span={1} />
                                            <col width={200} span={1} />
                                            <col width={300} span={1} />
                                            <col width={55} span={1} />

                                            <col width={100} span={1} />
                                            <col width={200} span={1} />
                                            <col width={90} span={1} />
                                            <col width={60} span={1} />
                                          
                                        </colgroup>
                                        <tbody>
                                        <tr className="table-primary">
                                            <th scope="col">#</th>
                                            <th scope="col"  onClick = {()=> onSort('_id',status ===false ? 'asc' : 'desc')}>
                                                ID Đơn hàng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Tên sản phẩm
                                                
                                            </th>
                                            <th scope="col">
                                                Số lượng
                                                
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('payment',status ===false ? 'asc' : 'desc')}>
                                                Tổng tiền
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('address',status ===false ? 'asc' : 'desc')}>
                                                Địa chỉ giao hàng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('createdAt',status ===false ? 'asc' : 'desc')}>
                                                Thời gian tạo
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('status',status ===false ? 'asc' : 'desc')}>
                                                Trạng thái
                                                <i className="fas fa-sort" />
                                            </th>
                                            
                                        </tr>
                                        </tbody><tbody>
                                            {showOrder()}
                                            
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        

    );

    function showOrder(){
        var result =null;
        
        if(orders.length > 0)
        {

            result = orders.map((product,index) => {
                var resultName = null;
                function showProductName() {
                    resultName = product.products.map((prod,index) => {
                        var cl = parseInt(index) % 2 === 0 ? 'bg-default p-2' : 'bg-light p-2'
                        return <div className={cl}>{prod.tittle}</div>
                    })
                    return resultName;
                
                }
                function showQuantity() {
                    resultName = product.products.map((prod,index) => {
                        var cl = parseInt(index) % 2 === 0 ? 'bg-default p-3 ' : 'bg-light p-3 '
                        return <div className={cl}>{prod.quantity}</div>
                    })
                    return resultName;
                
                }
                return <tr className="text-center">
                            <td >{index}</td>
                            <td>{product._id}</td>
                            <td className="">{showProductName()}</td>
                            <td className="">{showQuantity()}</td>
                            <td>{product.payment}</td>
                            <td>{product.address}</td>
                            <td>{product.createdAt}</td>
                            <td>{product.status}</td>
                        </tr>
            })

        }
        else {
            return <tr>
                        <td colSpan='8' className="text-center">Chưa có đơn hàng nào </td>
                    </tr>
        }
       
        return result;
     }
    function onSort(key,type='asc'){
        setStatus(!status) 
     
        async function getProducts(){               
            await getApi(`api/me/stored/orders/all?_sort&column=${key}&type=${type}`).then(res =>{
                console.log(res);
                setOrders(res.data)
                navigate(`/seller/info/manageorder/all?_sort&column=${key}&type=${type}`)
                

            }).catch(err => {
                console.log(err)
            })  
        }
        getProducts()
       
    } 

    function onHandleSearch(){
      
        async function getProducts(){           
            await postApi(`api/me/stored/orders/all/search/?search=${inputSearch}`).then( response => {
                
                setOrders(response.data)
                setInputSearch('')
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
        }
        getProducts()
        /* navigate(`search?search=${inputSearch}`) */
        
}
}

export default SellerManageOrder;