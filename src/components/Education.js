import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgressBar from './CircularProgressBar';

export const Education = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="education">
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 style={{color:"rgb(255 1 79)"}}>Education</h2>
                            <br /><br />
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                                customButtonGroup={<React.Fragment></React.Fragment>}
                                arrows={false} // Disable default arrows
                            >
                                <div className="item">
                                    <CircularProgressBar percentage={62.6} />
                                    <h5>D.M.S.S.V.H.COLLEGE OF ENGINEERING</h5>
                                    <p>CIVIL Engineering</p>
                                </div>
                                <div className="item">
                                    <CircularProgressBar percentage={85.8} />
                                    <h5>SRI CHATAYANA JUNIOR COLLEGE</h5>
                                    <p>+2 - MPC</p>
                                </div>
                                <div className="item">
                                    <CircularProgressBar percentage={88} />
                                    <h5>NIRMALA <br/>High School</h5>
                                    <p>SSC</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
