

export const isCheckBuyer = () =>{
    const cookies = JSON.parse(localStorage.getItem('buyer'))
    if(cookies !== null)
    {
       
        return true;
    }
    else return false;
} 

export const isCheckSeller = () =>{
    const cookies = JSON.parse(localStorage.getItem('seller'))
    if(cookies !== null)
    {
       
        return true;
    }
    else return false;
} 