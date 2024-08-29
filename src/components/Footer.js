import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import logo1 from "../assets/img/profile.gif"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ height: '100px' }}> {/* Adjust the height as needed */}
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="logo-container">
              <img src={logo1} alt="Logo" /> {/* Replace 'Vijay' with your logo */}
            </div>
          </Col>
          
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/vijay-saradhi-358b0a220" target="_blank" >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/vijay_mallavalli/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://twitter.com/?lang=en-in" target="_blank"><img src={navIcon2} alt="Twitter" /></a>
            </div>
       
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
