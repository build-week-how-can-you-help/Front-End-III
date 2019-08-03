import React from 'react';
import { Link } from 'react-router-dom'
import {Column} from "./myStyle"
import './Form.css'
                                                    
const Show = (props) => {

const resultArr = []
// useFind(props.setData,props.kind,'myTest')
  function refreshPage() {
    window.location.reload(false);
  }

if(props.vData)
{
for (let i=1;i<5;i++)
{if ( ( 1 || (props.kind  && props.vData[i]['description'] && props.vData[i]['description'].toLowerCase().includes(props.kind.toLowerCase()) && props.vData[i]['zip code'].includes(props.zip))) )
{ resultArr.push(props.vData[i])}
}
}
    const myFunction = function (element,ix,arr) {
        if (resultArr[ix] &&  ix<(4) )
      {  return (
<div key={arr[ix]['name']}>
<Column className={ix===0 ? 'bottomStyle' : 'bottomStyle2'} >
        <div className='rowStyle1'> {arr[ix]['name']}</div>
        <div className='rowStyle2'>{arr[ix]['address']} {arr[ix]['city']} {arr[ix]['zip code']} </div>
        <div className='rowStyle3'> {arr[ix]['description']}</div>
        </Column>
</div>
       ) }
      } 

    return (
        <div>
        { resultArr.map(myFunction)}
        { ( !resultArr ) && <div>No Results {props.vData.length} {props.kind} {props.vData[0]['name']} {props.volNext}</div>}


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
           <button><Link to={`/form/`} onClick={refreshPage}  >Begin</Link></button>
           <button>Home</button>
           <button>About Us</button>
            <button>Vounteering</button>
            <button>Safety</button>
            <button>Partners</button>
            <button>Login</button>
            </Column>
</span> 
</div>           
        </div>
  );
};

export default Show;