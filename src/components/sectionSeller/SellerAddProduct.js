import axios from 'axios';
import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {postApi} from '../utils/apiCaller'
function SellerAddProduct(props) {
    const [price,setPrice] = useState(0);
    const [quantities,setQuantities] = useState(0);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');   
    const [category,setCategory] = useState('');
    const [author,setAuthor] = useState('');
    const [language,setLanguage] = useState('');
    const [publishingyear,setPublishingyear] = useState('');
    const [publishingcompany,setPublishingcompany] = useState('');
    const [pagenumber,setPagenumber] = useState(0);
    const [weight,setWeight] = useState(0);
    const [file, setFile] = useState('');
    
    const navigate = useNavigate()
    return (



        <div className="grid1">
            <form className="container-info" method="POST" encType="multipart/form-data" action="/books/store">
                <div className="grid__row d-flex justify-content-center">
                    <div className="info-label ">
                        Thông tin cơ bản
                    </div>
                </div>
                <div className="grid__row row-info">
                    <div className="info-product info-product-name">
                        <div className="grid__col-2 ">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text" >Tên sản phẩm</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" className="product-value-input" id="name" name="name" 
                                    value = {name}
                                    onChange = {e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-descript">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Mô tả sản phẩm</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value-2">
                                <textarea   cols={30} rows={14} 
                                            maxLength={3000} style={{ width: '100%' }} 
                                            id="description" name="description"
                                            value = {description}
                                            onChange = {e => setDescription(e.target.value)}
                                            />
                            </div>
                        </div>
                    </div>
                    {/* <div className="info-product info-product-category">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Danh mục</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" id="category" 
                                    name="category" className="product-value-input" 
                                    value = {category}
                                    onChange = {e => setCategory(e.target.value)}
                                    />
                            </div>
                        </div>
                    </div> */}
                    <div className="info-product info-product-category">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Danh mục</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <select class="custom-select" required
                                        style = {
                                            {
                                                height : '40px ',
                                                width : '80%'
                                            }
                                        }
                                        onChange = {(e) => {
                                            setCategory(e.target.value)
                                        }}
                                >
                                    <option value="">Choose...</option>
                                    <option value="VĂN HỌC">Văn Học</option>
                                    <option value="KINH TẾ">Kinh Tế</option>
                                    <option value="TÂM LÝ">Tâm lý - Kĩ Năng Sống</option>
                                    <option value="SÁCH THIẾU NHI">Sách Thiếu Nhi</option>
                                    <option value="TIỂU SỬ">Tiểu Sử - Hồi Kí</option>
                                    <option value="NGOẠI NGỮ">Ngoại Ngữ</option>
                                    <option value="GIÁO KHOA">Sách Giáo Khoa</option>
                                    <option value="TRINH THÁM">Trinh Thám</option>
                                    <option value="TRUYỆN TRANH">Truyện Tranh</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-author">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Tác giả</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" className="product-value-input" 
                                    id="author" name="author" 
                                    value = {author}
                                    onChange = {e => setAuthor(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-year-publish">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div  />
                                <div className="product-title-text">Năm xuất bản</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" id="yearPublish" 
                                    name="yearPublish" className="product-value-input" 
                                    value = {publishingyear}
                                    onChange = {e => setPublishingyear(e.target.value)}              
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-year-publish">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div  />
                                <div className="product-title-text">Nhà xuất bản</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" id="NXB" name="NXB"
                                    className="product-value-input" 
                                    value = {publishingcompany}
                                    onChange = {e => setPublishingcompany(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-year-publish">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Ngôn ngữ</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="text" id="languages" name="languages"
                                     className="product-value-input" 
                                     value = {language}
                                    onChange = {e => setLanguage(e.target.value)}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-quantity-page">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div  />
                                <div className="product-title-text">Số trang</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="number" id="pages" name="pages" 
                                    className="product-value-input" 
                                    value = {pagenumber}
                                    onChange = {e => setPagenumber(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-quantity-page">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div  />
                                <div className="product-title-text">Trọng lượng (gr)</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="number" id="weight" name="weight" 
                                    className="product-value-input" 
                                    value = {weight}
                                    onChange = {e => setWeight(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-price">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Giá</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="number" className="product-value-input" 
                                    id="price" name="price" 
                                    value = {price}
                                    onChange = {e => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product info-product-warehouse">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Số lượng hàng trong kho</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="number" className="product-value-input" 
                                    id="quantities" name="quantities" 
                                    value = {quantities}
                                    onChange = {e => setQuantities(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="info-product info-product-classifycation">
                        <div className="grid__col-2">
                            <div className="product-title">
                                <div className>*</div>
                                <div className="product-title-text">Hình ảnh</div>
                            </div>
                        </div>
                        <div className="grid__col-10">
                            <div className="product-value">
                                <input 
                                    type="file" 
                                    className="form-control-file" id="image" name="image" 
                                    onChange = {(e) => {
                                        setFile(e.target.files[0]);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="info-product d-flex justify-content-center">
                        <button 
                            type="button" 
                            className="btn1 btn--primary"
                            onClick = {() => onHandleSubmit()}
                        >Submit</button>
                    </div>
                </div>
            </form>
        </div>

    );
    function onHandleSubmit(){

        /* const data1 = {
            name,
            description,
            category,
            author,
            yearPublish : publishingyear,
            languages : language,
            NXB : publishingcompany,
            warehouse: '' ,
            pages : parseInt(pagenumber),
            weight : parseInt(weight),
            image: '',
            price: parseInt(price),
            quantities: parseInt(quantities),
        }
       
      
        
        async function posttt(){
            await axios.post('http://localhost:3001/api/books/store',data1,{withCredentials : true}).then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert(res.data.message)
                    navigate('/seller/info/manageproduct/all')
                }
            }).catch(err => {
                console.log(err)
            })
        }

        posttt() */
        
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('yearPublish', publishingyear);
        formData.append('languages', language);
        formData.append('NXB', publishingcompany);
        formData.append('warehouse', '');
        formData.append('pages',parseInt(pagenumber));
        formData.append('weight',parseInt(weight));
        formData.append('price',parseInt(price));
        formData.append('quantities',parseInt(quantities));

        async function posttt(){
            await axios.post('http://localhost:3001/api/books/store',formData,{
                withCredentials : true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert(res.data.message)
                    navigate('/seller/info/manageproduct/all')
                }
                
            }).catch(err => {
                console.log(err)
            })
        }

        posttt()


    }
}

export default SellerAddProduct;