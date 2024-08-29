import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profileImageImage from "../assets/img/Vijay _png.png"; //image
import Resume from "../assets/Vijay Saradhi Mallavalli.pdf"; //resume
import { BsDownload } from "react-icons/bs";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer"];
  const period = 1000;
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const handleDownload = () => {
    setIsDownloading(true);

    // Simulating download completion after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period / 2); // Decrease period for faster rotation
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {/* <div>
                    <h4 style={{ fontSize: "smaller" }}>Hello</h4> I'm Vijay
                    Mallavalli{" "}
                    </div> */}

                    <h1> Hi,<br/> I'm  <span style={{color:"rgb(255 1 79)"}}>Vijay Mallavalli</span> </h1>
                    
                    {/* <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vijay Mallavalli</span>
        </h1> */}
                    {/* <p>Hello</p>
                    <h1>I'm<span>Vijay Mallavalli <br/> a</span></h1> */}
                    
                    <span
                      className="txt-rotate"
                      dataPeriod="10000"
                      data-rotate='[ "Web Developer", "Front-end Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1> 

                  <p>                    
                    Welcome to my portfolio!.I'mVijay Mallavalli, a
                    Front-end Developer with a passion for creating beautiful,responsive,
                     and user-friendly websistes. I have a strong background in HTML,
                    CSS, JavaScript, and React. I am always looking for new
                    challenges and opportunities to learn and grow as a
                    developer.
                  </p>
                  <a href={Resume} download className="btn-download">
                    Download Resume &nbsp;
                    {/* <BsDownload size={20} style={{ marginRight: "5px" }} /> */}
                    <span className="download-icon">
                      <BsDownload size={20} />
                    </span>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <div className="image-circle">
                    <img src={profileImageImage} alt="Header Img" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
