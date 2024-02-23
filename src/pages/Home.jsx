import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <h1>Welcome to the Color Factory</h1>
          <p className="mt-3">
            Explore a world where colors define the mood. Discover new shades, add your own, and find
            inspiration in every hue. Whether you're looking for the calmness of blue or the energy of red, find
            and contribute to our ever-growing palette.
          </p>
          <div className="mt-4">
            <Button variant="primary" onClick={() => handleNavigate('/colors')}>
              Explore Colors
            </Button>{' '}
            <Button variant="secondary" onClick={() => handleNavigate('/colors/new')}>
              Add a Color
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
