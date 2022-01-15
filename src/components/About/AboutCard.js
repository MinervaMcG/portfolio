import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const keyPoints = [
    "Develop highly interactive User Interfaces and Backend for web & mobile applications",
    "Creating application backend in Ruby on Rails, Node.js, Express.js, and Sails.js",
    "Integration of third party services such as Firebase/AWS/GCP",
    "Experience working on multiple blockchains like Bitcoin, Ethereum, Ripple, Tron",
    "Experience working on Dapps and Defi projects",
    "Experience with developing smart contracts using Solidity.",
    "Experience with setting up private blockchains like Hyperledger, POA.",
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pallavi Gupta </span>
            from <span className="purple"> India.</span>
            <br />I am a Full Stack Software Developer. Blockchain Enthusiast. Life Long Learner.
            <br />
            <ul className="list-group list-group-flush mt-4">
              {keyPoints.map((point) => (
                <li className="list-group-item" style={{backgroundColor: 'transparent'}}>
                  <span>⚡</span>
                  {point}
                </li>
              ))}
            </ul>
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pallavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
