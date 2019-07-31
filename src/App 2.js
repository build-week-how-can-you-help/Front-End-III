import React, { useState } from "react"
import Form from './Form'

function App() {
  const [kind, setKind] = useState([])

const ul = {
  float: 'left', 
}
const li = {
  display: 'inline',
  width: '400px'
}

  return (
    <div className="App-header">
      <Form kind={kind} setKind={setKind} />

    </div>
  )
}
export default App
