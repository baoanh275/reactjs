import React from 'react';

function LoginSeller(props) {
    return (
        <div className="grid__full-width app-login">
            <div className="app-login-2">
                <form className="needs-validation form-register" method="POST" action="/buyer/verifyaccount" noValidate>
                    <div className="form-group modal-form-title d-flex justify-content-center">
                        <div className="title-register">Đăng nhập</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input type="email" className="form-control modal-input" id="username" name="username" placeholder="Nhập email của bạn" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập email
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" className="form-control modal-input" id="password" name="password" placeholder="Nhập mật khẩu của bạn" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Vui lòng nhập mật khẩu
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Quên mật khẩu?</label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button className="btn1 btn--highlight " type="button" data-dismiss="modal">Trở lại</button>
                        <button type="submit" className="btn1 btn--primary form-btn-submit">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default LoginSeller;