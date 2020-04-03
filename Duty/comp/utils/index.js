import queryString from 'query-string';
const rooturl='https://www.fastmock.site/mock/2b9f6104b63de8a7033f58448670bee2/api';

let myFetch={
    get(url,queryParams){
        url=rooturl+url
        if(queryString){
            url+="?"+queryString.stringify(queryParams);
        }
        return fetch(url)
        .then(res=>res.json())
    },
    post(url,body){
        return fetch(rooturl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                "Content-Type":'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json())
    }
}

export {myFetch};