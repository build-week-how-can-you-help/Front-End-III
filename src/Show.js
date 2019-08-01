import React from 'react';
import { Link } from 'react-router-dom'
import {Column} from "./myStyle"
import './Form.css';


// const inputStyle = {
// width: '40%',
// marginLeft: '10%',
// minWidth: '200px', 
// }

// const imgStyle = {
//   width: '50%',
//   minWidth: '200px',
//   position: 'absolute',
//   top: '0%',
//   left: '25%'
// }
// const labelStyle1 = {
//   marginLeft: '10%',
// }
// const labelStyle2 = {
//   display: 'none'
// }
// const buttonStyle1 = {
//   position: 'relative'
// }

// const buttonStyle2 = {
//     position: 'absolute',
//     top: '0%',
//     left: '95%'
  
//   }
//   const bottomStyle = {
//     textAlign: 'left',
//     marginTop: '40%',
//     marginLeft: '150%',
//     width: '50%',
//     backgroundColor: 'white'
//   }
//       const bottomStyle2 = {
//         textAlign: 'left',
//         marginTop: '10%',
//         marginLeft: '250%',
//         width: '50%',
//         backgroundColor: 'white'
//           }
              
          const rowStyle1 = {
            color: 'dodgerblue',  
            width: '500px',  
              }
              
              const rowStyle2 = {
                width: '500px',  
                  }
              
                  const rowStyle3 = {
                    width: '500px',  
                      }
                      const contain = {
                      color: 'black',
                      backgroundColor: 'white',
                      fontSize: '20px',
                        border: '2px solid black',
                        borderRadius: '5px',
                        width: '500px',
                    }
                      
                                                    
const Show = (props) => {

const resultArr = []

for (let i=0;i<props.vData.length;i++)
// if ( 1===1 || (props.kind && props.vData[i]['name'] && props.vData[i].name.toLowerCase().includes(props.kind.toLowerCase()) && props.vData[i].contact.includes(props.zip))) 
if (props.kind && props.vData[0]) 
{ resultArr.push(props.vData[i])}

    const myFunction = function (element,ix,arr) {
        if (resultArr[0] &&  ix<(props.volNext+4) && ix>(props.volNext-1) )
      {  return (
<div>
<Column style={contain} className={ix===0 ? 'bottomStyle' : 'bottomStyle2'} >
        <div style={rowStyle1}> {arr[ix]['name']}</div>
        <div style={rowStyle2}>{arr[ix]['contact']}</div>
        <div style={rowStyle3}> {arr[ix]['info']} {arr[ix]['info']==='' ? '' : 'Neque porro quisquam est quiNeque porro quisquam est quiNeque porro quisquam est quiNeque porro quisquam est qui'}</div>
        </Column>
</div>
       ) }

      } 

    return (
        <div>
        { ( props.vData[0]['name']) !== '' && resultArr.map(myFunction)}
        {/* { ( props.kind !== '' && props.vData[0]['name'] === '' ) && <div>No Results {props.vData.length} {props.kind} {props.vData[0]['name']} {props.volNext}</div>} */}


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
  );
};

export default Show;