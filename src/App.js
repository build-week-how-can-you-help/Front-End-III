import React, { useEffect, useState } from "react"
import axios from 'axios'
import Form from './Form'
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [volData1, setData1] = useState('')
  const [volData2, setData2] = useState('')
  const [volData3, setData3] = useState('')
  const [volData4, setData4] = useState('')
  const [volData5, setData5] = useState('')
  const [volData6, setData6] = useState('')
  const [volData7, setData7] = useState('')
  const [volData8, setData8] = useState('')
  const [volData9, setData9] = useState('')

  const [volData, setData] = useState('')

  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const ul = {
    display: 'none',
    float: 'left', 
  }
  
  function g(page) {
    return axios.get('https://swapi.co/api/people/?page=' + page)
  }
  
  useEffect(() => {
    axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9)])
      .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9)
      {
        setData1(data1.data.results) 
        setData2(data2.data.results) 
        setData3(data3.data.results) 
        setData4(data4.data.results) 
        setData5(data5.data.results) 
        setData6(data6.data.results) 
        setData7(data7.data.results) 
        setData8(data8.data.results) 
        setData9(data9.data.results) 
        setData(data1.data.results) 
        console.log('vol data is', volData1)
     }
  ))
    .catch (data => { 
      console.log('data error 1',data)
            }
             )
            }, []);
            console.log('vol data1 is', volData1)
let vData = [{name: '', zip: ''}]

for (let i=0;i<volData.length;i++)
{
  vData[i] = {name: volData[i]['name'], zip: volData[i]['birth_year']}
}
console.log('vdata is',vData)

            let darr = [volData1,volData2,volData3,volData4,volData5,volData6,volData7,volData8,volData9]
            let data=[];
            let n=0

            for (let j=0;j<darr.length;j++)            
{
  for (let i=0;i<darr[j].length;i++)
{
  data[n] = ((n + 3) / 3 ) + ' ' + darr[j][i].name;
  n=n+1
  data[n] = darr[j][i].birth_year;
  n=n+1
  data[n] = darr[j][i].url;
  n=n+1
}
}
console.log('data length is',data.length)
    return (
    <div className="App">
            <Route
  path='/form'
  render={(props) => <Form {...props}  kind={kind} setKind={setKind} zip={zip} setZip={setZip} newKind='' newZip='' isAuthed={true} />}
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
    <Form kind={kind} setKind={setKind} zip={zip} setZip={setZip} newKind={kind} newZip={zip}/>
    <ol start='0' style={ul}>
      {[1,2,3].map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ol>
{/* <br></br> */}
<ul style={ul}>
{[1,2,3].map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ul>
{/* <br></br> */}

<ul style={ul}>
{[1,2,3].map(item => (
            <li key={item} className="movie-star">
              {item}
            </li>
          ))} 
</ul>

<ul style={ul}>
{[1,2,3].map((item,ix) => (
            <li key={ix} className="movie-star">
              {ix}
            </li>
          ))} 
</ul>

<ul style={ul}>
{[1,2,3].map(item => (
            <li key={'<-click toedit'} className="movie-star">
              {'<--click id number to edit team member information'}
            </li>
          ))} 
</ul>
  </div>
    </div>

);
}

export default App;