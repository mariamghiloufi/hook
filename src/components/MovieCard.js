import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const MovieCard = ({Movie}) => {
    return (
        <div >
           <Card style={{ width: '18rem' }}>
  <Card.Img alt = {Movie.name}variant="top" src={Movie.posterurl} />
  <Card.Body>
    <Card.Title>{Movie.name}</Card.Title>
    <Card.Text>
     {Movie.description}
    </Card.Text>
    <ReactStars
    count={5}
    /*onChange={ratingChanged}*/
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={Movie.rating}
  />,
  </Card.Body>
</Card>
        </div>
    )
}
export default MovieCard;