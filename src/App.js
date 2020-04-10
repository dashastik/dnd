import React from 'react';
import FormCharacter from './FormCharacter';
import CardCharacter from './CardCharacter'
import { Container, Tabs, Tab } from 'react-bootstrap';

function App() {
  return (
    <Container>
        <Tabs defaultActiveKey="form">
          <Tab eventKey="form" title="Форма для заполнения">
          <FormCharacter />
          </Tab>
          <Tab eventKey="card" title="Карточка персонажа">
            <CardCharacter />
          </Tab>
        </Tabs>
    </Container>
  );
}

export default App;
