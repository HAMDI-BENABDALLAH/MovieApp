import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RatingStar from './RatingStar';


const MovieSearch = ({e}) => {
  return (
    <div>
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title>{e.nameFilm}</Card.Title>
           <RatingStar rating={e.rating}/>
        <Card.Text>
         
          {e.date}
        
        </Card.Text>
        {/* <RatingStar rating={e.rating}/> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieSearch
