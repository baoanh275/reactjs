import React, { Component } from 'react';
import CartItem from './CartItem'

class CartContent extends Component {
    render() {
        return (
        <div className="app">    
            <div className="grid">
                <div className="container-cart">
                    <div className="first-box">
                        <div className="first-box-icon">
                            <svg height={12} viewBox="0 0 20 12" width={20} className="shopee-svg-icon _2Ns6ZJ icon-free-shipping"><g fill="none" fillRule="evenodd" transform><rect fill="#00bfa5" fillRule="evenodd" height={9} rx={1} width={12} x={4} /><rect height={8} rx={1} stroke="#00bfa5" width={11} x="4.5" y=".5" /><rect fill="#00bfa5" fillRule="evenodd" height={7} rx={1} width={7} x={13} y={2} /><rect height={6} rx={1} stroke="#00bfa5" width={6} x="13.5" y="2.5" /><circle cx={8} cy={10} fill="#00bfa5" r={2} /><circle cx={15} cy={10} fill="#00bfa5" r={2} /><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff" /><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5" /><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5" /><circle cx={8} cy={10} fill="#047565" r={1} /><circle cx={15} cy={10} fill="#047565" r={1} /></g></svg>
                        </div>
                        <div className="first-box-text">Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
                    </div>
                    <div className="cart-page-product-header">
                        <div className="cart-item__cell-checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="cart-page-product-header__product">
                            Sản Phẩm
                        </div>
                        <div className="cart-page-product-header__unit-price">
                            Đơn Giá
                        </div>
                        <div className="cart-page-product-header__quantity">
                            Số Lượng
                        </div>
                        <div className="cart-page-product-header__total-price">
                            Số Tiền
                        </div>
                        <div className="cart-page-product-header__action">Thao Tác</div>
                    </div>
                    <div className="cart-page-product-section">
                        <div className="cart-page-product-section__header">
                            <div className="cart-page-product-section__header-checkbox"><input type="checkbox" /></div>
                            <div className="cart-page-product-section__header-icon" style={{ backgroundColor: 'var(--primary-color)', width: 24, height: 16 }}>
                                <svg viewBox="0 0 24 11"><g fill="#fff" fillRule="evenodd"><path d="M19.615 7.143V1.805a.805.805 0 0 0-1.611 0v5.377H18c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746a.748.748 0 0 0-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zm3 0V1.805a.805.805 0 0 0-1.611 0v5.377H21c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746a.748.748 0 0 0-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zm-7.491-2.985c.01-.366.37-.726.813-.726.45 0 .814.37.814.742v5.058c0 .37-.364.73-.813.73-.395 0-.725-.278-.798-.598a3.166 3.166 0 0 1-1.964.68c-1.77 0-3.268-1.456-3.268-3.254 0-1.797 1.497-3.328 3.268-3.328a3.1 3.1 0 0 1 1.948.696zm-.146 2.594a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 1 0 3.6 0z" /><path d="M.078 1.563A.733.733 0 0 1 .565.89c.423-.15.832.16 1.008.52.512 1.056 1.57 1.88 2.99 1.9s2.158-.85 2.71-1.882c.19-.356.626-.74 1.13-.537.342.138.477.4.472.65a.68.68 0 0 1 .004.08v7.63a.75.75 0 0 1-1.5 0V3.67c-.763.72-1.677 1.18-2.842 1.16a4.856 4.856 0 0 1-2.965-1.096V9.25a.75.75 0 0 1-1.5 0V1.648c0-.03.002-.057.005-.085z" fillRule="nonzero" /></g></svg>
                            </div>
                            {/* Lấy tên shop */}
                            <div className="cart-page-product-section__header-name">Happy.Live_Company</div>
                            <div className="cart-page-product-section__header-icon" style={{ position: 'relative', top: 5 }}>
                                <svg viewBox="0 0 16 16" fill="var(--primary-color)" style={{ width: 16, height: '15.5px' }} className><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" /></g></svg>
                            </div>
                        </div>
                        {/* Them san pham vao gio hang thi them the <CartItem/> */}
                       
                       <CartItem/>
                       <CartItem/>
                       <CartItem/>


                        <div className="cart-page-product-section__buy">
                            <div className="total-buy-label">Tổng số tiền:</div>
                            <div className style={{ width: '15%', display: 'flex', alignItems: 'center', padding: '0 20px', color: 'var(--primary-color)', fontSize: '2.2rem', fontWeight: 400 }}>
                                <div className style={{ paddingRight: 2, textDecoration: 'underline' }}>
                                    đ
                                </div>
                                {/* Tính tổng số tiền xong thay ở đây */}
                                <div className="buy-total-quantity">299.000</div>
                            </div>
                            <button className="btn btn--primary btn-buy">Mua Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CartContent;