import React from 'react';
import Form4 from "./Form4";

const Form2 = (props) => {

    return (
      <div className="App-header">
    <Form4 {...props} kind={props.kind} setKind={props.setKind} zip={props.zip} setZip={props.setZip} vData={props.vData} setData={props.setData} />

  </div>
      );
};

export default Form2;