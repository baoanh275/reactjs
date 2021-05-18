import React, {createContext, useEffect, useState} from 'react';
import CallApi from './utils/apiCaller'

export const DataContext = createContext();

export default function DataProvider(props) {
    const [products,setProducts] = useState([]);


    const [cart,setCart] = useState([])

    const [userinfo,setUserinfo] = useState({})
    const [payorders,setPayorders] = useState({})

    
    
    const addCart = (id) => {
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            const data = cart.find((product,index) =>{
                if( product._id === id){
                    console.log(index);
                    cart[index].count += 1; 
                    return product._id === id
                }


                
            })
            setCart([...cart])
            console.log(data);
        }
     
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }



    useEffect(() =>{
        async function fetchProductsAPI(){
            const reqURL = 'http://localhost:3001/api/';
            const respone = await fetch(reqURL);
            const responeJSON = await respone.json();
            var res = [];
            for(let i=0;i<responeJSON.length;i++){
                res.push(responeJSON[i].book);
                
            }

            setProducts(res);


        }

        fetchProductsAPI();
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart) setCart(dataCart);

        const userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if (userinfo) setUserinfo(userinfo);
     
        
    },[])

    useEffect(() =>{

        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])

    useEffect(()=>{
        localStorage.setItem('userinfo',JSON.stringify(userinfo))
    },[userinfo])

    var value = {
        products : [products,setProducts],
        cart : [cart,setCart],
        addCart : addCart,
        removeProduct : removeProduct,
        userinfo : [userinfo,setUserinfo],
        payorders : [payorders,setPayorders]

    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}

