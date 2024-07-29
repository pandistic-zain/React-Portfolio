import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FeedbackPage.css";
import Footer from "./Footer";
import colorsharp from "../Assets/images/color-sharp.png";
import colorsharp2 from "../Assets/images/color-sharp2.png";
import FeedbackServices from "../Services/FeedbackServices"
const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    FeedbackServices.postFeedback(feedback)
    .then((Response) =>{
      console.log(Response.data);
      navigate("/");
    })
    .catch((error) =>{
      console.log(error);
    });
    // Handle the feedback submission logic here
    console.log("Feedback:", feedback.message);
    console.log("Email:", feedback.email);
    console.log("Name:", feedback.name);
    // Reset form
    setFeedback({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="form-container">
          <Col md={8}>
            <div className="d-flex justify-content-center align-items-center title">
              <button onClick={() => { navigate("/") }}>
                <svg
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                </svg>
                <span>Back</span>
              </button>
              <h1 className="d-flex justify-content-center ml-5">Feedback Page</h1>
            </div>

            <Form onSubmit={handleSubmit} className="form mt-5">
              <Form.Group controlId="formName" className="form-group">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={feedback.name}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="form-group">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={feedback.email}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group controlId="formFeedback" className="form-group">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Enter your feedback"
                  value={feedback.message}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="d-flex justify-content-center form-submit-btn"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <img className="bg-image-left" src={colorsharp} alt="" />
      <img className="bg-image-right" src={colorsharp2} alt="" />
      <Footer />
    </>
  );
};

export default FeedbackPage;
