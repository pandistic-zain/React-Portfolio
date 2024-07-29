import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorsharp2 from "../Assets/images/color-sharp2.png";
import projectimg1 from "../Assets/images/project-img1.png";
const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      card: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      card: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      card: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      card: 1,
    },
  };
  return (
    <>
      <Container className="projects" id="projects">
        <Row>
          <Col>
            <div className="projects__content text-center pt-2 pb-2 mb-3">
              <h2>Projects</h2>
              <h4>Here are some Projects I have done</h4>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="project-slider text-center
                mt-5 mb-5"
            >
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">Gym Project (G-7 Fitness Club)</p>
                    <p className="card-para">
                      Developed a secure website for a gym owner which provides
                      facilities to owner as well as to client using HTML, CSS,
                      JavaScript
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">My Own Portfolio</p>
                    <p className="card-para">
                      Created my own portfolio Using HTML, CSS, JavaScript
                      Keeping the responsiveness in mind using Grids And my more
                      Functionalities
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">Store Management System</p>
                    <p className="card-para">
                      Created a Store Management System using Java Adding the
                      Functionality of MySQL Database, File Handling, File
                      Serialization, Deserialization, Datagram Sockets and Many
                      more
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">DSA Project (Using C++)</p>
                    <p className="card-para">
                      My DSA Project Using C++ Named contact book merges
                      LinkedLists, Stacks, and Queues flawlessly, embodying OOP
                      and DSA principles, securing an A+ grade In the Course.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">React Portfolio</p>
                    <p className="card-para">
                      Built a dynamic and responsive portfolio using React and
                      Bootstrap, showcasing my skills in modern web development
                      and ensuring optimal user experience across all devices.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card d-flex justify-content-center mt-5">
                  <div className="card-content">
                    <img src={projectimg1} alt="" />
                    <p className="card-title">C++ Compiler</p>
                    <p className="card-para">
                      Leveraged my problem-solving skills to develop a C++
                      compiler, focusing on building a robust Lexical Analyzer,
                      Syntax Analyzer, and Semantic Analyzer for efficient code
                      processing and error detection.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="" />
    </>
  );
};

export default Projects;
