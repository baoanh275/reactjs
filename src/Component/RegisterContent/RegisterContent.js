import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RegisterContent extends Component {
    render() {
        return (
            <div className="grid__full-width">
                <div className="container-main">
                    <div className="component-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/d989a562877074750c02d3bed274ccd8)' }}>
                        <div className="auth-form">
                            <div className="auth-form__container">
                                <div className="auth-form__header">
                                    <h3 className="auth-form__heading">Đăng kí</h3>
                                    <Link to="/login" className="auth-form__switch">
                                        <span className="auth-form__switch-btn">
                                            Đăng nhập
                                        </span>
                                    </Link>
                                    {/* <a href="./login.html" className="auth-form__switch">
                                        <span className="auth-form__switch-btn">
                                            Đăng nhập
                                        </span>
                                    </a> */}
                                </div>
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <input type="text" className="auth-form__input" placeholder="Nhập email của bạn" />
                                    </div>
                                    <div className="auth-form__group">
                                        <input type="password" className="auth-form__input" placeholder="Nhập password của bạn" />
                                    </div>
                                    <div className="auth-form__group">
                                        <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu của bạn" />
                                    </div>
                                </div>
                                <div className="auth-form__aside">
                                    <p className="auth-form__policy-text">Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                                    <Link to="/" className="auth-form__text-link">
                                    Điều khoản dịch vụ &amp; chính sách bảo mật
                                    </Link>
                                    {/* <a href="#" className="auth-form__text-link">Điều khoản dịch vụ &amp; chính sách bảo mật</a> */}
                                    </p>
                                </div>
                                <div className="auth-form__controls">
                                    <button className="btn btn--normal">TRỞ LẠI</button>
                                    <button className="btn btn--primary">ĐĂNG KÝ</button>
                                </div>
                            </div>
                            <div className="auth-form__socials">
                                <a href className="btn btn--with-icon auth-form__socials-facebook btn--size-s">
                                    <i className="auth-form__socials-icon fab fa-facebook-square" />
                                    <span className="auth-form__socials-title">
                                        Kết nối với facebook
                                    </span>
                                </a>
                                <a href className="btn btn--with-icon auth-form__socials-google btn--size-s">
                                    <i className="auth-form__socials-icon fab fa-google" />
                                    <span className="auth-form__socials-title">
                                        Kết nối với Google
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default RegisterContent;