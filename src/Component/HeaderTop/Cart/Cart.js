import React, { Component } from 'react';
import CartItem from './CartItem'

class Cart extends Component {
    render() {
        return (
            <div className="header__cart">
                <div className="header__cart-wrap">
                    <div className="header__cart-notice">3</div>
                    <i className="header__cart-icon fas fa-shopping-cart" />
                    {/* No Cart: header__cart-list--no-cart  */}
                    <div className="header__cart-list ">
                        <img src="./asset/img/no_cart.png" alt className="header__cart-list--no-cart-img" />
                        <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm trong giỏ hàng </span>
                        <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                        <ul className="header__cart-list-item">
                            {/* Cart Item */}
                            {/* Thêm vô giỏ hàng thì thêm cái hết cái thẻ li này vào, xong đổi tên, giá, phân loại hàng */}
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </ul>
                        <div className="header__cart-item-btn">
                            <a href="#" className="btn btn--primary">Xem giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;