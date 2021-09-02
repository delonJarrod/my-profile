import classes from "./Header.module.css";
import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import profilePic from "../img/DP.jpg";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className={classes.Headerbackground}>
      <div className="d-flex pt-10 pb-20">
        <Container fluid>
          <Row>
            <Col className="flex flex-col mt-5 ">
              <div className={classes.imgCenter}>
                <Image
                  src={profilePic}
                  width="300px"
                  height="95%"
                  roundedCircle
                  className="rounded-full flex items-center justify-center"
                  draggable="false"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-left">
              <div className={classes.divide}>
                <div className={classes.margin}>
                  <div className="text-3xl md:text-4xl">
                    <h1 data-aos="fade-down" data-aos-duration="1500">
                      Delon J. Naidoo
                    </h1>
                  </div>
                  <div className="text-xl md:text-2xl mb-10">
                    <h4>Software Developer</h4>
                  </div>
                  <div className="text-3xl md:text-4xl mb-5">
                    <h1>About me</h1>
                  </div>
                  <div className="text-md md:text-md pb-5">
                    <p>
                      I am a hardworking and diligent young man with a positive
                      outlook. I work well as part of a team or individually. I
                      am motivative, proactive and passionate about programming,
                      application development and solving problems.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Header;
