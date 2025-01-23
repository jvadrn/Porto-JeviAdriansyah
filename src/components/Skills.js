import qaimg1 from "../assets/img/playwright.png";
import qaimg2 from "../assets/img/cypress.png";
import qaimg3 from "../assets/img/robotfr.png";
import jenkins from "../assets/img/jenkinslogo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/php.png";
import arrow2 from "../assets/img/jslogo.png";
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
                <div className="col">
                    <div className="title-skill">
                        <h2>Skill</h2>
                    </div>
                </div>
            </div>

        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="skill-bx wow zoomIn">
                        <Carousel 
                            arrows={false}
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlaySpeed={1500} 
                            className="owl-carousel owl-theme skill-slider mt-5 mb-5"
                        >
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg2} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg3} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={jenkins} alt="Image" />
                                <h5></h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Carousel 
                            arrows={false}
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlaySpeed={1800} 
                            className="owl-carousel owl-theme skill-slider mt-5"
                        >
                            <div className="item">
                                <img src={arrow1} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={arrow2} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg3} alt="Image" />
                                <h5></h5>
                            </div>
                            <div className="item">
                                <img src={qaimg1} alt="Image" />
                                <h5></h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="infoSkill-bx ">
                        <div className="skillText">
                        <p>Software Engeneer: HTML 5, CSS,JavaScript (React Js),Java, PHP (Laravel, CI), MySQL, 
                        WordPress, Figma, Adobe InDesign, Microsoft Office</p>
                        <p>Quality Assurance: Manual testing, Automation Testing (Cypress, Selenium, TestNG, 
                        Playwright, Robot Framework), Jenkins (CI/CD Pipeline),Test scenario, Test case, Report, Git,
                        GitHub, Google Sheets.</p>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
