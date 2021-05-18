
import React, { useContext,useState,useEffect } from 'react';
import {DataContext} from './../DataProvider';

export default function CartResult() {

    const value = useContext(DataContext);
    const [cart,setCart] = value.cart;
    const [total,setTotal] = useState(0);
    
    useEffect(()=>{
        const getTotal = () => {
            const res = cart.reduce((prev,item) => {
                return prev + (item.price * item.quantity)
            },0)
            setTotal(res);
        }
        getTotal();
    },[cart])

   return (
        <div className="cart-page-product-section__buy">
            <div className="total-buy-label">Tổng số tiền:</div>
            <div className style={{ width: '15%', display: 'flex', alignItems: 'center', padding: '0 20px', color: 'var(--primary-color)', fontSize: '2.2rem', fontWeight: 400 }}>
                <div className style={{ paddingRight: 2, textDecoration: 'underline' }}>
                    $
                            </div>
                {/* Tính tổng số tiền xong thay ở đây */}
                <div className="buy-total-quantity">{total}</div>
            </div>
            <button className="btn1 btn--primary btn-buy">Mua Hàng</button>
        </div>
    );


}

