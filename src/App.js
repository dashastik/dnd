import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Main from './Main';
import Header from './Header';
import Navigation from './Navigation';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col sm={3}> <Navigation /> </Col>
        <Col sm={9}> <Main /> </Col>
      </Row>
    </Container>
  );
}

export default App;
