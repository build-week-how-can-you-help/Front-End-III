import React from 'react';
import useForm from "./useForm";
import {Column,GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./pexelkidsflowersblured.png";
import './Form.css';
const imgStyle = {
  width: '50%',
  minWidth: '380px'
}
const Form = (props) => {
    const { values, handleChange, handleSubmit } = useForm(getData);
  
    function getData(kind) {
    props.setKind(kind.trim())
    
}
    return (
      <div >
        <img alt='' src={hdImage} style={(props.kind) ? {"display" : "none"} : imgStyle }/>
<div>Entered keys: {props.kind !== '' ? '<' + props.kind + '>': 'none'}</div>
    <GridView className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
  
          <form onSubmit={handleSubmit} className='back-img'
 >
<Bir>            
          <div className="field">
                <label  style={{"marginLeft" : "10%"}}className="label" >What kind of Non-Profit are You Looking For?</label>
                <div className="control">
                <Input  style={{"marginLeft" : "10%"}} className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind} required />
                </div>
              </div>
              <Button  type="submit" className="button is-block is-info is-fullwidth">Find Non-Profit</Button>
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
