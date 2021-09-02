import React from "react";
import classes from "./Skills.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { BsTrophy } from "react-icons/bs";
import { BsPen } from "react-icons/bs";

function Skills() {
  return (
    <div className="text-center">
      <Container fluid>
        <Row>
          <Col>
            <div className="animate-bounce">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-left ml-10 mt-20 text-3xl font-Nunito font-bold subpixel-antialiased md:text-4xl mb-10"
              >
                Details About Me!
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <section
              id="Social"
              className="pb-10 relative block bg-black text-white"
            >
              <div className="bottom-auto top-0 left-0 right-20 w-full absolute pointer-events-none overflow-hidden -mt-20">
                <div className={classes.tile}>
                  <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                  </svg>
                </div>
              </div>
              <div className="container  lg:pt-10 lg:pb-10 pb-20 pt-20">
                <div className="text-center justify-center">
                  <div className="w-full lg:w-6/12 ">
                    <h2
                      data-aos="fade-down"
                      className="text-4xl font-semibold text-white uppercase mb-10"
                    >
                      Education / Work
                    </h2>
                  </div>

                  <div className="flex flex-wrap lg:ml-64 text-center ">
                    <div
                      data-aos="fade-up-right"
                      data-aos-delay="300"
                      className="float-left px-4 w-full md:w-1/2"
                    >
                      <p className="text-3xl font-semiboldleading-relaxed mt-4 mb-4 ">
                        Qualifications
                      </p>
                      <div className="flex">
                        <span className="mr-2 text-3xl flex-col">
                          <BsTrophy />
                        </span>
                        <p className="flex-col text-xl">
                          DEGREE IN APPLICATION DEVELOPMENT AND COMPUTER SCIENCE
                        </p>
                      </div>
                      <div>
                        <p className="py-5">
                          The Independent Institute of Education <br />
                          Varsity College -Graduated
                        </p>
                      </div>
                      <div className="flex">
                        <span className="mr-2 text-3xl flex-col">
                          <BsTrophy />
                        </span>
                        <p className="text-xl md:ml-2">
                          NATIONAL SENIOR CERTIFICATE IN HIGH SCHOOL
                        </p>
                      </div>
                      <div>
                        <p className="py-5">
                          Kharwastan Secondary School
                          <br />
                          Completed ( Matric - bachelors pass )
                        </p>
                      </div>
                    </div>

                    <div className=" flex-col md:ml-20 md:flex-row gap-2 mt-5 ml-3">
                      <div className={classes.ExperienceWidth}>
                        <div
                          className="w-full md:w-1/2"
                          data-aos="fade-right"
                          data-aos-delay="300"
                        >
                          <p className="text-3xl ml-12 font-semiboldleading-relaxed">
                            Experience
                          </p>
                          <div className={classes.ExperienceWidth}>
                            <div className="py-5 ml-10">
                              <Collapsible
                                trigger="Experience"
                                easing={
                                  "cubic-bezier(0.175, 0.885, 0.32, 2.275)"
                                }
                                triggerWhenOpen="Close"
                                triggerTagName="div"
                                transitionTime={300}
                                className={classes.trigger}
                              >
                                <ul className={classes.list}>
                                  <Container fluid>
                                    <Row>
                                      <Col>
                                        <div>
                                          <div className="flex pt-5">
                                            <span className=" text-3xl flex-col">
                                              <BsPen />
                                            </span>
                                            <h3 className="flex-col text-xl">
                                              WEB DESIGNER {"&"} SOFTWARE
                                              DEVELOPER
                                            </h3>
                                          </div>
                                          <h5>Inzalo Utility Systems</h5>
                                          <p>
                                            - Web application development.
                                            <br /> - Connecting, retrieving,
                                            modifying and displaying data from
                                            API. <br />- Enhanced pre existing
                                            features.
                                            <br /> - Developed and maintained
                                            new features.
                                            <br /> - Front End design changes
                                            and enhancements.
                                            <br /> - SQL database editing,
                                            retrieving and arranging data.
                                            <br />- Edited content on MVC
                                            websites.
                                            <br /> - Updated client websites.
                                          </p>
                                        </div>
                                        <div>
                                          <div className="flex pt-5">
                                            <span className=" text-3xl flex-col">
                                              <BsPen />
                                            </span>
                                            <h3 className="flex-col text-xl">
                                              WEB DESIGNER {"&"} CONTENT EDITOR
                                            </h3>
                                          </div>
                                          <h5>IX Online Motoring</h5>
                                          <p>
                                            - Developed websites.
                                            <br />- Edited content on websites.
                                            <br />- Updated client websites.
                                            <br />- Handled stock related tasks.
                                            <br />- Installed and managed 3rd
                                            party applications on clients
                                            websites.
                                          </p>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Container>
                                </ul>
                              </Collapsible>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ml-10 mb-10 mt-20 animate-bounce">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-left text-3xl font-Nunito font-bold subpixel-antialiased md:text-4xl"
              >
                Languages!
              </h1>
            </div>
          </Col>
          <Col>
            <section className="relative bg-black pt-8 pb-10">
              <Container fluid>
                <Row>
                  <Col>
                    <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
                      <div className={classes.tile}>
                        <svg
                          className="absolute bottom-0 overflow-hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          version="1.1"
                          viewBox="0 0 2560 100"
                          x="0"
                          y="0"
                        >
                          <polygon
                            className=" fill-current"
                            points="2560 0 2560 100 0 100"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="container mx-auto lg:pt-10 lg:pb-10 ">
                      <div className="flex flex-wrap text-center justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                          <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="text-2xl leading-relaxed mt-4 mb-4"
                          >
                            <div className={classes.bg}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="236"
                                viewBox="0 0 670 236"
                              >
                                <path
                                  className={classes.path}
                                  stroke="#4CADC1"
                                  stroke-width="4"
                                  stroke-linejoin="round"
                                  stroke-linecap="round"
                                  stroke-miterlimit="10"
                                  stroke-dasharray="300"
                                  stroke-dashoffset="300"
                                  fill="none"
                                  d="M343.6 75.9v20.3l23.1 21.8-23.1 21.8v20.3l44.6-42.1zM326.4 139.8l-23.1-21.8 23.1-21.8v-20.3l-44.6 42.1 44.6 42.1z"
                                />

                                <path
                                  className={classes.path}
                                  stroke="#4CADC1"
                                  stroke-width="4"
                                  stroke-linejoin="round"
                                  stroke-linecap="round"
                                  stroke-miterlimit="10"
                                  stroke-dasharray="500"
                                  stroke-dashoffset="500"
                                  fill="none"
                                  d="M335 38.9c-43.7 0-79.1 35.4-79.1 79.1s35.4 79.1 79.1 79.1 79.1-35.4 79.1-79.1-35.4-79.1-79.1-79.1zM335 182.9c-35.8 0-64.9-29.1-64.9-64.9s29.1-64.9 64.9-64.9 64.9 29.1 64.9 64.9-29.1 64.9-64.9 64.9z"
                                />
                              </svg>
                            </div>
                          </div>

                          <h2
                            data-aos="fade-down-right"
                            data-aos-delay="300"
                            className="text-4xl font-semibold text-white uppercase"
                          >
                            Some Of The Coding Languages I Have Experience With
                          </h2>
                          <br />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="flex flex-col md:flex-row flex-wrap text-center justify-center">
                      {/* Logo 1 */}
                      <div>
                        <div className={classes.ReactContainer}>
                          <span className={classes.reactLogo}>
                            <span className={classes.nucleo}></span>
                          </span>
                        </div>

                        <div className="animate-bounce">
                          <p className={classes.Reactitle}>React</p>
                        </div>
                      </div>
                      {/* Logo 2 */}
                      <div>
                        <div className={classes.jsBox}>
                          <div className={classes.jsLetters}>JS</div>
                          <div className="animate-bounce mt-5">
                            <div className={classes.jsLogo}>JavaScript</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
