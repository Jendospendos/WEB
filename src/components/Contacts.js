import React, { useState } from 'react'; 
import { Button, Form, Modal, CloseButton }  
    from 'react-bootstrap'; 
  
  
function Contacts() { 
    const [showForm, setShowForm] = useState(true); 
    const [inputValue, setInputValue] = useState(''); 
    const handleClose = () => setShowForm(false); 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert('Submitted: ' + inputValue)}; 
  
    return ( 
        <div className='ask'> 
            <Modal show={showForm}  
                   onHide={handleClose}> 
                <Modal.Header> 
                    <Modal.Title>You  question</Modal.Title> 
                    <CloseButton onClick={handleClose} /> 
                </Modal.Header> 
                <Modal.Body> 
                    <Form onSubmit={handleSubmit}> 
                        <Form.Group controlId="formBasicText"> 
                            <Form.Label>Text Input</Form.Label> 
                            <Form.Control type="text"
                                          placeholder="Enter text"
                                          value={inputValue}  
                                          autoComplete='off'
                                    
                                          onChange={(e) =>  
                                            setInputValue 
                                                (e.target.value)}/> 
                        </Form.Group> 
                        <Button style={{ marginTop: "20px" }}  
                                variant="primary" 
                                type="submit">
                                     
                            Submit 
                        </Button> 
                    </Form> 
                </Modal.Body> 
            </Modal> 
        </div> 
)} 
export default Contacts;
