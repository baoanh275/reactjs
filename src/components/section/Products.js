import React, {  useContext} from 'react';
import Product from './Product'
import {DataContext} from './../DataProvider'
import {Link, useNavigate} from 'react-router-dom'
import { getApi } from '../utils/apiCaller';

export default function Products() {
    const value = useContext(DataContext);
    
    const [products, setProducts] = value.products;
    const [imagePath, setImagePath] = value.imagePath;
    const navigate = useNavigate()
    
    return (
    <div className="grid1">
        <div className="grid__row app__content">
            <div className="grid__col-2">
                <nav className="category">
                    <h3 className="category__heading">
                        <i className="category__heading-icon fas fa-list"    />
                        DANH MỤC
                    </h3>
                    <ul className="category-list">
                        <li className="category-item category-item--active">
                            <Link 
                                to="/?category=VanHoc" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('VanHoc')}
                            >Văn Học</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=KinhTe"
                                 className="category-item__link"
                                 onClick = {() => onGetCategory('KinhTe')}

                            >Kinh Tế</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=TamLy" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('TamLy')}

                            >Tâm Lý - Kĩ Năng Sống</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=SachThieuNhi" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('SachThieuNhi')}

                            >Sách Thiếu Nhi</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=TieuSu" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('TieuSu')}
                                
                            >Tiểu Sử - Hồi Kí</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=NgoaiNgu" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('NgoaiNgu')}
                                
                            >Sách Học Ngoại Ngữ</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=GiaoKhoa" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('GiaoKhoa')}
                            >Sách Giáo Khoa</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=TrinhTham" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('TrinhTham')}
                            >Trinh Thám</Link>
                        </li>
                        <li className="category-item">
                            <Link 
                                to="/?category=TruyenTranh" 
                                className="category-item__link"
                                onClick = {() => onGetCategory('TruyenTranh')}
                            >Truyện Tranh</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="grid__col-10">
                <div className="home-filter">
                    <span className="home-filter__label">Sắp xếp theo</span>
                    <button 
                        className="home-filter__btn btn1 "
                       
                    >Phổ biến</button>
                    <div
                        className="home-filter__btn btn1 btn--primary "
                        onClick = {() => onSort('createdAt')}

                    >Mới nhất</div>
                    <Link to="/?_sort&column=sold&type=desc" 
                        className="home-filter__btn btn1"
                        onClick = {() => onSort('sold')}
                    >Bán chạy</Link>
                    <div className="select-input">
                        <span className="select-input__label">Giá</span>
                        <i className="select-input__icon fas fa-angle-down" />
                        <ul className="select-input__list">
                            <li className="select-input__item">
                                <Link 
                                    to="/?_sort&column=price&type=asc" 
                                    className="select-input__link"
                                    onClick = {() => onSort('price','asc')}
                                >Giá: Thấp đến cao</Link>
                            </li>
                            <li className="select-input__item">
                                <Link 
                                    to="/?_sort&column=price&type=asc" 
                                    className="select-input__link"
                                    onClick = {() => onSort('price')}
                                >Giá: Cao đến thấp</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="home-filter__page">
                        <span className="home-filter__page-num">
                            <span className="home-filter__page-current">1</span>
                            /14
                        </span>
                        <div className="home-filter__page-control">
                            <Link to="#" className="home-filter__page-btn home-filter__page-btn--disable">
                                <i className="home-filter__page-btn-icon fas fa-angle-left" />
                            </Link>
                            <Link to="#" className="home-filter__page-btn">
                                <i className="home-filter__page-btn-icon fas fa-angle-right" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="home-product">
                    <div className="grid__row">
                        
                         {products ? showProducts(products) : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    function showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product,index) => {     
                
                var found = imagePath.find(function(element) {
                    return product._id === imagePath.productID;
                  });
                var index = ''
                for(let i=0;i<imagePath.length;i++) {
                    if (product._id === imagePath[i].productID){
                        index = i;
                        break;
                    }
                } 
                

                return  <Product  
                            key={product ? product.slug : ''} 
                            product={product} 
                            imagePath ={index !== '' ? imagePath[index].imagePath : ''}
            
                            />
                
                
                
                       
            })
        }

        return result;
    }

    function onSort(key,type='desc'){
        async function getProducts(){           
            const reqURL = `http://localhost:3001/api/?_sort&column=${key}&type=${type}`;
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
        if( key === 'createdAt'){
            navigate(`/?_sort&column=createdAt&type=desc`)
        }
    }  

    function onGetCategory(key){
        async function getProducts(){           
            await getApi(`api/?category=${key}`).then( response => {
              
               setProducts(response.data)
               console.log(response.data)
           }).catch(err => {
               console.log(err)
           })
        }
        getProducts()
    }  
    
  

}




   

