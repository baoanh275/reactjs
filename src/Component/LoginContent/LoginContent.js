import React, { Component } from 'react';

class LoginContent extends Component {
    render() {
        return (
            <div className="grid__full-width">
                <div className="container-main">
                    <div className="component-img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/d989a562877074750c02d3bed274ccd8)' }}>
                        {/* Login form */}
                        <form className="auth-form">
                            <div className="auth-form__container">
                                <div className="auth-form__header">
                                    <h3 className="auth-form__heading">Đăng nhập</h3>
                                    <a href="./register.html" className="auth-form__switch">
                                        <span className="auth-form__switch-btn">
                                            Đăng ký
                                        </span>
                                    </a>
                                </div>
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <input type="text" className="auth-form__input" placeholder="Nhập email của bạn" />
                                    </div>
                                    <div className="auth-form__group">
                                        <input type="password" className="auth-form__input" placeholder="Nhập password của bạn" />
                                    </div>
                                </div>
                                <div className="auth-form__aside">
                                    <div className="auth-form__help">
                                        <a href className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                                        <span className="auth-form__help-separate" />
                                        <a href className="auth-form__help-link">Cần trợ giúp</a>
                                    </div>
                                </div>
                                <div className="auth-form__controls">
                                    <button className="btn btn--normal">TRỞ LẠI</button>
                                    <button className="btn btn--primary">ĐĂNG NHẬP</button>
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
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginContent;