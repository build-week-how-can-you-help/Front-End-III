import React, { useEffect, useState } from "react"
import axios from 'axios'

function useCallData(setData,volData) {
  // const [volData1, setData1] = useState('')
  // const [volData2, setData2] = useState('')
  // const [volData3, setData3] = useState('')
  // const [volData4, setData4] = useState('')
  // const [volData5, setData5] = useState('')
  // const [volData6, setData6] = useState('')
  // const [volData7, setData7] = useState('')
  // const [volData8, setData8] = useState('')
  // const [volData9, setData9] = useState('')

//   const [volData, setData] = useState('')
//   const [volNext, setNext] = useState(0)

//   const [kind, setKind] = useState('')
//   const [zip, setZip] = useState('')
//   const [kindp, setKindp] = useState('')
//   const [zipp, setZipp] = useState('')
  // const ul = {
  //   display: 'none',
  //   float: 'left', 
  // }  
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
  
  
  let obj = "description_text=stevvcce I am some data";
 //obj = JSON.stringify(obj)
 
  axios
    .get(`//50.62.56.186:8000/find`,obj,{
      headers:{
        // 'Authorization':`Barer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': "text/html; charset=utf-8"
     
      }
    })
  
  
  function g(page) {
    // return axios.get('https://swapi.co/api/people/?page=' + page)
    // return axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
    // "http://localhost:3001/user/5b21a5d7588b40be612798d4"
    // http://50.62.56.186:8000/find 
    // return axios.get('file:///Users/scottrenz/Documents/GitHub/Front-End-III/src/volData.txt')
    return axios.get('http://50.62.56.186:8000/')
  }
  let counter = 0
const [locaList,setLoca] = useState({results: []})
const [times, setTimes] = React.useState(0);

  
  useEffect(() => {
    
    // axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9)])
    // axios.all([g(2)])
      // .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9)
      axios
      .get(`//50.62.56.186:8000/find`,obj,{
        headers:{
          // 'Authorization':`Barer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': "text/html; charset=utf-8"
       
        }
      })
        .then(axios.spread(function (data1)
      
      {
        // console.log('a data is',data1.data['near_earth_objects'])
        console.log('a data is',data1)
        setData(
          setData(data1.data['near_earth_objects']) );
          if (times % 1 === 0) {
            setTimes(counter + 1);
          }
        // setData1(data1.data.results) 
        // setData2(data2.data.results) 
        // setData3(data3.data.results) 
        // setData4(data4.data.results) 
        // setData5(data5.data.results) 
        // setData6(data6.data.results) 
        // setData7(data7.data.results) 
        // setData8(data8.data.results) 
        // setData9(data9.data.results) 
    // if ( data1.data.results.name !== '' || 1 )
// {       setData(data1.data.results) }
          // console.log('vol data is', volData1)
     }
  ))
    .catch (data => { 
      console.log('data error 1',data)
            }
             )
            }, [times,counter]);

}

export default useCallData;