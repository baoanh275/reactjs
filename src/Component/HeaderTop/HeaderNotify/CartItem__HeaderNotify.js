import React, { Component } from 'react';

class CartItem__HeaderNotify extends Component {
    render() {
        return (
            <ul className="header__notify-list">
                <li className="header__notify-item">
                    <a href="#" className="header__notify-link">
                        <img src="https://cf.shopee.vn/file/c7487225392ba1286fc3682d12f179c3" alt className="header__notify-img" />
                        <div className="header__notify-info">
                            <span className="header__notify-name">
                                Bộ sách Làm Giàu Từ Chứng Khoán phiên bản mới + Hướng Dẫn Thực Hành CANSLIM Cho Người Mới Bắt Đầuuuuu
                        </span>
                            <span className="header__notify-description">
                                Trạng thái: Mới cập nhật
                        </span>
                        </div>
                    </a>
                </li>
            </ul>
        );
    }
}

export default CartItem__HeaderNotify;