import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';


// Assume colors is passed as a prop
function ColorList({ colors }) {
  return (
    <Container className="mt-5">
    <ListGroup>
      {colors.map(color => (
        <LinkContainer key={color.name} to={`/colors/${color.name}`}>
          <ListGroup.Item action>{color.name}</ListGroup.Item>
        </LinkContainer>
      ))}
    </ListGroup>
    </Container>
  );
}

export default ColorList;