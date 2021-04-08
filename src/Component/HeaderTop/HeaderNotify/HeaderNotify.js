import React, { Component } from 'react';
import CartItem__HeaderNotify from './CartItem__HeaderNotify'

class HeaderNotify extends Component {
    render() {
        return (
            <li className="header__navbar-icon header__navbar-item has-notify">
                <a href="#" className="header__navbar-item-link ">
                    <i className="header__navbar-icon far fa-bell" />
                                       Thông báo
                </a>
                <div className="header__notify">
                    <header className="header__notify-header">
                        <h3 className="header__notify-first has-hover">Thông báo mới nhận</h3>

                        {/* Thêm vào thông báo thì thêm thẻ ul này vào */}
                        <CartItem__HeaderNotify/>
                        <CartItem__HeaderNotify/>
                        <CartItem__HeaderNotify/>
                        <CartItem__HeaderNotify/>
                        <CartItem__HeaderNotify/>
              
                        <ul className="header__notify-footer">
                            <a href="#" className="header__notify-footer-btn">Xem thêm</a>
                        </ul>
                    </header>
                </div>
            </li>
        );
    }
}

export default HeaderNotify;