import React, { useEffect, useState } from "react"
import Form from './Form'
import Form2 from './Form2'
import { Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';

function App(props) {

  const [vData, setData] = useState('')
  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const [formNum, setForm] = useState('')
function freshForm () {


}
    
// useEffect(() => {
//   let search = `description_text=${kind}`;

// axios
//   .post('//50.62.56.186:8000/find', search, {
//      headers: {
//      'Content-Type': 'application/x-www-form-urlencoded',
//      Accept: 'text/html; charset=utf-8'
//    }
//  })
//  .then(res => {
//    let arrayified = [];
   
//    for (let key in res.data) {
//        arrayified.push(res.data[key]);
//    }
//    console.log(`Response for the query '${kind}' was:`, arrayified);

//    setData(arrayified);
//  })
//  .catch(err => console.log('There was an error:',kind, err));
// }, [kind]);

// let vData = [{name: '', zip: '', contact: '', info: ''}]
let volData = []
volData[0]=              {
    "name": "Feed the Children, Inc.",
    "description": "One of America's most effective charities providing food, clothing, medical care, education, and emergency relief to children in the United States and overseas since 1979.",
    "website": "http://www.feedthechildren.org",
    "address": "333 N. Meridian Ave",
    "city": "Oklahoma City",
    "zip code": "21202"
  }
  
   
  volData[1]={
    "name": "Rude Ranch Animal Rescue",
    "description": "A no-kill organization dedicated to providing refuge to abandoned, abused and homeless dogs and cats until they are placed in permanent homes.",
    "website": "http://www.ruderanch.org",
    "address": "3200 Ivy Way",
    "city": "Harwood",
    "zip code": "21202"
  }
  


  volData[2]=          {
    "name": "Maryland Zoo in Baltimore (The)",
    "description": "Educational programs and naturalistic exhibits provide visitors with educational recreation activities and further understanding of the urgent need to conserve and protect wildlife and wetlands.",
    "website": "http://www.marylandzoo.org",
    "address": "1876 Mansion House Drive, Druid Hill Park",
    "city": "Baltimore",
    "zip code": "21202"
  }
  


  volData[3]=  {
    "name": "Christopher Reeve Foundation",
    "description": "The Reeve Foundation is dedicated to curing spinal cord injury by funding innovative research and improving the quality of life for people living with paralysis.",
    "website": "http://www.christopherreeve.org",
    "address": "636 Morris Turnpike, Suite 3A",
    "city": "Short Hills",
    "zip code": "21202"
  }
  

  volData[4]=  {
    "name": "Institute of Notre Dame",
    "description": "A college-preparatory school for young women, rooted in the values of the Catholic faith and the educational vision of the School Sisters.",
    "website": "http://www.indofind.org",
    "address": "901 Aisquith Street",
    "city": "Baltimore",
    "zip code": "21202"
  }
// setData(volData)
// console.log('volData is',volData)
    return (

    <div className="App">
            <Route
  path='/form'
  render={(props) => <Form2 {...props}  formNum={formNum} setForm={setForm} kind={kind} setKind={setKind} zip={zip} setZip={setZip} vData={vData} setData={setData} isAuthed={true} />}
/>

      <header className="App-header">
      </header>
      <div className="App-header">
    <Form {...props} formNum={formNum} setForm={setForm} kind={kind} setKind={setKind} zip={zip} setZip={setZip} vData={vData} setData={setData} />

  </div>
    </div>

);
}

export default App;