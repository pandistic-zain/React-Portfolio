import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
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
            <div className="feedback-content text-center p-2 ">
              <h2>Feedbacks</h2>
              <h4>Here are the Reviews of my Work</h4>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : error ? (
                <Alert variant="danger" className="alert">
                  {error}
                </Alert>
              ) : (
                <div className="d-flex flex-wrap justify-content-center">
                  {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="card my-3">
                      <div className="card-inner">
                        <div className="card-front">
                          <h3>{feedback.name}</h3>
                          <h4>{feedback.email}</h4>
                        </div>
                        <div className="card-back">
                          <p className=" px-3">"{feedback.message}"</p>
                        </div>
                      </div>
                    </div>
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
