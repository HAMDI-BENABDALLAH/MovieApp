import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EditMovie = ({el,edit}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nameFilm, setNameFilm] = useState(el.nameFilm);
    const [img, setImg] = useState(el.img);
    const [rating, setRating] = useState(el.rating);
    const [date, setDate] = useState(el.date);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const editMovie = {
            id:el.id,
            nameFilm,
            img,
            rating,
            date,
        };
        edit(editMovie);
        handleClose();
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
         Edit
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <InputGroup className="mb-3">
                  <InputGroup.Text>Title</InputGroup.Text>
                   <Form.Control aria-label="First name" value={nameFilm} onChange={(e)=>  setNameFilm(e.target.value)} />
                    </InputGroup>  
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Image</InputGroup.Text>
                   <Form.Control aria-label="First name" value={img} onChange={(e)=>setImg(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Rating</InputGroup.Text>
                   <Form.Control aria-label="First name" value={rating} onChange={(e)=> setRating(e.target.value)}  />
                    </InputGroup>
                    <InputGroup className="mb-3">
                  <InputGroup.Text>Years</InputGroup.Text>
                   <Form.Control aria-label="First name" value={date} onChange={(e)=>setDate(e.target.value)}  />
                    </InputGroup>
            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary" type="button" onClick={handleClose}>
                Close
              </Button>
              <Button  variant="primary" type="submit" >
                Save Changes
              </Button>
            </Modal.Footer>
            </Form>
          </Modal>
        </div>
      )
    }
    
    export default EditMovie
    