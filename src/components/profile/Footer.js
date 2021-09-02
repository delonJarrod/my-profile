import classes from "./Footer.module.css";
import { useHistory } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";

function Footer() {
  const history = useHistory();
  const navigateTo = () => history.push("/contact");

  return (
    <div className={classes.footer}>
      <div className={classes.lowerFooter}>
        <div className="d-flex border-t-2 ">
          <Container fluid>
            <Row>
              <Col>
                <p className="mt-3">
                  All Rights Reserved © 2021 - Developed by Delon J. Naidoo
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Footer;
