import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaEnvelope, FaComment, FaPhone} from "react-icons/fa";
import 'animate.css';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gvsj81s', 'template_o35rt3g', e.target, 'EhuAcs_wzpdUIGpK7')
      .then((result) => {
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
      }, (error) => {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        console.error('Email send error:', error);
      });
  };
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="contact-form text-center animate__animated animate__fadeInUp">
              <h2 className="mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}  >
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FaUser /></span>
                    </div>
                    <input type="text" value={formDetails.fullName} placeholder="Your Name" name="from_name" onChange={(e) => onFormUpdate('fullName', e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FaPhone /></span>
                    </div>
                    <input type="tel" value={formDetails.number} placeholder="Your Phone Number" name="phone_number" onChange={(e) => onFormUpdate('number', e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FaEnvelope /></span>
                    </div>
                    <input type="email" value={formDetails.email} placeholder="Your Email" name="email_id" onChange={(e) => onFormUpdate('email', e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FaComment /></span>
                    </div>
                    <textarea rows="5" value={formDetails.message} placeholder="Your Message" name="message" onChange={(e) => onFormUpdate('message', e.target.value)} className="form-control"></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary ">{buttonText}</button>
                {status.message && <p className={status.success ? "success" : "danger"}>{status.message}</p>}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
