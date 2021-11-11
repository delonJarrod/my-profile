import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./DashBoard.module.css";
import Card from "../../ui/Card";
import grams from "../../img/grams.jpg";
import bud1 from "../../img/bud1.jpg";
import bud2 from "../../img/bud2.jpg";
import bud3 from "../../img/bud3.jpg";
import vape from "../../img/vape.jpg";
import vape1 from "../../img/vape1.jpg";
import vape2 from "../../img/vape2.jpg";
import vape3 from "../../img/vape3.jpg";
import edibles from "../../img/edibles.jpg";
import ed1 from "../../img/ed1.jpg";
import ed2 from "../../img/ed2.jpg";
import ed3 from "../../img/ed3.jpg";
import Items from "../Items/Items";

function DashBoard() {
  const [itemGram, setItemGram] = useState(false);
  const [itemVape, setItemVape] = useState(false);
  const [itemEdibles, setItemEdibles] = useState(false);

  function gramsOnClick(e) {
    e.preventDefault();
    setItemGram(true);
  }
  function vapeOnClick(e) {
    e.preventDefault();
    setItemVape(true);
  }

  function ediblesOnClick(e) {
    e.preventDefault();
    setItemEdibles(true);
  }

  if (itemVape) {
    return (
      <div>
        <Items
          display={vape}
          img1={vape1}
          img2={vape2}
          img3={vape3}
          width="600px"
          title="Vape Liquids"
        />
      </div>
    );
  }

  if (itemGram) {
    return (
      <div>
        <Items
          display={grams}
          img1={bud1}
          img2={bud2}
          img3={bud3}
          title="Grams "
        />
      </div>
    );
  }

  if (itemEdibles) {
    return (
      <div>
        <Items
          display={edibles}
          img1={ed1}
          img2={ed2}
          img3={ed3}
          width="500px"
          title="Edibles "
        />
      </div>
    );
  } else
    return (
      <div>
        <h1 className="font-Nunito text-2xl font-bold md:text-4xl md:p-20 p-20 border-b-2">
          DashBoard
        </h1>
        <div className="pt-20 pb-20">
          <Container fluid>
            <Row>
              <Col>
                <div className={classes.dashboardContent}>
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    <div className="flex-col text-left ">
                      <Card title="Grams">
                        <h1 className="text-center pt-10 pb-10">View Items</h1>
                        <div>
                          <img
                            onClick={gramsOnClick}
                            src={grams}
                            alt="Grams"
                            className={classes.gramsImg}
                          />
                        </div>
                      </Card>
                    </div>
                    <div className="flex-col text-left">
                      <Card title="Vape Liquid">
                        <h1 className="text-center pt-10 pb-10">View Items</h1>
                        <div>
                          <img
                            onClick={vapeOnClick}
                            src={vape}
                            alt="Grams"
                            className={classes.vapeImg}
                          />
                        </div>
                      </Card>
                    </div>
                    <div className="flex-col text-left">
                      <Card title="Edibles">
                        <h1 className="text-center pt-10 pb-10">View Items</h1>
                        <div>
                          <img
                            onClick={ediblesOnClick}
                            src={edibles}
                            alt="Grams"
                            className={classes.edibles}
                          />
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
}
export default DashBoard;
