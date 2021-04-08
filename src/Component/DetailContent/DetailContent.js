import React, { Component } from 'react';

class DetailContent extends Component {
    render() {
        return (
            <div className="app__container">
                <div className="grid ">
                    <div className="grid__row row__detail">
                        <div className="grid__col-5">
                            <div className="col__picture">
                                <div className="frame-picture">
                                    <div className="frame-picture__main" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/49dfc42ce8dbeafe26d6a2b41caa4e26)' }}>
                                    </div>
                                    <div className="grid__row frame-picture__small">
                                        <div className="grid__col-2-4 picture" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/49dfc42ce8dbeafe26d6a2b41caa4e26)' }}>
                                        </div>
                                        <div className="grid__col-2-4 picture" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/46c41635f450377ca220c1e2ac49cb73)' }}>
                                        </div>
                                        <div className="grid__col-2-4 picture" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/10a17a0a47c6eb7461de69f21e46d1d8)' }}>
                                        </div>
                                        <div className="grid__col-2-4 picture" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c08a9927b068dd28ebab788012e38106)' }}>
                                        </div>
                                        <div className="grid__col-2-4 picture" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/92504920bfe1a34fb68631dedff5bcd8)' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="share-socials">
                                    <div className="share-socials__box">
                                        <div className="share-socials__text">Chia sẻ:</div>
                                        <div className="share-socials__icon icon-mess">
                                            <i className="fab fa-facebook-messenger" />
                                        </div>
                                        <div className="share-socials__icon icon-fb">
                                            <i className="fab fa-facebook" />
                                        </div>
                                        <div className="share-socials__icon icon-gg">
                                            <i className="fab fa-google-plus" />
                                        </div>
                                        <div className="share-socials__icon icon-pin">
                                            <i className="fab fa-pinterest" />
                                        </div>
                                        <div className="share-socials__icon icon-twiter">
                                            <i className="fab fa-twitter" />
                                        </div>
                                    </div>
                                    <div className="share-socials__like">
                                        <div className="share-socials__like-icon">
                                            <i className="far fa-heart" />
                                        </div>
                                        <div className="share-socials__like-text">
                                            Đã thích
                                        </div>
                                        <div className="share-socials__like-number">
                                            (149)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__col-7">
                            <div className="information">
                                <div className="information-name">
                                    <div className="information-name__icon">
                                        <svg width={30} height={16} className viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z" fill="#D0011B" /><path fillRule="evenodd" clipRule="evenodd" d="M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z" fill="white" /></svg>
                                    </div>
                                    <div className="information-name__text">Sách - Thiết Kế Cuộc Đời Thịnh Vượng - Design a Prosperous Life</div>
                                </div>
                                <div className="information-rate">
                                    <div className="information-rate__star">
                                        <div className="quantity-star">5.0</div>
                                        <div className="star">
                                            <i className="star-icon fas fa-star" />
                                            <i className="star-icon fas fa-star" />
                                            <i className="star-icon fas fa-star" />
                                            <i className="star-icon fas fa-star" />
                                            <i className="star-icon fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="information-rate__rated">
                                        <div className="quantity-rated">
                                            195
                                        </div>
                                        <div className="rated-text">Đánh Giá</div>
                                    </div>
                                    <div className="information-rate__sale">
                                        <div className="quantity-sale">
                                            526
                                        </div>
                                        <div className="sale-text">
                                            Đã Bán
                                        </div>
                                    </div>
                                </div>
                                <div className="information-price">
                                    <div className="information-price__text">đ</div>
                                    <div className="information-price__price">199.000</div>
                                </div>
                                <div className="information-box">
                                    <div className="information-coin">
                                        <div className="information-coin__label">Xu</div>
                                        <div className="information-coin__box">
                                            <div className="information-coin__icon">
                                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/0b428b80edef1fabfd3f0b8e35ac81eb.png" width={16} height={16} alt />
                                            </div>
                                            <div className="information-coin__text">
                                                Mua hàng và tích 900 Shopee Xu
                                            </div>
                                            <div className="information-coin__icon">
                                                <svg width={14} height={14}><g transform="translate(1 1)" stroke="#9B9B9B" fill="none" fillRule="evenodd"><circle fill="#FFF" cx={6} cy={6} r={6} /><path d="M5.054 7.859c.008-.457.06-.819.156-1.084.096-.265.292-.559.588-.882l.755-.778c.323-.365.484-.757.484-1.176 0-.403-.106-.72-.317-.948-.211-.229-.519-.343-.922-.343-.392 0-.707.104-.946.311-.238.208-.357.486-.357.836H3.429c.007-.622.23-1.125.665-1.507.437-.383 1.004-.574 1.704-.574.726 0 1.292.195 1.697.585.406.39.608.926.608 1.606 0 .672-.31 1.335-.933 1.988l-.629.623c-.28.311-.42.759-.42 1.343H5.053zm-.046 1.827c0-.173.053-.318.158-.435.106-.117.263-.176.47-.176.208 0 .365.059.473.176a.62.62 0 0 1 .161.435.599.599 0 0 1-.161.43c-.108.113-.265.17-.473.17-.207 0-.364-.057-.47-.17a.605.605 0 0 1-.158-.43z" strokeWidth=".2" fill="#9B9B9B" /></g></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="information-delivery">
                                        <div className="information-delivery__label">Vận chuyển</div>
                                        <div className="information-delivery__box">
                                            <div className="box-delivery__free">
                                                <div className="box-delivery__free-icon">
                                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png" width={25} height={15} />
                                                </div>
                                                <div className="box-delivery__free-text">
                                                    <div className>
                                                        Miễn Phí Vận Chuyển
                                                    </div>
                                                    <div className="box-delivery__free-label">
                                                        Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-delivery__fee">
                                                <div className="box-delivery__fee-icon">
                                                    <img src="./asset/img/car.PNG" alt />
                                                </div>
                                                <div className>
                                                    <div className="box-delivery__fee-text">
                                                        <div className="box-delivery__fee-label">
                                                            Vận Chuyển Tới
                                                        </div>
                                                        <div className="box-delivery__fee-place">
                                                            Phường Hoà Hải, Đà Nẵng
                                                        <i className="fas fa-chevron-down" />
                                                        </div>
                                                    </div>
                                                    <div className="box-delivery__fee-text">
                                                        <div className="box-delivery__fee-label">
                                                            Phí vận chuyển
                                                        </div>
                                                        <div className="box-delivery__fee-place2">
                                                            15.000đ - 30.000đ
                                                            <i className="fas fa-chevron-down" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="information-quantity">
                                    <div className="information-quantity__label">Số Lượng</div>
                                    <div className="information-quantity__box">
                                        <div className="quantity__box-button">
                                            <button className="quantity__box-button--sub">-</button>
                                            <button className="quantity__box-button--label">1</button>
                                            <button className="quantity__box-button--add">+</button>
                                        </div>
                                        <div className="quantity__box-text">
                                            <div className="quantity__box-text--number">185</div>
                                            <div className="quantity__box-text--label">sản phẩm có sẵn</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="information-button">
                                    <div className="btn btn--highlight information-button__btn ">
                                        <div className="information-button__icon">
                                            <i className="fas fa-cart-plus" />
                                        </div>
                                        <div className="information-button__text">Thêm vào giỏ hàng</div>
                                    </div>
                                    <div className="btn btn--primary information-button__btn">Mua ngay</div>
                                </div>
                                <div className="information-expand">
                                    <div className="grid__row row__information-expand ">
                                        <div className="grid__col-4 ">
                                            <div className="information-expand__box">
                                                <div className="information-expand__box-icon">
                                                    <img src="./asset/img/back.png" width={22} height={22} alt />
                                                </div>
                                                <div className="information-expand__box-text">
                                                    7 ngày miễn phí trả hàng
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__col-4">
                                            <div className="information-expand__box">
                                                <div className="information-expand__box-icon">
                                                    <img src="./asset/img/accept.png" width={22} height={22} alt />
                                                </div>
                                                <div className="information-expand__box-text">
                                                    Hàng chính hãng
                                                    <br /> 100%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__col-4">
                                            <div className="information-expand__box">
                                                <div className="information-expand__box-icon">
                                                    <img src="./asset/img/delivery.png" width={22} height={22} alt />
                                                </div>
                                                <div className="information-expand__box-text">
                                                    Miễn phí vận
                                                    <br /> chuyển
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__row">
                        <div className="row__info-shop">
                            <div className="grid__col-5">
                                <div className="info-shop__box">
                                    <div className="info-shop__avatar">
                                        <img src="https://cf.shopee.vn/file/2f45f9f4737c19a7cb96c4c9ddaf995b_tn" width={80} height={85} alt />
                                    </div>
                                    <div className="info-shop__frame">
                                        <div className="info-shop__name">happy_live_company</div>
                                        <div className="info-shop__status">
                                            Online 3 Giờ trước
                                        </div>
                                        <div className="info-shop__button">
                                            <div className="btn btn--highlight info-shop__button--btn ">
                                                <div className="info-shop__button-icon">
                                                    <i className="fas fa-comment-alt" />
                                                </div>
                                                <div className="info-shop__button-text">Chat Ngay</div>
                                            </div>
                                            <div className="btn btn--normal-highlight info-shop__button--btn">
                                                <div className="info-shop__button-icon">
                                                    <i className="fas fa-store-alt" />
                                                </div>
                                                <div className="info-shop__button-text">Xem shop</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__col-7">
                                <div className="info-shop__box-2">
                                    <div className="frame1">
                                        <div className="info info1">
                                            <div className="info-text">
                                                Đánh Giá
                                            </div>
                                            <div className="info-number">
                                                1,8k
                                            </div>
                                        </div>
                                        <div className="info info2">
                                            <div className="info-text">
                                                Sản Phẩm
                                            </div>
                                            <div className="info-number">
                                                38
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame2">
                                        <div className="info info1">
                                            <div className="info-text">
                                                Tỉ Lệ Phản Hồi
                                            </div>
                                            <div className="info-number">
                                                98%
                                            </div>
                                        </div>
                                        <div className="info info2">
                                            <div className="info-text">
                                                Thời Gian Phản Hồi
                                            </div>
                                            <div className="info-number">
                                                Trong vài giờ
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame3">
                                        <div className="info info1">
                                            <div className="info-text">
                                                Tham Gia
                                            </div>
                                            <div className="info-number">
                                                21 tháng trước
                                            </div>
                                        </div>
                                        <div className="info info2">
                                            <div className="info-text">
                                                Người Theo Dõi
                                            </div>
                                            <div className="info-number">
                                                1,4k
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__row">
                        <div className="page-product__content--left">
                            <div className="page-product">
                                <div className="product-detail">
                                    <div className="product-detail-title">
                                        CHI TIẾT SẢN PHẨM
                                    </div>
                                    <div className="product-detail-content">
                                        <div className="detail">
                                            <div className="title">
                                                Danh Mục
                                            </div>
                                            <div className="value">
                                                Shopee &gt; Nhà Sách Online &gt; Sách Tiéng Việt &gt; Sách Kĩ Năng Sống
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">
                                                Nhà xuất bản
                                            </div>
                                            <div className="value">
                                                NXB Thế Giới
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">
                                                Công ty phát hành
                                            </div>
                                            <div className="value">
                                                Happy Live
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">
                                                Kho Hàng
                                            </div>
                                            <div className="value">
                                                184
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div className="title">
                                                Gửi từ
                                            </div>
                                            <div className="value">
                                                Quận 7, TP. Hồ Chí Minh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-descript">
                                    <div className="descript-title">MÔ TẢ SẢN PHẨM</div>
                                    <div className="descript-content">- Tên tác giả: Thái Phạm<br />
              - Số trang: 280 <br />
              - Năm phát hành: 2020<br />
              - Nhà xuất bản: Nhà xuất bản Thế Giới<br />
                                        <br />
              THIẾT KẾ CUỘC ĐỜI THỊNH VƯỢNG – HƯỚNG DẪN CHI TIẾT CÁCH XÂY DỰNG CUỘC ĐỜI ĐÁNG MƠ ƯỚC CỦA BẠN<br />
              Có thể nói, đây vừa là một quyển tự truyện đi kèm với những bí quyết tạo nên một cuộc đời đáng sống trong suốt 20 năm “lăn lộn” trường đời của tác giả.<br />
              Quyển sách không "ru ngủ" bạn với những công thức thay đổi bản thân thần thánh mà tập trung vào giải quyết những vấn đề của bạn bằng cách đưa ra các phương pháp đánh giá, nhìn nhận bản thân và cung cấp cho bạn những “vật tư” xây nên một cuộc đời bạn mong muốn. <br /><br />
              Bởi trước khi xây trên nền đất mới những công trình kiên cố, bạn phải đập bỏ những suy nghĩ cũ rích – những thứ vẫn đang giữ chân bạn với sự tầm thường. Bạn không thể xây nên một ngôi nhà đẹp và vững chắc từ một nền nhà kém chất lượng. Những viên gạch kém chất lượng mà bạn cần đập bỏ là những thành kiến về người giàu, những suy nghĩ sai lệch về thành công như chỉ có học đại học là con đường duy nhất để đạt được mục tiêu, ai thành công cũng đều hạnh phúc, theo đuổi đam mê, tiền sẽ tới,… Những điều nghe có vẻ hay, có vẻ ổn nhưng hệ quả của những suy nghĩ đó với cuộc sống của bạn không ổn chút nào. <br /><br />
              Người thông minh là người học được nhiều từ sai lầm của mình, còn người thông thái là người học được nhiều bài học từ thành công và thất bại của người khác. – Thái Phạm –<br />
              Chẳng ai muốn đánh đổi một khoảng đời tuổi trẻ cho những việc làm vô nghĩa và cũng không ai muốn dành thời gian đó để học từ những sai lầm mà đáng ra, nếu sở hữu được những nguồn tri thức vô giá, quen biết người từng trải chúng ta sẽ dễ dàng tránh được những sai lầm đó (và học được những bài học “cao cấp hơn” chẳng hạn).<br /><br />
              Bạn thích làm người thông minh hay là người thông thái? Nếu là người thông thái, “cẩm nang” Thiết kế cuộc đời thịnh vượng có thể giúp bạn:<br />
              =&gt; Nhận ra những quan điểm sai lầm trong quá khứ<br />
              =&gt; Tạo nên một hệ nhận thức mới, tìm kiếm lại đam mê và mục đích cuộc đời bạn<br />
              =&gt; Xây dựng tầm nhìn cuộc sống và thiết kế một bản vẽ cho tương lai gần<br />
              =&gt; Nâng cao năng suất lao động thông qua rèn luyện khả năng “siêu tập trung”, quản lý thời gian, xác định vòng tròn quan tâm, vòng tròn ảnh hưởng trong công việc<br />
              =&gt; Xây dựng những mối quan hệ chất lượng bằng cách: nắm bắt nhu cầu của của người bạn quan tâm, những dạng ngôn ngữ khiến không ai có thể từ chối giao tiếp với bạn, công thức “siêu kết nối” 5 – 50 – 100 giúp định hướng đâu là trọng tâm trong tất cả mối quan hệ của bạn<br />
              =&gt; Học cách quản lý tài chính cá nhân: tự do tài chính là gì, bao nhiêu năm nữa bạn mới được tự do tài chính và nên chi tiêu thế nào để biến ước mơ mua đồ không nhìn giá, nghỉ làm nhưng vẫn kiếm ra tiền thành hiện thực,…? Tất cả sẽ được giải quyết trong chương cuối cùng của quyển sách này. </div>
                                </div>
                            </div>
                            <div className="page-comment">
                            </div>
                        </div>
                        <div className="page-product__content--right">
                            <div className="product-hot-sale">
                                <div className="product-hot-sale__header">Top Sản Phẩm Bán Chạy</div>
                                <a className="product-hot-sale-item" href="#">
                                    <div className="card-item-special">
                                        <div className="card-item-special__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/22a25d5e5e04fcdcc426c0eacee62518_tn)' }}>
                                        </div>
                                        <div className="card-item-special__info">
                                            <div className="card-item-special__info-name">
                                                Bộ sách Làm Giàu Từ Chứng Khoán phiên bản mới Hướng Dẫn Thực Hành CANSLIM Cho Người Mới Bắt Đầu
                                            </div>
                                            <div className="card-item-special__info-price">
                                                <div className="info-price__label">đ</div>
                                                <div className="info-price__text">700.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="product-hot-sale-item" href="#">
                                    <div className="card-item-special">
                                        <div className="card-item-special__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/7fda557bbfeb3fcb0a1bfae54358c7bb_tn)' }}>
                                        </div>
                                        <div className="card-item-special__info">
                                            <div className="card-item-special__info-name">
                                                Sách - Linh Hồn Của Tiền - The Soul Of Money
                                            </div>
                                            <div className="card-item-special__info-price">
                                                <div className="info-price__label">đ</div>
                                                <div className="info-price__text">249.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="product-hot-sale-item" href="#">
                                    <div className="card-item-special">
                                        <div className="card-item-special__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/d9fbebaa681e6ac1b27131685c1442d3_tn)' }}>
                                        </div>
                                        <div className="card-item-special__info">
                                            <div className="card-item-special__info-name">
                                                Sách - Hệ thống giao dịch Ichimoku Charts - Ichimoku Kinko Clouds (Phiên bản mới)
                                            </div>
                                            <div className="card-item-special__info-price">
                                                <div className="info-price__label">đ</div>
                                                <div className="info-price__text">330.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="product-hot-sale-item" href="#">
                                    <div className="card-item-special">
                                        <div className="card-item-special__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/d15cd4850939dbf480718857bd0dcc1e)' }}>
                                        </div>
                                        <div className="card-item-special__info">
                                            <div className="card-item-special__info-name">
                                                Sách - Payback Time – Ngày đòi nợ
                                            </div>
                                            <div className="card-item-special__info-price">
                                                <div className="info-price__label">đ</div>
                                                <div className="info-price__text">299.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="product-hot-sale-item" href="#">
                                    <div className="card-item-special">
                                        <div className="card-item-special__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/c2308afe379c199022a64f586edbd4ea)' }}>
                                        </div>
                                        <div className="card-item-special__info">
                                            <div className="card-item-special__info-name">
                                                Sách - Marketing giỏi phải kiếm được tiền - The end of marketing as we know it
                                            </div>
                                            <div className="card-item-special__info-price">
                                                <div className="info-price__label">đ</div>
                                                <div className="info-price__text">350.000</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DetailContent;