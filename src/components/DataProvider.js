import React, {createContext, useEffect, useState} from 'react';
import {getApi} from './utils/apiCaller'

export const DataContext = createContext();

export default function DataProvider(props) {
    const [products,setProducts] = useState([]);
    const [imagePath,setImagePath] = useState([]);


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
            console.log(res)
            setProducts(res);
        
            await getApi('api/books/byte').then( response => {
                var img = response.data;
                
                var c= []
                for(let i=0;i<img.length;i++){
                    c[i] = {
                        productID : res[i]._id,
                        imagePath : img[i]
                    }
                }       
                console.log(c)
                setImagePath(c)
                
               
            }).catch(err => {
                console.log(err)
            })
        }

        fetchProductsAPI();
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart) setCart(dataCart);

        const dataUser = JSON.parse(localStorage.getItem('userinfo'));
        if(dataUser) setUserinfo(dataUser);
 
    },[])

    useEffect(() =>{

        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])

  

    useEffect(()=>{
        localStorage.setItem('userinfo',JSON.stringify(userinfo))
    },[userinfo])

   

    var value = {
        products : [products,setProducts],
        imagePath : [imagePath,setImagePath],
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

