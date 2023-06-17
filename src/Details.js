import React from 'react'
import { Card } from 'react-bootstrap'
import './App.css';

function Details() {
  return (
    <div>

        <Card style={{height:'120px',width:'206px',marginLeft:'22px',/*background:'linear-gradient(to bottom,#D2E529, #2E6575)'*/backgroundColor:'#14cbed',border:'none'}}>
            <h4 style={{fontSize:'15px'}}>Details:</h4>
            <div style={{display:'flex',flexDirection:'row'}}>
            <h5 className='detail'>NAME:Rudraneel Guha</h5>
            <h5 className='detail'>AGE:24</h5> 
            <h5 className='detail'>SEX:M</h5>
            </div>
            <h5 className='detail'>Hobbies:Reading books,basketball,drawing,cooking.</h5>
           
        </Card>
    </div>
  )
}

export default Details