import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const colorObj = colors.find(c => c.name === color);

  return (
    <Container style={{ backgroundColor: colorObj.hex, minHeight: '100vh', color: 'white' }}>
      <h1>{colorObj.name}</h1>
    </Container>
  );
}

export default ColorDetails;