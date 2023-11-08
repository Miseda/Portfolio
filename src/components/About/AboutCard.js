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
            I am a BSc(Hons) Computing Graduate and I specialize in web development.
            <br />
            <br />
            Apart from coding, other activities that I enjoy doing include:
          </p>
          <ul>
            <li className="about-activity">
            &bull; Graphic Design
            </li>
            <li className="about-activity">
            &bull; Data analysis
            </li>
            <li className="about-activity">
            &bull; Sound engineering
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One day or day one?"{" "}
          </p>
          <footer className="blockquote-footer">Miseda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
