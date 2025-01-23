
import 'react-multi-carousel/lib/styles.css';
import headerImg from "../assets/img/foto-porto-jv.jpeg";
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
    <section className="aboutme-bx" id="aboutme">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='aboutme-title'>
              <h2>About Me</h2>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="aboutme-bx wow zoomIn">
                        <div className="aboutme-img">
                        <img src={headerImg} alt="Header Img"/>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="aboutme-bx wow zoomIn" style={{ textAlign: 'justify' }}>
                        <div className="aboutme-text">
                        <p>I am a fresh graduate from Politeknik Negeri Lampung, majoring in Information Technology, with a passion for Quality Assurance and Software Engineering. My academic journey and active involvement in student organizations have equipped me with strong communication, teamwork, and problem-solving skills</p>
                        <p>I have hands-on experience as a Software Quality Assurance (SQA) professional, where I developed a deep understanding of software testing techniques, both manual and automated.</p>
                        <p>With a strong desire to grow and contribute, I am eager to apply my skills to ensure software reliability and deliver seamless user experiences. I strive to bring value to every project I undertake, combining technical expertise with a commitment to excellence."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='foto-porto'>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </div>
    </section>
  )
}
