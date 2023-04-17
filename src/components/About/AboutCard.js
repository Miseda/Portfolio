import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alex Miseda </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I am an undergraduate pursuing BSc(Hons) Computing at Glasgow Caledonian University.
            <br />
            <br />
            Apart from coding, some other activities that I love doing include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music Production
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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
