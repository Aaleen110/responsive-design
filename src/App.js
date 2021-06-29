import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();
  let isMobile = true;
  if (height > 700 && width > 1000) {
    isMobile = false;
  }
  return (
    <div className="App">

      <div style={{ backgroundColor: '#20232A', height: 70, width: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ color: "#fff", fontSize: 26, fontWeight: 'bold', textAlign: 'start', height: '100%', display: 'flex', alignItems: 'center', marginLeft: 16 }}>Patient Onboarding</div>
      </div>

      <div style={!isMobile ? { width: '100%', alignItems: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'column' } : {}}>
        <div style={!isMobile ? { width: '50%' } : {}}>

          <Form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20, }}>
            <Form.Group style={{ width: '95%', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }} controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Patient's First Name" />
            </Form.Group>

            <Form.Group style={{ width: '95%', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }} controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Patient's  Last Name" />
            </Form.Group>

            <Form.Group style={{ width: '95%', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }} controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group style={{ width: '95%', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }} controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Form.Group style={{ width: '95%', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }} controlId="formBasicEmail">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

          </Form>
          <div style={{ bottom: 0, width: '100%', marginBottom: 16, marginTop: 16 }}>
            <Button style={{ width: '95%', alignSelf: 'flex-end', fontWeight: 'bold' }} variant="success">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
