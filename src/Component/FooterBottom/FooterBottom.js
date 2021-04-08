import React, { Component } from 'react';

class FooterBottom extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="grid">
                    <div className="grid__row grid__row--footer">
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__list-item-link">Trung Tâm Trợ Giúp</a>
                                    <a href="#" className="footer__list-item-link">Shopee Blog</a>
                                    <a href="#" className="footer__list-item-link">Shopee Mail</a>
                                    <a href="#" className="footer__list-item-link">Hướng Dẫn Mua Hàng</a>
                                    <a href="#" className="footer__list-item-link">Hướng Dẫn Bán Hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">VỀ SHOPEE</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__list-item-link">Giới Thiệu Về Shopee Việt Nam</a>
                                    <a href="#" className="footer__list-item-link">Tuyển Dụng</a>
                                    <a href="#" className="footer__list-item-link">Điều Khoản Shopee</a>
                                    <a href="#" className="footer__list-item-link">Chính Sách Bảo Mật</a>
                                    <a href="#" className="footer__list-item-link">Liên Hệ Với Truyền Thông</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">THANH TOÁN</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__list-item-link">
                                        <img className="footer__list-item-link--img" src="./asset/img/visa.PNG" alt />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__list-item-link">
                                        <i className="fab fa-facebook" />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className="footer__list-item-link">
                                        <i className="fab fa-instagram-square" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div className="footer__list-item--download">
                                        <div className>
                                            <img src="./asset/img/QRcode.png" alt className="footer__list-item-img" />
                                        </div>
                                        <div className>
                                            <img src="./asset/img/market.PNG" alt className="footer__list-item-img" />
                                        </div>
                                    </div>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default FooterBottom;