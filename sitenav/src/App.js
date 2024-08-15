import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href='/'>Site</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
              <Nav.Link as={NavLink} to="/contato">Contato</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
