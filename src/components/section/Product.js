import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Product extends Component {
    render() {
        var {product} = this.props;
        return (
    
            <Link to={`/books/${product.slug}`} className="grid__col-2-4">
                {/* Product Item */}
                <div className="home-product-item">
                    <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c08a9927b068dd28ebab788012e38106)' }}>
                    </div>
                    {/* Thay đổi tên */}
                    <h4 className="home-product-item__name"> {product.name}</h4>
                    <div className="home-product-item__price">
                        {/* Giá cũ */}
                        <span className="home-product-item__price-old">300.000$</span>
                        {/* Giá hiện tại */}
                        <span className="home-product-item__price-current">{product.price}$</span>
                    </div>
                    <div className="home-product-item__action">
                        {/* neu like thi them class  home-product-item__liked vao the span*/}
                        <span className="home-product-item__like">                           
                        
                        <i class="fas fa-heart home-product-item__liked-icon"></i>
                        </span>
                        <div className="home-product-item__rating">
                                <i className="home-product-item__star--gold fas fa-star" />
                                <i className="home-product-item__star--gold fas fa-star" />
                                <i className="home-product-item__star--gold fas fa-star" />
                                <i className="home-product-item__star--gold fas fa-star" />
                                <i className="home-product-item__star--gold fas fa-star" />
                        </div>
                        {/* Số sản phẩm đã bán */}
                        <span className="home-product-item__sold">{product.sold} đã bán</span>
                    </div>
                    <div className="home-product-item__origin">
                        {/* Nhà xuất bản */}
                        <span className="home-product-item__brand">{product.shopname}</span>
                        {/* Xuất xứ */}
                        <span className="home-product-item__origin-name">{product.quantities} còn lại</span>
                    </div>
                    <div className="home-product-item__favourite">
                        <i className="fas fa-check" />
                        <span>
                            Yêu thích
                        </span>
                    </div>
                    <div className="home-product-item__sale-off">
                        {/* Số % giảm dựa vào giá cũ và giá mới */}
                        <span className="home-product-item__sale-off-percent">33%</span>
                        <div className="home-product-item__sale-off-label">GIẢM</div>
                    </div>
                </div>
            </Link>
           
        );


        
    }

   /*  showRatings(rating){
        var result = [];

            for(var i=1;i<=rating;i++)
            {
                result.push(<i key={i} className="home-product-item__star--gold fas fa-star" />)
            }
            for(var j=1;j<= (5 - rating);j++){
                result.push(<i key={j+i} className="fas fa-star"/>);
            }
        
        return result;

    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    } */
}

export default Product;