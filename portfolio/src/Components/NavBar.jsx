import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/images/logo.svg";
import linkedin from "../Assets/images/nav-icon1.svg";
import facebook from "../Assets/images/nav-icon2.svg";
import insta from "../Assets/images/nav-icon3.svg";
import { useNavigate,Link } from "react-router-dom";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* Custum Toggle Button */}
        <div
            onClick={handleToggle}
            className={`toggle ${isToggled ? "open" : ""}`}
          >
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </div>

          <Navbar.Collapse
            id="navbarScroll"
            className={isToggled ? "show" : ""}
          >
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#shower"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("shower")}
            >
              Feedbacks
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <Link to="https://www.linkedin.com/in/zain-ul-abideen-b9215a283/">
                <img src={linkedin} alt="Icon1" />
              </Link>
              <Link to="https://web.facebook.com/profile.php?id=100079905174484">
                <img src={facebook} alt="Icon2" />
              </Link>
              <Link to="https://www.instagram.com/fit._.zain/">
                <img src={insta} alt="Icon3" />
              </Link>
            </div>
            <button
              className="contact-me"
              onClick={() => {
                console.log("Contact Me Form");
                navigate(`/letsconnect`)
              }}
            >
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
