import React from 'react';


function Footer(props) {
    return (
        <footer className="footer">
                <div className="grid1">
                    <div className="grid__row grid__row--footer">
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div   className="footer__list-item-link">Trung Tâm Trợ Giúp </div>
                                    <div   className="footer__list-item-link">Shopee Blog </div>
                                    <div   className="footer__list-item-link">Shopee Mail </div>
                                    <div   className="footer__list-item-link">Hướng Dẫn Mua Hàng </div>
                                    <div   className="footer__list-item-link">Hướng Dẫn Bán Hàng </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">VỀ SHOPEE</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div   className="footer__list-item-link">Giới Thiệu Về Shopee Việt Nam </div>
                                    <div   className="footer__list-item-link">Tuyển Dụng </div>
                                    <div   className="footer__list-item-link">Điều Khoản Shopee </div>
                                    <div   className="footer__list-item-link">Chính Sách Bảo Mật </div>
                                    <div   className="footer__list-item-link">Liên Hệ Với Truyền Thông </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">THANH TOÁN</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div   className="footer__list-item-link">
                                        <img className="footer__list-item-link--img" src="./asset/img/visa.PNG" alt="abc" />
                                     </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div   className="footer__list-item-link">
                                        <i className="fab fa-facebook" />
                                        <span>Facebook</span>
                                     </div>
                                    <div   className="footer__list-item-link">
                                        <i className="fab fa-instagram-square" />
                                        <span>Instagram</span>
                                     </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid__col-2-4">
                            <h3 className="footer__heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <div className="footer__list-item--download">
                                        <div className>
                                            <img src="./asset/img/QRcode.png" alt="abc" className="footer__list-item-img" />
                                        </div>
                                        <div className>
                                            <img src="./asset/img/market.PNG" alt="abc" className="footer__list-item-img" />
                                        </div>
                                    </div>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;