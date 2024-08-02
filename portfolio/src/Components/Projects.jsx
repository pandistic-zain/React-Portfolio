import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { inView, motion } from "framer-motion";
import colorsharp2 from "../Assets/images/color-sharp2.png";
import projectimg1 from "../Assets/images/project-img1.png";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="projects__content text-center pt-2 pb-2 mb-3"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Projects
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Here are some Projects I have done
              </motion.h4>
            </motion.div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="project-slider text-center mt-5 mb-5"
            >
              {[
                {
                  title: "Gym Project (G-7 Fitness Club)",
                  description:
                    "Developed a secure website for a gym owner which provides facilities to owner as well as to client using HTML, CSS, JavaScript",
                },
                {
                  title: "My Own Portfolio",
                  description:
                    "Created my own portfolio Using HTML, CSS, JavaScript Keeping the responsiveness in mind using Grids And my more Functionalities",
                },
                {
                  title: "Store Management System",
                  description:
                    "Created a Store Management System using Java Adding the Functionality of MySQL Database, File Handling, File Serialization, Deserialization, Datagram Sockets and Many more",
                },
                {
                  title: "DSA Project (Using C++)",
                  description:
                    "My DSA Project Using C++ Named contact book merges LinkedLists, Stacks, and Queues flawlessly, embodying OOP and DSA principles, securing an A+ grade In the Course.",
                },
                {
                  title: "React Portfolio",
                  description:
                    "Built a dynamic and responsive portfolio using React and Bootstrap, showcasing my skills in modern web development and ensuring optimal user experience across all devices.",
                },
                {
                  title: "C++ Compiler",
                  description:
                    "Leveraged my problem-solving skills to develop a C++ compiler, focusing on building a robust Lexical Analyzer, Syntax Analyzer, and Semantic Analyzer for efficient code processing and error detection.",
                },
              ].map((project, index) => (
                <Carousel.Item key={index}>
                  <motion.div
                    className="card d-flex justify-content-center mt-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      delay: 0.2,
                    }}
                    // Trigger animation every time it comes into view
                    viewport={{ once: false }}
                  >
                    <div className="card-content">
                      <img src={projectimg1} alt={`Project ${index + 1}`} />
                      <h3 className="card-title">{project.title}</h3>
                      <p className="card-para">{project.description}</p>
                    </div>
                  </motion.div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <motion.img
        className="background-image-right"
        src={colorsharp2}
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </>
  );
};

export default Projects;
