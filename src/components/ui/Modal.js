import { Modal } from "react-bootstrap";
import { useState } from "react";
import classes from "./Modal.module.css";

function Modals(props) {
  const [show, setShow] = useState(false);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          What We Offer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> -> Website and Web Application Development</p>
        <p>-> Mobile Application Development </p>
        <p>-> Digital Marketing and Adversiting</p>
        <p>-> SEO performance optimisation</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className={classes.btnOutlinePrimary}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modals;
