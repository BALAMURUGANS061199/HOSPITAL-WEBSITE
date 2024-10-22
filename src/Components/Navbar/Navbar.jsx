import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Navbars = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active">Home</Nav.Link>
            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Service Details</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="">Search</Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faPhone} className="phone" />
            </Nav.Link>
            <Nav.Link href="">(+91 6380665692)</Nav.Link>
            <Nav.Link>
              <button>
                Contact Us{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
