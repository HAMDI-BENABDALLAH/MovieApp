import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditMovie = ({e,edit}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nameFilm, setnameFilm] = useState(e.nameFilm);
    const [img, setimg] = useState(e.img);
    const [rating, setrating] = useState(e.rating);
    const [date, setdate] = useState(e.date);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const editMovie = {
            id:e.id,
            nameFilm,
            img,
            rating,
            date,
        };
        edit={editMovie};
        handleClose();
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
         Edit
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>New Movie</Modal.Title>
            </Modal.Header>
            <form onsubmit={handleSubmit}>
            <Modal.Body>
                  <InputGroup className="mb-3">
                  <InputGroup.Text>Title</InputGroup.Text>
                   <Form.Control aria-label="First name" value={nameFilm} onChange={(e)=>  setnameFilm(e.target.value)} />
                    </InputGroup>  
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Image</InputGroup.Text>
                   <Form.Control aria-label="First name" value={img} onChange={(e)=>setimg(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Rating</InputGroup.Text>
                   <Form.Control aria-label="First name" value={rating} onChange={(e)=> setrating(e.target.value)}  />
                    </InputGroup>
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Years</InputGroup.Text>
                   <Form.Control aria-label="First name" value={date} onChange={(e)=>setdate(e.target.value)}  />
                    </InputGroup>
    
    
    
            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
            </form>
          </Modal>
        </div>
      )
    }
    
    export default AddMovie
    