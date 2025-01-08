import qaimg1 from "../assets/img/playwright.png";
import qaimg2 from "../assets/img/cypress.png";
import qaimg3 from "../assets/img/robotfr.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider mt-5">
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5>Playwright</h5>
                            </div>
                            <div className="item">
                                <img src={qaimg2} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg3} alt="Image" />
                                <h5>Robot Framework</h5>
                            </div>
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5>Playwright</h5>
                            </div>
                        </Carousel>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider mt-5">
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5>Playwright</h5>
                            </div>
                            <div className="item">
                                <img src={qaimg2} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg3} alt="Image" />
                                <h5>Robot Framework</h5>
                            </div>
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5>Playwright</h5>
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
