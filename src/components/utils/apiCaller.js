import axios from 'axios';
import * as Config from './../constants/Config'

export  function callApi(endpoint, method = 'GET',body){
    return  axios({
                method: method,
                url: `${Config.API_URL}/${endpoint}`,
                data: body,
               
            })
}

export  function getApi(endpoint){
    return  axios({
                method: 'GET',
                withCredentials: true,
                url: `${Config.API_URL}/${endpoint}`,
            })
}
export  function postApi(endpoint,data){
    return axios.post(`${Config.API_URL}/${endpoint}`,{
                withCredentials: true,
                data : data
            })
}

export  function putApi(endpoint,data){
     
    return axios.put(`${Config.API_URL}/${endpoint}`,{
        data : data
    },{withCredentials: true})
}

export  function deleteApi(endpoint,data){
    return   axios.delete(`${Config.API_URL}/${endpoint}`,{          
                data : data,
                withCredentials: true
            })
}



export function setHeaderDefault(header){
    return axios.defaults.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'userId' : `${header}`
    };
}
