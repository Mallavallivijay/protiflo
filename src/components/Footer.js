import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import logo1 from "../assets/img/profile.gif"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ height: '100px' }}>
      <Container>
        <Row className="align-items-center justify-content-between" style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Col xs="auto" className="d-flex align-items-center">
            <div className="logo-container">
              <img src={logo1} alt="Logo" style={{ height: '90px', width: '60px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
          </Col>
          <Col className="text-center" style={{ fontWeight: 600, fontSize: '1.2rem', color: '#e4c55f', letterSpacing: '1px' }}>
            @vijaymallavalli
          </Col>
          <Col xs="auto" className="d-flex align-items-center justify-content-end">
            <div className="social-icon" style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.linkedin.com/in/vijay-saradhi-358b0a220" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/vijay_mallavalli/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              {/* <a href="https://twitter.com/?lang=en-in" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Twitter" /></a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
