import React, { Component } from 'react';
import CartProductItem from './CartProductItem'

class Content extends Component {
    render() {
        return (
            <div className="grid">
                <div className="grid__row app__content">
                    <div className="grid__col-2">
                        <nav className="category">
                            <h3 className="category__heading">
                                <i className="category__heading-icon fas fa-list" />
                                  DANH MỤC
                            </h3>
                            <ul className="category-list">
                                <li className="category-item category-item--active">
                                    <a href="#" className="category-item__link">Văn Học</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Kinh Tế</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Tâm Lý - Kĩ Năng Sống</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Sách Thiếu Nhi</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Tiểu Sử - Hồi Kí</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Sách Học Ngoại Ngữ</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item__link">Sách Giáo Khoa</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="grid__col-10">
                        <div className="home-filter">
                            <span className="home-filter__label">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>
                            <div className="select-input">
                                <span className="select-input__label">Giá</span>
                                <i className="select-input__icon fas fa-angle-down" />
                                <ul className="select-input__list">
                                    <li className="select-input__item">
                                        <a href="#" className="select-input__link">Giá: Thấp đến cao</a>
                                    </li>
                                    <li className="select-input__item">
                                        <a href="#" className="select-input__link">Giá: Cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-current">1</span>
                                      /14
                                </span>
                                <div className="home-filter__page-control">
                                    <a href="#" className="home-filter__page-btn home-filter__page-btn--disable">
                                        <i className="home-filter__page-btn-icon fas fa-angle-left" />
                                    </a>
                                    <a href="#" className="home-filter__page-btn">
                                        <i className="home-filter__page-btn-icon fas fa-angle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="home-product">
                            <div className="grid__row">
                                <div className="grid__col-2-4">
                                    {/* Product Item */}
                                    <CartProductItem/>
                                </div>
                                <div className="grid__col-2-4">
                                    {/* Product Item */}
                                    <CartProductItem/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;