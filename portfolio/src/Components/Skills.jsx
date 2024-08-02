import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorsharp from "../Assets/images/color-sharp.png";
import skill1 from "../Assets/images/meter1.svg";
import skill2 from "../Assets/images/meter2.svg";
import skill3 from "../Assets/images/meter3.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="skill__content text-center pt-2 pb-2"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Skills
                </motion.h2>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Here are some of the skills I have
                </motion.h4>
              </motion.div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider text-center mt-5 mb-5"
              >
                {[
                  {
                    img: skill1,
                    title: "HTML",
                    desc: "HTML is a markup language used to create web pages",
                  },
                  {
                    img: skill3,
                    title: "CSS",
                    desc: "CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML",
                  },
                  {
                    img: skill2,
                    title: "JavaScript",
                    desc: "JavaScript is a programming language that allows you to implement complex things on web pages",
                  },
                  {
                    img: skill2,
                    title: "React JS",
                    desc: "React JS is a JavaScript library for building user interfaces",
                  },
                  {
                    img: skill2,
                    title: "BootStrap",
                    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development",
                  },
                  {
                    img: skill3,
                    title: "Java",
                    desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible",
                  },
                  {
                    img: skill2,
                    title: "Spring Boot",
                    desc: "Spring Boot is an open-source Java-based framework used to create a microservice",
                  },
                  {
                    img: skill2,
                    title: "MySQL",
                    desc: "MySQL is an open-source relational database management system",
                  },
                  {
                    img: skill1,
                    title: "Git-GitHub",
                    desc: "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. GitHub is a web-based platform that uses Git",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="item mt-3"
                  >
                    <img src={skill.img} alt={skill.title} />
                    <h3 className="mt-3 fw-bold">{skill.title}</h3>
                    <p>{skill.desc}</p>
                  </motion.div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <img
        className="background-image-left"
        src={colorsharp}
        alt="Background"
      />
    </>
  );
};

export default Skills;
