import React from 'react'
import './Contactus.modules.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ContactUs() {

  return(
    <div className="container-fluid last">
    <h1>CONTACT US</h1>
    <InputGroup className="mb-3 inputfield">
        
        <Form.Control
          placeholder="FULL NAME"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 inputfield">
        
        <Form.Control
          placeholder="EMAIL"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3 inputfield">
        
        <Form.Control
          placeholder="PHONE NUMBER"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
  <div className='footer'></div>
  </div>
  )}
   

