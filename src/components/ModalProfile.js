import React, { useState } from 'react';
import { Container, Button, Form, CloseButton, Modal } from 'react-bootstrap';

export default function ModalProfile() {
  const [showModalProfile, setShowModalProfile] = useState(true);
  const clClose = () => setShowModalProfile(false); 
 

  return (
    <div>
      <Modal show={showModalProfile} onHide={clClose} >
        <div className='popup-profile'>
          <Container style={{ width: "500px" }}>
            <Modal.Header>
              <Modal.Title className='text-center'>LOG IN</Modal.Title>
              <CloseButton onClick={clClose} />
            </Modal.Header>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant='primary' type='submit'>LOG IN</Button>
            </Form>
          </Container>
        </div>
      </Modal>
    </div>
  );
}