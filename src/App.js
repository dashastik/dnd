import React from 'react';
import FormCharacter from './FormCharacter';
import CardCharacter from './CardCharacter'
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
      <Col lg={6}>
        <FormCharacter />
      </Col>
      <Col lg={6}>
        <CardCharacter />
      </Col>
      </Row>

    </Container>

  );
}

export default App;
