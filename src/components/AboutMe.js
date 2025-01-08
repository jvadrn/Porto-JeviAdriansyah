import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const AboutMe = () => {
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
    <section className="aboutme" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutme-bx wow zoomIn">
                        <h2>About Me</h2>
                        <div className="aboutme-text">
                        <p>I am a passionate Software Quality Assurance (QA) professional with hands-on experience in both manual and automation testing. With a strong foundation in Software Engineering, I bring a deep understanding of how to ensure software reliability, functionality, and performance through rigorous testing practices.</p>
                        <p>Throughout my academic journey, I actively participated in a variety of student organizations and projects. These experiences not only sharpened my technical abilities but also honed my communication, teamwork, and problem-solving skills. Collaborating with diverse teams allowed me to approach challenges from different perspectives, which I believe is key in the fast-evolving tech landscape.</p>
                        <p>I am highly motivated to contribute my skills and expertise to the tech industry, particularly in Software Quality Assurance roles. My goal is to help create seamless and high-quality software products by leveraging both manual and automated testing techniques, ensuring end-users have the best possible experience.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
