import React, { useEffect, useState } from "react"
import axios from 'axios'
import Form from './Form'
import Form2 from './Form2'
// import voldata from './volData.txt'
import useCallData from './useCallData'
import { Route } from 'react-router-dom';
// import Select from 'react-select';

// import logo from './logo.svg';
import './App.css';

function App() {
  // const [volData1, setData1] = useState('')
  // const [volData2, setData2] = useState('')
  // const [volData3, setData3] = useState('')
  // const [volData4, setData4] = useState('')
  // const [volData5, setData5] = useState('')
  // const [volData6, setData6] = useState('')
  // const [volData7, setData7] = useState('')
  // const [volData8, setData8] = useState('')
  // const [volData9, setData9] = useState('')

  const [volData, setData] = useState('')
  const [volNext, setNext] = useState(0)


  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const [kindp, setKindp] = useState('')
  const [zipp, setZipp] = useState('')
  // useCallData(setData,volData)
  // const ul = {
  //   display: 'none',
  //   float: 'left', 
  // }
  
  // function g(page) {
  //   return axios.get('https://swapi.co/api/people/?page=' + page)
  // }
  //     fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY').then(response => response.json()).then(data1 => { console.log(data1)

  // useEffect(() => {
    // axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9)])
    // axios.all([g(1)])
      // .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9)
      // .then(axios.spread(function (data1)
      // {
        // setData1(data1.data.results) 
        // setData2(data2.data.results) 
        // setData3(data3.data.results) 
        // setData4(data4.data.results) 
        // setData5(data5.data.results) 
        // setData6(data6.data.results) 
        // setData7(data7.data.results) 
        // setData8(data8.data.results) 
        // setData9(data9.data.results) 
        // setData(data1.data.results) 
          // console.log('vol data is', volData1)
  //    }
  // ))
  //   .catch (data => { 
  //     console.log('data error 1',data)
  //           }
  //            )
  //           }, []);
            console.log('vol data1 is', volData)
            let vData1 = [{name: '', zip: '', contact: '', info: ''}]
            let vData = [{name: '', zip: '', contact: '', info: ''}]
            let voldata = []
vData[0]=              {
                "name": "Feed the Children, Inc.",
                "description": "One of America's most effective charities providing food, clothing, medical care, education, and emergency relief to children in the United States and overseas since 1979.",
                "website": "http://www.feedthechildren.org",
                "address": "333 N. Meridian Ave",
                "city": "Oklahoma City",
                "zip code": "21202"
              }
              
               
              vData[1]={
                "name": "Rude Ranch Animal Rescue",
                "description": "A no-kill organization dedicated to providing refuge to abandoned, abused and homeless dogs and cats until they are placed in permanent homes.",
                "website": "http://www.ruderanch.org",
                "address": "3200 Ivy Way",
                "city": "Harwood",
                "zip code": "21202"
              }
              
    

              vData[2]=          {
                "name": "Maryland Zoo in Baltimore (The)",
                "description": "Educational programs and naturalistic exhibits provide visitors with educational recreation activities and further understanding of the urgent need to conserve and protect wildlife and wetlands.",
                "website": "http://www.marylandzoo.org",
                "address": "1876 Mansion House Drive, Druid Hill Park",
                "city": "Baltimore",
                "zip code": "21202"
              }
              
            

              vData[3]=  {
                "name": "Christopher Reeve Foundation",
                "description": "The Reeve Foundation is dedicated to curing spinal cord injury by funding innovative research and improving the quality of life for people living with paralysis.",
                "website": "http://www.christopherreeve.org",
                "address": "636 Morris Turnpike, Suite 3A",
                "city": "Short Hills",
                "zip code": "21202"
              }
              

              vData[4]=  {
                "name": "Institute of Notre Dame",
                "description": "A college-preparatory school for young women, rooted in the values of the Catholic faith and the educational vision of the School Sisters.",
                "website": "http://www.indofind.org",
                "address": "901 Aisquith Street",
                "city": "Baltimore",
                "zip code": "21202"
              }
          
            // setData(JSON.voldata)
            console.log('vData is',vData)
            console.log('vData  zero is',vData["0"])
            console.log('vData  zero  address is',vData[0]['address'])
 voldata = vData
            // for (let i=0;i<volData.length;i++)
            for (let i=0;i<5;i++)
{
  console.log('vData  is is',vData[i])
  console.log('vData  name  is',vData[i]['name'])
  console.log('vData  address is',vData[i]['address'])

  // vData[i] = {name: volData[i]['name'], zip: volData[i]['zip code'], contact: volData[i]['address'] + ' ' + volData[i]['city'] + ' ' + volData[i]['zip code'], info: volData[i]['description']}
  // vData[i] = {name: voldata['"' + i + '"']['name'], zip: voldata['"' + i + '"']['zip code'], contact: voldata['"' + i + '"']['address'] + ' ' + voldata['"' + i + '"']['city'] + ' ' + voldata['"' + i + '"']['zip code'], info: voldata['"' + i + '"']['description']}
}

console.log(' now vdata is',vData)

//             let darr = [volData1,volData2,volData3,volData4,volData5,volData6,volData7,volData8,volData9]
//             let data=[];
//             let n=0

//             for (let j=0;j<darr.length;j++)            
// {
//   for (let i=0;i<darr[j].length;i++)
// {
//   data[n] = ((n + 3) / 3 ) + ' ' + darr[j][i].name;
//   n=n+1
//   data[n] = darr[j][i].birth_year;
//   n=n+1
//   data[n] = darr[j][i].url;
//   n=n+1
// }
// }
// console.log('data length is',data.length)
    return (

    <div className="App">
            <Route
  path='/form'
  render={(props) => <Form2 /*{...props} */ kind={kind} setKind={setKind} zip={zip} setZip={setZip} kindp={kindp} setKindp={setKindp} zipp={zipp} setZipp={setZipp} newKind='' newZip='' vData={vData} volNext={volNext} setNext={setNext} isAuthed={true} />}
/>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="App-header">
    <Form kind={kind} setKind={setKind} zip={zip} setZip={setZip} kindp={kindp} setKindp={setKindp} zipp={zipp} setZipp={setZipp} newKind={kind} newZip={zip} vData={vData} volNext={volNext} setNext={setNext} />

  </div>
    </div>

);
}

export default App;