

export const isCheckBuyer = () =>{
    const cookies = JSON.parse(localStorage.getItem('buyer'))
    if(cookies !== null)
    {
        console.log(cookies)
        return true;
    }
    else return false;
} 