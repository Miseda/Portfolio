import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, 
            <br/>
            <br/> My name is <span className="purple">Alex Miseda </span>
            from <span className="purple"> Nairobi, Kenya. </span>
            I am currently an undergraduate at Glasgow Caledonian University pursuing BSc(Hons) Computing .
            <br />
            <br />
            Apart from coding, other activities that I enjoy doing include:
          </p>
          <ul>
            <li className="about-activity">
            &bull; Graphic Design
            </li>
            <li className="about-activity">
            &bull; Music Production
            </li>
            <li className="about-activity">
            &bull; Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do better today, for a better tommorrow"{" "}
          </p>
          <footer className="blockquote-footer">Miseda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
