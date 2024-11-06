import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from "react";

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search by name..."
            type="input"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {console.log('Pressed Enter')}
            }}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button onClick={() => console.log('Clicked Button')}>Enter</Button>
        </InputGroup>
      </Container>
    </div>
  );
}

export default App;
