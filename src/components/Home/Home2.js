import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import miseda from "../../Assets/Projects/miseda.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a programmer with a deep passion for web development and pioneering new technologies. 
              <br />
              <br />My proficiency spans classic programming languages, encompassing 
                <b className="purple">  HTML, CSS, JavaScript and Python.</b>
              <br />
              <br />
              My core focus revolves around crafting innovative  &nbsp;
                <b className="purple">Web Products and Technologies </b> with a particular emphasis on {" "}
                <b className="purple"> Web design, User experience, and Graphic design.
                </b>
              <br />
              <br />
              My work is marked by a meticulous attention to detail, enabling me to create top-tier front-end designs. I employ <b className="purple"></b>
              
                <b className="purple">
                  {" "}
                  design tools
                </b>

              &nbsp; like
              
                <b className="purple"> Figma and Adobe XD </b>

                to bring creativity to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={miseda} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Miseda"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alex-mumbo-8179991a2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mis3da/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
