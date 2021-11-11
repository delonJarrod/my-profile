import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Cards.module.css";
import img from "../components/img/Algo_Logo_8K.png";
export default function Cards() {
  return (
    <div className={classes.header}>
      <Container>
        <Row>
          <Col className={classes.cardBody}>
            <div className="rounded-2xl border-rounded font-Nunito">
              <div className="bg-gradient-to-r from-green-400 to-blue-900 rounded-2xl">
                <div className={classes.Inner}>
                  <Container>
                    <Row>
                      <Col className="ml-24">
                        <div className={classes.img}>
                          <img alt="logo" src={img} width="20%" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Container fluid>
                    <Row>
                      <Col>
                        <h1 className="text-5xl text-black font-bold">
                          ALGO CORP SOLUTIONS
                        </h1>
                        <h4 className="font-bold text-3xl">
                          We develop solutions that develop with you
                        </h4>
                        <h4 className="font-bold text-2xl">Preshen Naidoo</h4>
                        <h4 className="font-bold text-2xl">Sales Rep</h4>
                        <h4 className="font-bold text-2xl">
                          Cell: 081-418-6655
                        </h4>
                        <h4 className="font-bold text-2xl">
                          p.naidoo@algocorpsolutions.com |
                          https://algocorpsolutions
                        </h4>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
