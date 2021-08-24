import React,{useState} from 'react'
import {Button, Modal, Form} from "react-bootstrap"


const AddMovie=({addMovie})=> {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [newMovie, setnewMovie] = useState([]);
  const handleChange=(e)=>{
      setnewMovie({...newMovie,[e.target.name]:e.target.value})
  }


    return (
        <div>
    
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie name</Form.Label>
    <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter Movie name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie discription</Form.Label>
    <Form.Control onChange={handleChange} name="description" type="text" placeholder="Enter discription" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie poster</Form.Label>
    <Form.Control onChange={handleChange} name="poterurl" type="text" placeholder="Enter poster url" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie rate</Form.Label>
    <Form.Control onChange={handleChange} name="rating" type="Number" placeholder="Enter rate" />
    
  </Form.Group>
 
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 
        </div>
    )
}
export default AddMovie;