import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {

  return (
    <BrowserRouter>

    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand>PG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/PhillipGstone" target="_blank">My Github</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Something 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something 4</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/about" element={ <About /> } ></Route>
        <Route path="/contact" element={ <Contact /> } ></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
