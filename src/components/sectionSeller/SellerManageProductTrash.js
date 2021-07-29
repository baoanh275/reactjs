import React, { useState,useEffect,useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {getApi} from '../utils/apiCaller'
import {DataContext} from './../DataProvider'
function SellerManageProductTrash() {

    const [orders,setOrders] = useState([]);
    const value = useContext(DataContext);
    const [userinfo,setUserinfo] = value.userinfo;
    const [status,setStatus] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        async function getOrders(){

            await getApi('api/me/trash/books').then(res =>{
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
                                <Link to="/seller/info/manageorder/all" className="category-item__link">Tất cả đơn hàng</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/cancel" className="category-item__link">Đơn huỷ</Link>
                            </li>
                            <li className="category-item">
                                <Link to="/seller/info/manageorder/refund" className="category-item__link">Trả hàng/Hoàn tiền</Link>
                            </li>
                        </ul>

                        <h3 className="category__heading active1">
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
                                <Link to="/seller/info/manageproduct/active" className=" category-item__link">Sản phẩm đang hoạt động</Link>
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
                                <Link to="/seller/info/manageproduct/all" className="btn1 btn-tab  ">
                                    Tất cả
                                </Link>
                                <Link to="/seller/info/manageproduct/active" className=" btn1 btn-tab">
                                    Đang hoạt động
                                </Link>
                                <Link to="/seller/info/manageproduct/inactive" className="btn1 btn-tab">
                                    Hết hàng
                                </Link>
                                <Link to="/seller/info/manageproduct/trash" className="activeBtnManage btn1 btn-tab">
                                    Thùng rác
                                </Link>
                                
                            </div>
                        </div>
                        <div className="app-content-1">
                            <div className="app-content-3">
                                <div className="d-flex align-items-center justify-content-lg-between w-50">
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
                                   
                                </div>
                                <div className="app-content-4 d-flex align-items-center justify-content-between">
                                    <div className="orders-label">
                                        Sản phẩm
                                    </div>
                                    <div className="orders-btn">
                                        <button 
                                            className="btn1 btn--primary"
                                            onClick = {() => {
                                                navigate('/seller/info/manageproduct/add')
                                            }}
                                        >
                                            Thêm sản phẩm mới
                                        </button>
                                    </div>
                                </div>
                                <div className="app-content-5">
                                    <table className="table-manage-product table-hover table-striped table-bordered text-center">
                                        <thead>
                                        </thead><colgroup>
                                            <col width={20} span={1} />
                                            <col width={300} span={1} />
                                            <col width={550} span={1} />
                                            <col width={55} span={1} />

                                            <col width={65} span={1} />
                                            <col width={100} span={1} />
                                            <col width={90} span={1} />
                                            
                                          
                                        </colgroup>
                                        <tbody>
                                        <tr className="table-primary">
                                            <th scope="col">#</th>
                                            <th scope="col" onClick = {()=> onSort('name',status ===false ? 'asc' : 'desc')}>
                                                Tên sản phẩm
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Mô tả sản phẩm
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('quantities',status ===false ? 'asc' : 'desc')}>
                                                Số lượng
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('sold',status ===false ? 'asc' : 'desc')}>
                                                Đã bán
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col" onClick = {()=> onSort('createdAt',status ===false ? 'asc' : 'desc')}>
                                                Thời gian tạo
                                                <i className="fas fa-sort" />
                                            </th>
                                            <th scope="col">
                                                Thao tác
                                                
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
                
                return <tr className="text-center" key={index}>
                            <td >{index}</td>
                            <td>{product.name}</td>
                            <td >{product.description}</td>
                            <td >{product.quantities}</td>
                            <td>{product.sold}</td>
                            <td>{product.createdAt}</td>
                            <td>
                                <div className="btn1 btn--primary">Khôi phục</div>
                                <div className="btn1 btn--highlight">Xoá vĩnh viễn</div>
                            </td>
                          
                        </tr>
            })

        }
        else {
            return <tr>
                        <td colSpan='8' className="text-center">Chưa có sản phẩm nào </td>
                    </tr>
        }
       
        return result;
     }

     function onSort(key,type='asc'){
        setStatus(!status) 
     
        async function getProducts(){               
            await getApi(`api/me/trash/books?_sort&column=${key}&type=${type}`).then(res =>{
                console.log(res);
                setOrders(res.data)
                navigate(`/seller/info/manageproduct/trash?_sort&column=${key}&type=${type}`)
                

            }).catch(err => {
                console.log(err)
            })
        }
        getProducts()
       
    } 

}

export default SellerManageProductTrash;