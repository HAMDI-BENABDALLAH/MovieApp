import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RatingStar from './RatingStar';
import EditMovie from'./EditMovie';
import {Link} from "react-router-dom"

const MovieSearch = ({el,edit}) => {
  return (
    <div>
    
      <Card style={{ width: '18rem' }}>
      <Link to={`/movie/${el.id}`} >
        <Card.Img variant="top" src={el.img} />
        <Card.Body>
          <Card.Title>{el.nameFilm}</Card.Title>
             <RatingStar rating={el.rating}/>
          <Card.Text>
        
            {el.date}
        
          </Card.Text>
          {/* <RatingStar rating={e.rating}/> */}
        </Card.Body>
      </Link>
        <Button variant="primary">Go somewhere</Button>
        <EditMovie el={el} edit={edit} />
    </Card>
    </div>
  )
}

export default MovieSearch
