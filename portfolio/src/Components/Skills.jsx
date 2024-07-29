import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorsharp from "../Assets/images/color-sharp.png"
import skill1 from "../Assets/images/meter1.svg"
import skill2 from "../Assets/images/meter2.svg"
import skill3 from "../Assets/images/meter3.svg"


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill__content text-center pt-2 pb-2">
                <h2>Skills</h2>
                <h4>Here are some of the skills I have</h4>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider text-center
                mt-5 mb-5"
              >
                <div className="item mt-3 ">
                  <img src={skill1} alt="" />
                  <h3 className="mt-3 fw-bold">HTML</h3>
                  <p>HTML is a markup language used to create web pages</p>
                </div>
                <div className="item mt-3">
                  <img src={skill3} alt="" />
                  <h3 className="mt-3 fw-bold">CSS</h3>
                  <p>
                    CSS is a stylesheet language used to describe the
                    presentation of a document written in HTML or XML
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill2} alt="" />
                  <h3 className="mt-3 fw-bold">JavaScript</h3>
                  <p>
                    JavaScript is a programming language that allows you to
                    implement complex things on web pages
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill2} alt="" />
                  <h3 className="mt-3 fw-bold">React JS</h3>
                  <p>
                    React JS is a JavaScript library for building user
                    interfaces
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill2} alt="" />
                  <h3 className="mt-3 fw-bold">BootStrap</h3>
                  <p>
                    Bootstrap is a free and open-source CSS framework directed
                    at responsive, mobile-first front-end web development
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill3} alt="" />
                  <h3 className="mt-3 fw-bold">Java</h3>
                  <p>
                    Java is a high-level, class-based, object-oriented
                    programming language that is designed to have as few
                    implementation dependencies as possible
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill2} alt="" />
                  <h3 className="mt-3 fw-bold">Spring Boot</h3>
                  <p>
                    Spring Boot is an open-source Java-based framework used to
                    create a microservice
                  </p>
                </div>
                <div className="item mt-3">
                  <img src={skill2} alt="" />
                  <h3 className="mt-3 fw-bold">MySQL</h3>
                  <p>
                    MySQL is an open-source relational database management
                    system
                  </p>
                </div>
                <div className="item mt-3 ">
                  <img src={skill1} alt="" />
                  <h3 className="mt-3 fw-bold">Git-GitHub</h3>
                  <p>
                    Git is a version control system for tracking changes in
                    computer files and coordinating work on those files among
                    multiple people. GitHub is a web-based platform that uses
                    Git
                  </p>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <img className="background-image-left" src={colorsharp} alt="" />
    </>
  );
};

export default Skills;
