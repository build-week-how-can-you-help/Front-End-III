import React from 'react';
import useForm from "./useForm";
import {GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./bg.png";
import Show from "./Show";
import './Form.css';


// const techCompanies = [
//   "Apple", "Facebook","Netflix", "Tesla","Amazon","Alphabet"
// ];

const inputStyle = {
width: '40%',
marginLeft: '10%',
minWidth: '200px', 
}

const imgStyle = {
  width: '50%',
  minWidth: '200px',
  position: 'absolute',
  top: '0%',
  left: '25%'
}
const labelStyle1 = {
  marginLeft: '10%',
}
const labelStyle2 = {
  display: 'none'
}
const buttonStyle1 = {
  position: 'relative'
}
const buttonStyle2 = {
  position: 'absolute',
  top: '0%',
  left: '95%'

}

const Form = (props) => {
    const { values, handleChange, handleSubmit } = useForm(getData);
    props.setKind(props.newKind)
    props.setZip(props.newZip)
    function getData(kind) {
    props.setKind(kind.trim())
    
}
    return (
      <div >
        <img alt='' src={hdImage} style={(props.kind) ? {"display" : "none"} : imgStyle }/>
{/* <div>Entered keys: {props.kind !== '' ? '<' + props.kind + '>': 'none'}</div> */}
    <GridView className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
  
          <form onSubmit={handleSubmit} className='back-img' id='how'
 >
<Bir  style={(props.kind) ? {"top" : "0%"} : {"top" : "v0%"} }>            
<div className="field">
          <label style={(props.kind) ? labelStyle2 : labelStyle1 } className="label" >What kind of Non-Profit are You Looking For?</label>
                <div className="control">
                <Input list="cityname" placeholder='What are you looking for?' style={{"marginLeft" : "10%"}} className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind} required />
                {/* <Select options={ techCompanies } /> */}

                </div>
              </div>
              <div className="field">
          <label style={(props.kind) ? labelStyle2 : labelStyle1 } className="label" >Zip Code</label>
                <div className="control">
                <Input style={inputStyle} placeholder='Enter zip code' style={{"marginLeft" : "10%"}} className="input" size='5' type="number" min='20588' max='21930' name="zip" onChange={handleChange} value={values.zip} required />
                {/* <Select options={ techCompanies } /> */}
                </div>
              </div>
              <Button style={(props.kind) ? buttonStyle2 : buttonStyle1 } type="submit" className="button is-block is-info is-fullwidth">{(props.kind) ? 'New Search' : 'Find Non-Profit'}</Button>
              <Show kind={props.kind} vData={props.vData} ></Show>

</Bir>
            </form>
          </div>
        </div>
      </div>
    </GridView>
    </div>
  );
};

export default Form;