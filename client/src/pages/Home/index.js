import React from 'react'
import './game.css'
import {  message } from "antd";
import Button from "../../components/Button";
function Home() {
  
 const notify = () => message.error("Wait ...try after some time! Server is not working");

  return (
    
      <div>
      
    <h2>Sliding Tile Puzzle</h2>
    <div id="modal" className="hide">
        <div id="header"></div>
        <h2 id="message">You won!</h2>
    </div>
    <div id="container">
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li className='empty'></li>
        </ul>
    </div>

    <Button  onClick={notify} title="SUBMIT" type="submit" />
      </div>
    
  )
}

export default Home