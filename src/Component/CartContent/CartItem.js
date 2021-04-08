import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
        <div className="cart-page-product-section__items">
            <div className="cart-item">
                <div className="cart-item-content">
                    <div className="cart-item-checkbox">
                        <input type="checkbox" />
                    </div>
                    <div className="cart-item-product">
                        <div className="cart-item-product__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/7fda557bbfeb3fcb0a1bfae54358c7bb_tn)' }}>
                        </div>
                        {/* Lấy tên sản phẩm */}
                        <div className="cart-item-product__name">
                            Sách - Linh Hồn Của Tiền - The Soul Of Money
                        </div>
                    </div>
                    <div className="cart-item-price">
                        <div className="cart-item-price__label">đ</div>
                        {/* Lấy giá sản phẩm */}
                        <div className="cart-item-price__text">299.000</div>
                    </div>
                    <div className="cart-item-quantity">
                        <div className="quantity__box-button">
                            {/* Lấy số lượng */}
                            <button className="quantity__box-button--sub">-</button>
                            <button className="quantity__box-button--label">1</button>
                            <button className="quantity__box-button--add">+</button>
                        </div>
                    </div>
                    <div className="cart-item-total-price">
                        <div className="cart-item-total-price__label">đ</div>
                        {/* Tính tổng giá tiền */}
                        <div className="cart-item-total-price__text">299.000</div>
                    </div>
                    <div className="cart-item-action">Xoá</div>
                </div>
            </div>
        </div>
        );
    }
}

export default CartItem;