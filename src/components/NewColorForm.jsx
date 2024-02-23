import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: '', hex: '#ffffff' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate('/colors');
  };

  return (
    <Container className="mt-5">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Color Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter color name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Color Value</Form.Label>
        <Form.Control
          type="color"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Color
      </Button>
    </Form>
    </Container>
  );
}

export default NewColorForm;
