import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import agb from "../../Assets/Projects/agb.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import tour from "../../Assets/Projects/tour.png";
import paye from "../../Assets/Projects/paye.png";
import toDine from "../../Assets/Projects/toDine.png";
import bridgeapp from "../../Assets/Projects/bridgeapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b2c}
              isBlog={false}
              title="B2C"
              description="B2C, designed for Batanai 2 Create, is a web app that informs users about the company, enables career updates, and allows users to propose applications. Admin-approved submissions move to a challenge board where developers collaborate on ideation and development strategies, fostering a dynamic creative community."
              ghLink="https://github.com/Miseda/B2C"
              demoLink="https://b2c-bay.vercel.app/"
              figmaLink ="https://www.figma.com/file/ZgUFAk6AQ0xP3ITFKdqVQi/B2C?type=design&node-id=0%3A1&mode=design&t=ODM40iTBFklLgsJB-1"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bridgeapp}
              isBlog={false}
              title="Bridge"
              description="Bridge is a dynamic web application at the forefront of advancing gender equality in HR hiring practices. It achieves this by removing gender bias from job postings and offering crucial salary data. Our design ethos revolves around a sleek black and white palette, seamlessly blending functionality with an elegant aesthetic. Through meticulously curated visuals and meticulous attention to detail, Bridge not only highlights its features but also underscores its commitment to creating a more equitable job market."
              ghLink="https://github.com/Miseda/BRIDGE"
              demoLink="https://bridgeapp.vercel.app/login"
              figmaLink ="https://www.figma.com/file/oJAOs6qwrJffhqphq8KNuw/Bridge-High-Fidelity-Wireframes?type=design&node-id=0%3A1&mode=dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agb}
              isBlog={false}
              title="AGB Fitness"
              description="AGB Fitness is an innovative web application developed to promote a healthier lifestyle among employees of a fictitious company, AGB. The platform allows users to set goals across various sectors, including health and nutrition, and track their progress once the goals are achieved. With a modern and sleek design, AGB Fitness boasts a range of features that align with the latest trends in fitness app development. By leveraging the power of technology, AGB Fitness provides a practical and convenient way for users to prioritize their well-being and achieve their fitness goals."
              ghLink="https://github.com/Miseda/AGB_FITNESS_APP"
              figmaLink= "https://www.figma.com/file/cCfIrR4nu51BDjiq835g08/AGB-FITNESS?t=UWvMqrgOAa7GYmT3-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="TOUR"
              description="TOUR is a web application that informs tourists on different categories of information like travel, entertainment, health and wellness among others in Kenya, The United Kingdom and Mauritius. 
              Designed and crafted with meticulous care, TOUR's elegant color scheme expertly complements the stunning images, creating an immersive and engaging user experience. The minimalist yet striking logo adds to the website's charm, making it a visual treat for users."
              ghLink="https://github.com/Miseda/Tour_Web_App"
              figmaLink="https://www.figma.com/file/fDChTWHv3wFjohhxxWFmFN/%22Tour%22-(Wireframes)?node-id=0%3A1&t=HlVNjg7g9zEvf6Cl-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paye}
              isBlog={false}
              title="P.A.Y.E"
              description="P.A.Y.E is an app that computes an individual's taxes in line with the requirements of the Kenya Revenue Authorities. To add a touch of irony to the app's otherwise serious nature, it employs a cartoon theme that creates a unique and engaging user experience. Despite the light-hearted design, P.A.Y.E remains a fully-functional tax calculator that ensures accurate and timely tax payments."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"   
              figmaLink = "https://www.figma.com/file/8k6Mg9LqbiF3mxFiu77e2W/P.A.Y.E-Calculator?node-id=0%3A1&t=HlVNjg7g9zEvf6Cl-1"           
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
