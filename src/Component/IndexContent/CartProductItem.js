import React, { Component } from 'react';

class CartProductItem extends Component {
    render() {
        return (
            /* Product Item */
            <div className="home-product-item">
                <div className="home-product-item__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c08a9927b068dd28ebab788012e38106)' }}>
                </div>
                {/* Thay đổi tên */}
                <h4 className="home-product-item__name">Sách - Thiết Kế Cuộc Đời Thịnh Vượng - Design a Prosperous Life
             </h4>
                <div className="home-product-item__price">
                    {/* Giá cũ */}
                    <span className="home-product-item__price-old">300.000đ</span>
                    {/* Giá hiện tại */}
                    <span className="home-product-item__price-current">199.000đ</span>
                </div>
                <div className="home-product-item__action">
                    {/* neu like thi them class  home-product-item__liked vao the span*/}
                    <span className="home-product-item__like">
                        <i className="home-product-item__like-icon far fa-heart" />
                        <i className="home-product-item__liked-icon fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                        <i className="home-product-item__star--gold fas fa-star" />
                        <i className="home-product-item__star--gold fas fa-star" />
                        <i className="home-product-item__star--gold fas fa-star" />
                        <i className="home-product-item__star--gold fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    {/* Số sản phẩm đã bán */}
                    <span className="home-product-item__sold">88 đã bán</span>
                </div>
                <div className="home-product-item__origin">
                    {/* Nhà xuất bản */}
                    <span className="home-product-item__brand">Fahasa</span>
                    {/* Xuất xứ */}
                    <span className="home-product-item__origin-name">Việt Nam</span>
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
        );
    }
}

export default CartProductItem;