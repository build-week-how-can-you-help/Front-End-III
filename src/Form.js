import React from 'react';
import useForm from "./useForm";
import { Link } from 'react-router-dom'

import {Column,GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./bg.png";
import './Form.css';

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
  
          <form onSubmit={handleSubmit} className='back-img'
 >
<Bir  style={(props.kind) ? {"top" : "0%"} : {"top" : "v0%"} }>            
<div className="field">
          <label style={(props.kind) ? labelStyle2 : labelStyle1 } className="label" >What kind of Non-Profit are You Looking For?</label>
                <div className="control">
                <Input placeholder='What are you looking for?' style={{"marginLeft" : "10%"}} className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind} required />
                </div>
              </div>
              <div className="field">
          <label style={(props.kind) ? labelStyle2 : labelStyle1 } className="label" >Zip Code</label>
                <div className="control">
                <Input placeholder='Enter zip code' style={{"marginLeft" : "10%"}} className="input" size='5' type="text" name="zip" onChange={handleChange} value={values.zip} required />
                </div>
              </div>
              <Button style={(props.kind) ? buttonStyle2 : buttonStyle1 } type="submit" className="button is-block is-info is-fullwidth">{(props.kind) ? 'New Search' : 'Find Non-Profit'}</Button>
</Bir>

            </form>
<div className='myClass'>            
 <span className='span1'>
            <h3>Who We Are</h3>
<Column>
            <div>Neque porro quisquam est qui</div>
            <div>dolorem ipsum quia dolor sit</div>
            <div> amet, consectetur, adipisci velit</div>
            <div>Neque porro quisquam est qui</div>
            <div>dolorem ipsum quia dolor sit</div>
            <div> amet, consectetur, adipisci velit</div>
            <div> amet, consectetur, adipisci velit</div>
            </Column>            
</span>            
<span className='span2'>
             <h3>Contact</h3>
            <Column>
            <div>2222 Infinity Loop</div>
            <div>Blay blah, VA 99999-0000</div>
            <br></br>
            <div>contact@blah.com</div>
            </Column>
</span>            
<span className='span3'>
 
            <h3>About Us</h3>
            <Column>
            <div></div>
           <button><Link className='movie-card' to={`/form/`} replace>Home</Link></button>
             <button>About Us</button>
            <button>Vounteering</button>
            <button>Safety</button>
            <button>Partners</button>
            <button>Login</button>
            </Column>
</span> 
</div>           
          </div>
        </div>
      </div>
    </GridView>
    </div>
  );
};

export default Form;
