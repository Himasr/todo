import React from "react";
import './Displaylist.css';
import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";
//import { text } from "@fortawesome/fontawesome-svg-core";
//import { Items } from './../../project3/src/Items';
import FlipMove from 'react-flip-move'
function Displaylist(props)
{
  const Items=props.Items;
  const listitems=Items.map((item)=>{
      return(
          <div className="displaystyle"key="item.key">
              <p>
                  <input type="text" id={item.key} value={item.text} onChange={
                  (e)=>{
                      props.makeupdate(e.target.value, item.key);
                  }}/>
                      
                   
              <span>
              <FontAwesomeIcon className="trashicon" icon="trash" onClick={()=>{props.deletetodo(item.key);}} /> 
              </span>
              </p>
          </div>
      );
  });
  return(<div>
      <FlipMove duration={400}
      easing="ease-in-out">
      {listitems}</FlipMove></div>)
}export default Displaylist;