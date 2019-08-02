import React, { useState } from "react"
import Form from './Form'
import Form2 from './Form2'
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {

  const [vData, setData] = useState('')
  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const [formNum, setForm] = useState('')
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