import React from 'react';
import useForm from "./useForm";
import { Link } from 'react-router-dom'
import Select from 'react-select';
import {Column,GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./bg.png";
import './Form.css';


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

const Show = (props) => {

    const myFunction = function (element,ix,arr) {
        if (element.name.includes(props.kind) || element.contact.includes(props.zip))
      {  return (
          <div>
        <div> {arr[ix]['name']}</div>
        <div> {arr[ix]['contact']}</div>
        <div> {arr[ix]['info']}</div>
        </div>
       ) }
      }
      
    return (
        <div>
        {props.vData.map(myFunction)}
        </div>
  );
};

export default Show;