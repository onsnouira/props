import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Player = ({player}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.imageUrl} style={{height:190}}/>
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          Team: {player.team}
          <br />
          Nationality: {player.nationality}
          <br />
          Jersey Number: {player.jerseyNumber}
          <br />
          Age: {player.age}
        </Card.Text>
        <Button variant="primary">Search</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
Player.defaultProps = {
    name: "Player Name",
    team: "Team",
    nationality: "Nationality",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://example.com/default.jpg",
  };

export default Player
