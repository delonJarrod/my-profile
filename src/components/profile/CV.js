import React from "react";
import classes from "./CV.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CVDoc from "../files/CV_Jarrod_2021_Aug.pdf";
import Card from "../ui/Card";

function CV() {
  const CardTitle = "Contact";
  const CardPhone = "071 196 8195";
  const CardEmail = "Email Here";
  return (
    <section>
      <section className={classes.CV}>
        <div className="d-flex">
          <Container fluid>
            <Row>
              <Col className="mt-5 col-sm-5">
                <div className={classes.card}>
                  <Card title={CardTitle} phone={CardPhone} email={CardEmail} />
                </div>
              </Col>
              <Col className={classes.gearsAll}>
                <div className="flex flex-wrap justify-center">
                  <div>
                    <div id="gear-1" className={classes.gear1}>
                      <svg
                        className="animate-spin-slow"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="70%"
                        height="100px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <g>
                          <path
                            fill="none"
                            stroke="#000000"
                            d="M99.412,46.313V53.1
		          l-9.494,4.198c-0.374,1.959-0.891,3.867-1.538,5.715l6.111,8.357l-3.41,5.878L80.739,76.16c-1.294,1.49-2.697,2.885-4.194,4.174
		          l1.093,10.289l-5.907,3.394l-8.399-6.08c-1.857,0.644-3.775,1.157-5.745,1.53l-4.219,9.445h-6.822l-4.22-9.446
		          c-1.969-0.372-3.888-0.886-5.745-1.529l-8.399,6.08l-5.907-3.394l1.094-10.288c-1.499-1.289-2.902-2.685-4.197-4.175l-10.34,1.088
		          L5.42,71.37l6.111-8.356c-0.647-1.848-1.164-3.757-1.538-5.716L0.5,53.1v-6.787l9.493-4.198c0.375-1.959,0.89-3.869,1.537-5.718
		          l-6.11-8.355l3.411-5.878l10.344,1.088c1.295-1.49,2.695-2.886,4.193-4.174L22.274,8.789l5.907-3.394l8.4,6.08
		          c1.857-0.643,3.775-1.158,5.744-1.529l4.22-9.446h6.822l4.219,9.446c1.97,0.372,3.887,0.887,5.744,1.529l8.4-6.08l5.907,3.394
		          l-1.093,10.289c1.497,1.288,2.896,2.685,4.191,4.174l10.345-1.088l3.41,5.878l-6.109,8.355c0.647,1.849,1.162,3.758,1.537,5.718
		          L99.412,46.313z M49.956,34.424c-8.483,0-15.359,6.842-15.359,15.282c0,8.44,6.876,15.282,15.359,15.282
		          c8.482,0,15.359-6.842,15.359-15.282C65.315,41.266,58.438,34.424,49.956,34.424z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div id="gear-2" className={classes.gear2}>
                      <svg
                        className="animate-reverse"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="70%"
                        height="100px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <g>
                          <path
                            fill="none"
                            stroke="#000000"
                            d="M99.412,46.313V53.1
		          l-9.494,4.198c-0.374,1.959-0.891,3.867-1.538,5.715l6.111,8.357l-3.41,5.878L80.739,76.16c-1.294,1.49-2.697,2.885-4.194,4.174
		          l1.093,10.289l-5.907,3.394l-8.399-6.08c-1.857,0.644-3.775,1.157-5.745,1.53l-4.219,9.445h-6.822l-4.22-9.446
		          c-1.969-0.372-3.888-0.886-5.745-1.529l-8.399,6.08l-5.907-3.394l1.094-10.288c-1.499-1.289-2.902-2.685-4.197-4.175l-10.34,1.088
		          L5.42,71.37l6.111-8.356c-0.647-1.848-1.164-3.757-1.538-5.716L0.5,53.1v-6.787l9.493-4.198c0.375-1.959,0.89-3.869,1.537-5.718
		          l-6.11-8.355l3.411-5.878l10.344,1.088c1.295-1.49,2.695-2.886,4.193-4.174L22.274,8.789l5.907-3.394l8.4,6.08
		          c1.857-0.643,3.775-1.158,5.744-1.529l4.22-9.446h6.822l4.219,9.446c1.97,0.372,3.887,0.887,5.744,1.529l8.4-6.08l5.907,3.394
		          l-1.093,10.289c1.497,1.288,2.896,2.685,4.191,4.174l10.345-1.088l3.41,5.878l-6.109,8.355c0.647,1.849,1.162,3.758,1.537,5.718
		          L99.412,46.313z M49.956,34.424c-8.483,0-15.359,6.842-15.359,15.282c0,8.44,6.876,15.282,15.359,15.282
		          c8.482,0,15.359-6.842,15.359-15.282C65.315,41.266,58.438,34.424,49.956,34.424z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div id="gear-3" className={classes.gear3}>
                      <svg
                        className="animate-spin-slow"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="70%"
                        height="100px"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                      >
                        <g>
                          <path
                            fill="none"
                            stroke="#000000"
                            d="M99.412,46.313V53.1
		          l-9.494,4.198c-0.374,1.959-0.891,3.867-1.538,5.715l6.111,8.357l-3.41,5.878L80.739,76.16c-1.294,1.49-2.697,2.885-4.194,4.174
		          l1.093,10.289l-5.907,3.394l-8.399-6.08c-1.857,0.644-3.775,1.157-5.745,1.53l-4.219,9.445h-6.822l-4.22-9.446
		          c-1.969-0.372-3.888-0.886-5.745-1.529l-8.399,6.08l-5.907-3.394l1.094-10.288c-1.499-1.289-2.902-2.685-4.197-4.175l-10.34,1.088
		          L5.42,71.37l6.111-8.356c-0.647-1.848-1.164-3.757-1.538-5.716L0.5,53.1v-6.787l9.493-4.198c0.375-1.959,0.89-3.869,1.537-5.718
		          l-6.11-8.355l3.411-5.878l10.344,1.088c1.295-1.49,2.695-2.886,4.193-4.174L22.274,8.789l5.907-3.394l8.4,6.08
		          c1.857-0.643,3.775-1.158,5.744-1.529l4.22-9.446h6.822l4.219,9.446c1.97,0.372,3.887,0.887,5.744,1.529l8.4-6.08l5.907,3.394
		          l-1.093,10.289c1.497,1.288,2.896,2.685,4.191,4.174l10.345-1.088l3.41,5.878l-6.109,8.355c0.647,1.849,1.162,3.758,1.537,5.718
		          L99.412,46.313z M49.956,34.424c-8.483,0-15.359,6.842-15.359,15.282c0,8.44,6.876,15.282,15.359,15.282
		          c8.482,0,15.359-6.842,15.359-15.282C65.315,41.266,58.438,34.424,49.956,34.424z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className={classes.socials}>
                <Row className="lg:pb-20 pb-10 justify-center pl-10 mx-auto">
                  <div className="flex flex-col md:flex-row mt-4  ">
                    <div className="flex gap-10 gap-5 md:gap-20">
                      <div className="flex-col">
                        <a
                          className={classes.facebook}
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/jarrod.naidoo.18"
                        >
                          <i
                            className="fab fa-facebook fa-3x green"
                            aria-hidden="false"
                          />
                        </a>
                      </div>
                      <div className="flex-col">
                        <a
                          className={classes.instagram}
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/jarrod_thatguy/"
                        >
                          <i
                            className="fab fa-instagram fa-3x green"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <div className="flex-col">
                        <span>
                          <a
                            className={classes.twitter}
                            rel="noreferrer"
                            href="https://github.com/delonJarrod"
                            target="_blank"
                          >
                            <i
                              className="fab fa-git fa-3x green"
                              aria-hidden="true"
                            />
                          </a>
                        </span>
                      </div>
                      <div className="flex-col">
                        <span>
                          <a
                            className={classes.twitter}
                            rel="noreferrer"
                            href=" https://linkedin.com/in/delon-jarrod-naidoo-131299191"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin fa-3x green" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col className="d-flex justify-content-center mb-20">
                <a
                  download="Delon J. Naidoo CV"
                  type="button"
                  href={CVDoc}
                  className="py-3 w-1/2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Download CV
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </section>
  );
}

export default CV;
