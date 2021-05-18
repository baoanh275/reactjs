import React from 'react';

function RegisterSeller(props) {
    return (
    <div className="grid__full-width app-login">
        <div className="app-login-2">
            <form className="needs-validation form-register" method="POST" action="/buyer/store" noValidate>
                <div className="form-group modal-form-title d-flex justify-content-center">
                    <div className="title-register">Đăng ký</div>
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
                    <label htmlFor="rePassword">Nhập lại mật khẩu</label>
                    <input type="password" className="form-control modal-input" id="confirmpassword" name="confirmpassword" placeholder="Nhập lại mật khẩu" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Vui lòng nhập lại mật khẩu
                    </div>
                </div>
                {'{'}{'{'}!-- <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input type="number" className="form-control modal-input" id="phonenumber" placeholder="Nhập số điện thoại của bạn" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Vui lòng nhập số điện thoại
                    </div>
                </div> --{'}'}{'}'}
                <div className="form-group form-group-label">
                    <p className>Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về
                    <a href="#" className style={{ color: 'var(--primary-color)' }}>Điều khoản dịch vụ &amp; chính sách bảo mật</a>
                    </p>
                </div>
                <div className="form-group d-flex justify-content-end">
                    <button className="btn1 btn--highlight" type="button" data-dismiss="modal">Trở lại</button>
                    <button type="submit" className="btn1 btn--primary">Đăng ký</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default RegisterSeller;