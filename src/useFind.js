import  { useEffect, useState } from "react"
import axios from 'axios'

 function useFind(setNonProfits,userQuery,myTest) {

  
useEffect(() => {
    let search = `description_text=${userQuery}`;

  axios
    .post('//50.62.56.186:8000/find', search, {
       headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       Accept: 'text/html; charset=utf-8'
     }
   })
   .then(res => {
     let arrayified = [];
     
     for (let key in res.data) {
         arrayified.push(res.data[key]);
     }
     console.log(`Response for the query '${userQuery} {myTest}' was:`, arrayified);

     setNonProfits(arrayified);
   })
   .catch(err => console.log('There was an error:', err));
}, [userQuery]);
 }

export default useFind;