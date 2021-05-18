import React, { useState,useEffect } from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom'
import {putApi,postApi,getApi,deleteApi} from './../utils/apiCaller'

function ManageOrderCancel() {

    const [orders,setOrders] = useState([]);
    

    useEffect(()=>{

    },[])

    return (
       <div className="container-fluid app-content">
            <div className="row app-content0">
                <div className="col-2 col1 d-flex align-items-center">
                    <nav className="category1">
                        <div className="category__info">
                        <div className="info-image">
                            <img src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-doremon-cute.jpg" alt="avatar" />
                        </div>
                        <div className="info-name">
                                                tên tài khoản
                        </div>
                        </div>
                        <h3 className="category__heading">
                                            Tài khoản của tôi
                        </h3>
                        <ul className="category-list">
                        <li className="category-item">
                            <Link to="/buyer/info" className="category-item__link">Hồ sơ</Link>
                        </li>
                        <li className="category-item">
                            <Link to="/buyer/info/editpassword" className="category-item__link">Đổi mật khẩu</Link>
                        </li>
                        <li className="category-item">
                            <Link to="/buyer/info/manageorder/all" className="category-item__link">Đơn mua</Link>
                        </li>
                        </ul>
                        
                        <h3 className="category__heading">
                                            Quản lý đơn hàng
                        </h3>
                        <ul className="category-list">
                        <li className="category-item">
                            <Link to="/buyer/info/manageorder/all" className="active1 category-item__link">Tất cả đơn hàng</Link>
                        </li>
                        <li className="category-item">
                            <Link to="/buyer/info/manageorder/cancel" className="category-item__link">Đơn huỷ</Link>
                        </li>
                        <li className="category-item">
                            <Link to="/buyer/info/manageorder/refund" className="category-item__link">Trả hàng/Hoàn tiền</Link>
                        </li>
                        </ul>
                    </nav>
                </div>
            
                <div className="col">
                    <div className="container-fluid">
                        <div className="app-content-2">
                        <div className="manage-product-tab">
                                <Link to="/buyer/info/manageorder/all" className="btn1 btn-tab ">
                                    Tất cả
                                </Link>
                                <Link to="/buyer/info/manageorder/pending" className="btn1 btn-tab ">
                                    Chờ xác nhận
                                </Link>
                                <Link to="/buyer/info/manageorder/waiting" className="btn1 btn-tab">
                                    Chờ lấy hàng
                                </Link>
                                <Link to="#" className="btn1 btn-tab">
                                    Đang giao
                                </Link>
                                <Link to ="/buyer/info/manageorder/delivered" className="btn1 btn-tab">
                                    Đã giao
                                </Link>
                                <Link to="/buyer/info/manageorder/cancel" className="btn1 btn-tab activeBtnManage">
                                    Đơn huỷ
                                </Link>
                                <Link to="/buyer/info/manageorder/refund" className="btn1 btn-tab">
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
                                                <input className="form-control search-input" placeholder="Tìm sản phẩm" type="search" />
                                            </div>
                                            <div className="manage-product-search__input-2">
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
                                    <table className="table-manage-product table-striped table-bordered">
                                        <thead>
                                        </thead><colgroup>
                                            <col width={20} span={1} />
                                            <col width={200} span={1} />
                                            <col width={300} span={1} />
                                            <col width={100} span={1} />
                                            <col width={90} span={1} />
                                            <col width={200} span={1} />
                                            <col width={60} span={1} />
                                          
                                        </colgroup>
                                        <tbody><tr className="table-primary">
                                            <th scope="col">#</th>
                                            <th scope="col">
                                                ID Đơn hàng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Tên sản phẩm
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Số lượng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Tổng tiền
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Địa chỉ giao hàng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
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
                return <tr className="text-center">
                            <td >1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
            })

        }
        else {
            return <tr>
                        <td colSpan='7' className="text-center">Chưa có đơn hàng nào </td>
                    </tr>
        }
        console.log(result)
        return result;
     }
}

export default ManageOrderCancel;