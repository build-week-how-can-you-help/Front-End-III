import React from 'react';
import Form from "./Form";

const Form2 = (props) => {
    props.setForm('')

    return (
      <div className="App-header">
    <Form {...props} formNum={props.formNum} setForm={props.setForm} kind={props.kind} setKind={props.setKind} zip={props.zip} setZip={props.setZip} vData={props.vData} setData={props.setData} />

  </div>
      );
};

export default Form2;