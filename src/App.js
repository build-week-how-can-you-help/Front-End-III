import React,{useState} from 'react';
import Form from './Form'
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [kind, setKind] = useState('')
  const [zip, setZip] = useState('')
  const ul = {
    display: 'none',
    float: 'left', 
  }
  
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
