import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <li className="header__cart-item">
                <img src="https://cf.shopee.vn/file/49dfc42ce8dbeafe26d6a2b41caa4e26" alt className="header__cart-img" />
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
        );
    }
}

export default CartItem;