import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import FeedbackServices from "../Services/FeedbackServices";
import "../App.css";

const FeedbackShower = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await FeedbackServices.getAllFeedbacks();
        setFeedbacks(response.data);
      } catch (error) {
        setError("Failed to fetch feedbacks.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="feedbackshower" id="shower">
      <Container>
        <Row>
          <Col>
            <div className="feedback-content text-center p-2">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Feedbacks
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Here are the Reviews of my Work
              </motion.h4>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : error ? (
                <Alert variant="danger" className="alert">
                  {error}
                </Alert>
              ) : (
                <div className="d-flex flex-wrap justify-content-center">
                  {feedbacks.map((feedback, index) => (
                    <motion.div
                      key={feedback.id}
                      className="card my-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                        delay: 0.1 * index,
                      }}
                      viewport={{ once: false }}
                    >
                      <div className="card-inner">
                        <div className="card-front">
                          <h3>{feedback.name}</h3>
                          <h4>{feedback.email}</h4>
                        </div>
                        <div className="card-back">
                          <p className="px-3">"{feedback.message}"</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeedbackShower;
