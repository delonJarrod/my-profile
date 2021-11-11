import React, { useState } from "react";
import classes from "./Items.module.css";
import Modal from "../../ui/Modal";
function Items({ display, title, img1, img2, img3, width }) {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b-2 m-10">
      <div className="border-2">
        <h1 className="font-Nunito text-2xl font-bold md:text-4xl md:p-20 p-20">
          {title}
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex-col text-left ">
          <div>
            <img
              src={display}
              className={classes.grams}
              alt="grams"
              style={{ width: width }}
            />
          </div>
        </div>
        <div className="flex-col text-center pt-20 font-Nunito text-2xl md:text-3xl">
          <div className=" border-b-2 ">
            <h1>Price per 100 grams:</h1>
            <h1>
              <b> R150,00</b>
            </h1>
            <div className="ml-20 grid grid-cols-3 md:grid-cols-2 gap-5 mb-20">
              <div className="flex-col  border-2">
                <img src={img1} alt="bud1" />
              </div>
              <div className="flex-col  border-2">
                <img src={img2} alt="bud2" style={{ height: "78%" }} />
              </div>
              <div className="flex-col  border-2 ">
                <img src={img3} alt="bud3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 text-center  pt-10 pb-20">
        <div>
          <Modal showModal={show} title={title} onHide={() => setShow(false)} />
        </div>
      </div>
    </div>
  );
}

export default Items;
