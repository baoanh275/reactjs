import React from 'react';

function CartItem2(props) {
    return (
        <div >
            <div className="cart-page-product-section__header">
    
                <div className="cart-page-product-section__header-icon" style={{ backgroundColor: 'var(--primary-color)', width: 24, height: 16 }}>
                    <svg viewBox="0 0 24 11"><g fill="#fff" fillRule="evenodd"><path d="M19.615 7.143V1.805a.805.805 0 0 0-1.611 0v5.377H18c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746a.748.748 0 0 0-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zm3 0V1.805a.805.805 0 0 0-1.611 0v5.377H21c0 1.438.634 2.36 1.902 2.77V9.95c.09.032.19.05.293.05.444 0 .805-.334.805-.746a.748.748 0 0 0-.498-.69v-.002c-.59-.22-.885-.694-.885-1.42h-.002zm-7.491-2.985c.01-.366.37-.726.813-.726.45 0 .814.37.814.742v5.058c0 .37-.364.73-.813.73-.395 0-.725-.278-.798-.598a3.166 3.166 0 0 1-1.964.68c-1.77 0-3.268-1.456-3.268-3.254 0-1.797 1.497-3.328 3.268-3.328a3.1 3.1 0 0 1 1.948.696zm-.146 2.594a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 1 0 3.6 0z" /><path d="M.078 1.563A.733.733 0 0 1 .565.89c.423-.15.832.16 1.008.52.512 1.056 1.57 1.88 2.99 1.9s2.158-.85 2.71-1.882c.19-.356.626-.74 1.13-.537.342.138.477.4.472.65a.68.68 0 0 1 .004.08v7.63a.75.75 0 0 1-1.5 0V3.67c-.763.72-1.677 1.18-2.842 1.16a4.856 4.856 0 0 1-2.965-1.096V9.25a.75.75 0 0 1-1.5 0V1.648c0-.03.002-.057.005-.085z" fillRule="nonzero" /></g></svg>
                </div>
                    {/* Lấy tên shop */}
                <div className="cart-page-product-section__header-name">Happy Book</div>
                    
                <div className="cart-page-product-section__header-icon" style={{ position: 'relative', top: 5 }}>
                    <svg viewBox="0 0 16 16" fill="var(--primary-color)" style={{ width: 16, height: '15.5px' }} className><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" /></g></svg>
                    
                </div>
            </div>
        
        <table className=" text-center">
            <thead>
            </thead>
                <colgroup>
                    <col width={50} span={1} />
                    <col width={100} span={1} />
                    <col width={500} span={1} />
                    <col width={100} span={1} />
                    <col width={150} span={1} />
                    <col width={150} span={1} />       
                </colgroup>
            <tbody>
            
           
            
            </tbody>
            <tbody>
                <tr className="table-cart">
                    <td className="table-cart" >
                        <input type="checkbox"/>
                    </td>
                    <td className="table-cart">
                        <div className="cart-item-product__img" style={{ backgroundImage: 'url(https://cf.shopee.vn/file/7fda557bbfeb3fcb0a1bfae54358c7bb_tn)' }}/>
                    </td>
                    <td className="table-cart">
                        
                            {/* {product.productname} */}
                            Lịch sử thế giới
                        
                    </td>
                    <td className="table-cart">
                        $50000
                    </td>
                    <td className="table-cart">
                        <div className="quantity__box-button">
                            {/* Lấy số lượng */}
                            <button 
                                className="quantity__box-button--sub"
                                /* onClick = {() => reduction1(product._id)} */
                            >-</button>
                            <div className="quantity__box-button--label">{/* {product.quantity} */}1</div>
                            <button 
                                className="quantity__box-button--add"
                                /* onClick = {() => increase(product._id)} */
                            >+</button>
                        </div>
                    </td>
                    <td className="table-cart">
                        $500000
                    </td>
                    <td className="table-cart text-center   ">
                        <button 
                            className="btn1 btn--highlight cart-item-action"
                        /*  onClick = {() => onHandleDelete(product._id)} */
                        >Xoá</button>
                    </td>
                </tr>
    
                
            </tbody>
    </table>
    </div>
    );
}

export default CartItem2;