import React, { useState,useEffect,useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {getApi} from '../utils/apiCaller'
import {DataContext} from './../DataProvider'

function SellerManageRevenue(props) {

    const value = useContext(DataContext);
    const [userinfo,setUserinfo] = value.userinfo;
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        async function getOrders(){

            await getApi('api/me/payment/paid').then(res =>{
                 console.log(res);
                 setOrders(res.data)
                 
 
             }).catch(err => {
                 console.log(err)
             })
         }

         getOrders();
    },[])


    return (
        <div className="grid__full-width app-content">
            <div className="container-fluid">
                <div className="row">
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
                                    <Link to="/seller/info/manageorder/all" className="  category-item__link">Tất cả đơn hàng</Link>
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
                                    <Link to="/seller/info/managerevenue/paid" className="category-item__link active1">Đã thanh toán</Link>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div className="col">
                        <div className="container-fluid Pay-content-0">
                            <div className="Pay-title">
                                Tổng Quan
                            </div>
                            <div className="row Pay-content">
                                <div className="col-4 Pay-content-1">
                                    <div className="Pay-label">Sẽ thanh toán</div>
                                    <div className>
                                        <div className="Pay-label-2">Tổng cộng</div>
                                        <div className="Pay-coin d-flex align-items-baseline">
                                            <div className="Pay-coin-label">
                                                đ
                                            </div>
                                            <div className="Pay-coin-text">
                                                {orders.totalUnpaid}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="Pay-label">Đã thanh toán</div>
                                    <div className="d-flex align-items-center justify-content-sm-between">
                                        <div >
                                            <div className="Pay-label-2">Tổng cộng</div>
                                            <div className="Pay-coin d-flex align-items-baseline ">
                                                <div className="Pay-coin-label">
                                                    đ
                                                </div>
                                                <div className="Pay-coin-text">
                                                    {orders.totalPaid}
                                                </div>
                                            </div>
                                        </div>
                                       {/*  <div className>
                                            <div className="Pay-label-2">Tháng này</div>
                                            <div className="Pay-coin  d-flex align-items-baseline">
                                                <div className="Pay-coin-label">
                                                    đ
                                                </div>
                                                <div className="Pay-coin-text">
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                        <div className>
                                            <div className="Pay-label-2">Tổng cộng</div>
                                            <div className="Pay-coin  d-flex align-items-baseline">
                                                <div className="Pay-coin-label">
                                                    đ
                                                </div>
                                                <div className="Pay-coin-text">
                                                    0
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className=" app-content-6 d-flex justify-content-between align-items-center">
                                <div className="label">
                                    Chi Tiết
                                </div>
                                
                            </div>
                            <div className="app-content-3">
                                <div className="manage-product-tab">
                                    <button 
                                        className="btn1 btn-tab"
                                        onClick = {() => {
                                            navigate('/seller/info/managerevenue/willpay')
                                        }}
                                    >
                                        <div > Sẽ thanh toán</div>
                                    </button>
                                    <button 
                                        className="btn1 btn-tab"

                                    >
                                        <div className="active1"> Đã thanh toán</div>
                                    </button>
                                </div>
                            </div>
                            <div className="app-content-1">
                                <div className="app-content-3">
                                    <div className="d-flex align-items-center justify-content-lg-between">
                                        <div className="p-2 flex-fill w-50">
                                            <div className="manage-product-search__input" placeholder="Tìm đơn hàng" type="search">
                                                <div className="manage-product-search__input-1">
                                                    <input className="form-control search-input" placeholder="Tìm sản phẩm" type="search" />
                                                </div>
                                                <div className="manage-product-search__input-2">
                                                    <i className="fas fa-search manage-product-search__icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="app-content-4 d-flex align-items-center justify-content-between">
                                        <div className="orders-label">
                                            Đơn hàng
                                        </div>
                                    </div>
                                    <div className="app-content-5">                                  
                                        <table className="table-manage-product table-hover table-striped table-bordered text-center">
                                            <thead>
                                                <tr className="table-primary">
                                                    <th scope="col">#</th>
                                                    <th scope="col">
                                                        ID đơn hàng
                       
                                                    </th>
                                                    <th scope="col">
                                                        Người mua
                      
                                                    </th>
                                                    <th scope="col">
                                                        Trạng thái
                       
                                                    </th>
                                                    <th scope="col">
                                                        Số tiền
                     
                                                    </th>
                                                    <th scope="col">
                                                        Thời gian hoàn thành
                       
                                                    </th>
                                                </tr>
                                            </thead>
                                            <colgroup>
                                                <col width={20} span={1} />
                                                <col width={300} span={1} />
                                                <col width={200} span={1} />
                                                <col width={100} span={1} />
                                                <col width={100} span={1} />
                                                <col width={200} span={1} />
                                                <col width={90} span={1} />
                                              
                                          
                                        </colgroup>
                                            <tbody>
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
        </div>

    );

    function showOrder(){
        var result =null;
        console.log(orders)
        if(orders.length !== 0)
        {
            if(orders.order.length > 0)
            {
    
                result = orders.order.map((product,index) => {
                  
                    return <tr className="text-center">
                                <td >{index}</td>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.status}</td>
                                <td>{product.payment}</td>
                                <td>{product.createdAt}</td>
                            </tr>
                })
    
            }
            else {
                return result = <tr>
                                    <td colSpan='6' className="text-center">Chưa có đơn hàng nào </td>
                                </tr>
            }
            
        }   
        
       
        return result;
     }
}

export default SellerManageRevenue;